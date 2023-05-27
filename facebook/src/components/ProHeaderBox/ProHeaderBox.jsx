import React, { useCallback } from "react";
import Cropper from "react-easy-crop";
import profileimg from "../../assets/profile.png";
import coverPhoto from "../../assets/cover_photo.jpg";
import {
  AiFillCamera,
  AiOutlineCaretDown,
  AiOutlineCloudUpload,
  AiOutlineDrag,
} from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BsDot, BsTools } from "react-icons/bs";
import { MdEdit, MdOutlinePhotoLibrary, MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import "./proheaderbox.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import UpdateProfilePic from "../UpdateProfilePic/UpdateProfilePic";
import getCroppedImg from "../../utility/cropImage";
import { coverPhotoUpdate } from "../../redux/auth/actionType";

const ProHeaderBox = () => {
  const menuItem = [
    { id: 0, path: "/profile", name: "Posts" },
    { id: 1, path: "/profile/about", name: "About" },
    { id: 2, path: "/profile/reels", name: "Reels" },
    { id: 3, path: "/profile/photos", name: "Photos" },
    { id: 4, path: "/profile/videos", name: "Videos" },
    { id: 5, path: "/profile/groups", name: "Groups" },
  ];

  const dispatch = useDispatch();
  const [showEditCoverBox, setShowEditCoverBox] = useState(false);

  const [showUpdateProPic, setShowUpdateProPic] = useState(false);
  const [coverSaveButton, setCoverSaveButton] = useState(false);

  const { users } = useSelector((state) => state.auth);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [image, setImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setCoverSaveButton(true);
  };
  const handleCancle = () => {
    setCoverSaveButton(false);
    setImage(null);
    setShowEditCoverBox(false);
  };
  const handleCoverPhotoSave = async () => {
    const croppedImage = await getCroppedImg(
      image,
      croppedAreaPixels,
      rotation
    );
    setCroppedImage(croppedImage);
    setImage(croppedImage);

    const blobImage = await fetch(croppedImage).then((res) => res.blob());
    const finalFile = new File([blobImage], "cover_photo.png", {
      type: "image/png",
    });

    const formData = new FormData();
    formData.append("cover", finalFile);
    dispatch(coverPhotoUpdate(users._id, formData));
    setImage(null);
    setShowEditCoverBox(false);
  };
  return (
    <div className="pro-header-box">
      <div className="pro-box-wraper">
        {image && coverSaveButton && (
          <div className="save-cover-photo">
            <div className="save-cover-photo-left">
              <div className="save-cover-photo-icon">
                <GiWorld />
              </div>
              <span>Your cover photo is public.</span>
            </div>
            <div className="save-cover-photo-right">
              <button className="cover-photo-cancel" onClick={handleCancle}>
                Cancel
              </button>
              <button
                className="cover-photo-save"
                onClick={handleCoverPhotoSave}
              >
                Save changes
              </button>
            </div>
          </div>
        )}

        <div className="cover-photo">
          {!image && (
            <img
              src={
                users.cover_photo
                  ? `/cover_photo/${users.cover_photo}`
                  : coverPhoto
              }
              alt=""
            />
          )}

          {image && (
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={3 / 1}
              cropShape="rect"
              showGrid={false}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              objectFit="contain"
            />
          )}

          {!image && (
            <button
              className="edit-cover-photo"
              onClick={() => setShowEditCoverBox(!showEditCoverBox)}
            >
              <div className="icon">
                <AiFillCamera />
              </div>{" "}
              <span>Edit cover photo</span>
            </button>
          )}
          {showEditCoverBox && !image && (
            <div className="edit-cover-photo-more-card">
              <ul>
                <li>
                  <div className="edit-cover-photo-icon">
                    <MdOutlinePhotoLibrary />
                  </div>
                  <span>Select Photo</span>
                </li>
                <li className="upload-photo">
                  <div className="edit-cover-photo-icon">
                    <AiOutlineCloudUpload />
                  </div>
                  <span>Upload Photo</span>
                  <input
                    className="upload-file"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </li>
                <li>
                  <div className="edit-cover-photo-icon">
                    <AiOutlineDrag />
                  </div>
                  <span>Reposition</span>
                </li>
                <li>
                  <div className="edit-cover-photo-icon">
                    <MdDelete />
                  </div>
                  <span>Remove</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="info-header">
          <div className="top-part">
            <div className="pro-with-name-info">
              <div className="pro-image">
                <img
                  className="pro-img"
                  src={
                    users.profile_photo
                      ? `/profile_photo/${users.profile_photo}`
                      : profileimg
                  }
                  alt=""
                />
                <div className="icon" onClick={() => setShowUpdateProPic(true)}>
                  <AiFillCamera />
                </div>
                {showUpdateProPic && (
                  <UpdateProfilePic close={() => setShowUpdateProPic(false)} />
                )}
              </div>
              <div className="name-info">
                <div className="pro-name">
                  <h1>
                    {users.first_name} {users.sur_name}
                  </h1>
                </div>
                <div className="follower-following-count">
                  <div className="followers-count">1.8k followers</div>
                  <BsDot />
                  <div className="following-count">1 following</div>
                </div>
                <div className="followers-pro">
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                  <img
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="edit">
                <div className="icon">
                  <MdEdit />
                </div>
                <span>Edit</span>
              </button>
              <button className="view-tools">
                <div className="icon">
                  <BsTools />
                </div>
                <span>View tools</span>
              </button>
              <button className="add-to-story">
                <div className="icon">
                  <IoAddCircle />
                </div>
                <span>Add to story</span>
              </button>
            </div>
          </div>
          <div className="bottom-part">
            <div className="bottom-header">
              <div className="bottom-header-left">
                <ul>
                  {menuItem.map((data, index) => (
                    <li key={index}>
                      <NavLink to={data.path}>
                        <button>{data.name}</button>
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <a href="">
                      <button>
                        More{" "}
                        <div className="icon">
                          <AiOutlineCaretDown />
                        </div>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bottom-header-right-icon">
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProHeaderBox;
