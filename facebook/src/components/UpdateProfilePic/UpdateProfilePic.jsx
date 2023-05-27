import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { AiOutlinePlus } from "react-icons/ai";
import { MdCrop, MdAccessTimeFilled } from "react-icons/md";
import { BiPlus, BiMinus, BiWorld } from "react-icons/bi";
import FbModal from "../FbModal/FbModal";
import "./updateprofilepic.css";
import getCroppedImg from "../../utility/cropImage";
import { useDispatch, useSelector } from "react-redux";
import { profilePhotoUpdate } from "../../redux/auth/actionType";

const UpdateProfilePic = ({ close }) => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [image, setImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfilePhotoSave = async () => {
    const croppedImage = await getCroppedImg(
      image,
      croppedAreaPixels,
      rotation
    );
    setCroppedImage(croppedImage);
    setImage(croppedImage);

    const blobImage = await fetch(croppedImage).then((res) => res.blob());
    const finalFile = new File([blobImage], "profile_photo.png", {
      type: "image/png",
    });

    const formData = new FormData();
    formData.append("profile", finalFile);
    dispatch(profilePhotoUpdate(users._id, formData));
    close(false);
  };
  return (
    <div>
      <FbModal title="Update profile picture" closePopup={close}>
        {!image && (
          <div className="update-profile-pic-button">
            <div className="update-profile-pic-button-icon">
              <AiOutlinePlus />
            </div>
            <span>Upload photo</span>
            <input onChange={handleImageUpload} type="file" />
          </div>
        )}

        {/* Profile Photo Manage */}
        {image && (
          <div className="update-profile-pic-manage">
            <div className="description">
              <textarea placeholder="Description"></textarea>
            </div>
            <div className="profile-picture">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1 / 1}
                cropSize={{ width: 252, height: 252 }}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                objectFit="contain"
              />
            </div>
            <div className="range-bar">
              <button
                disabled={zoom <= 1}
                className="range-bar-icon"
                onClick={() => setZoom(zoom - 0.5)}
              >
                <BiMinus />
              </button>
              <input
                type="range"
                min={1}
                max={5}
                step={0.01}
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
              />
              <button
                disabled={zoom >= 5}
                className="range-bar-icon"
                onClick={() => setZoom(zoom + 0.5)}
              >
                <BiPlus />
              </button>
            </div>
            <div className="buttons">
              <button onClick={showCroppedImage}>
                <div className="update-profile-pic-manage-icon">
                  <MdCrop />
                </div>
                <span>Crop photo</span>
              </button>
              <button>
                <div className="update-profile-pic-manage-icon">
                  <MdAccessTimeFilled />
                </div>
                <span>Make temporary</span>
              </button>
            </div>
            <div className="contents">
              <div className="contents-icon">
                <BiWorld />
              </div>
              <span>Your profile picture is public.</span>
            </div>
            <div className="footer-buttons">
              <div className="cancel" onClick={close}>
                Cancel
              </div>
              <div className="save" onClick={handleProfilePhotoSave}>
                Save
              </div>
            </div>
          </div>
        )}
      </FbModal>
    </div>
  );
};

export default UpdateProfilePic;
