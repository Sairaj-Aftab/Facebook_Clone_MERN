import axios from "axios";
import React, { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FbModal from "../../../../components/FbModal/FbModal";
import { addFeaturedSlides } from "../../../../redux/auth/actionType";
import SaveFeatured from "../SaveFeatured/SaveFeatured";
import "./addnewfeatured.css";

const AddNewFeatured = ({ close, back }) => {
  const [featuredPhotos, setFeaturedPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [nextModal, setNextModal] = useState(false);
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Handel Change File
  const handleChangeFile = (e) => {
    setFeaturedPhotos((prev) => [...prev, ...Array.from(e.target.files)]);
    setSelectedPhotos((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const handleChangeCheckbox = (e) => {
    const update = [...selectedPhotos];
    const even = featuredPhotos.find((data) => data.name === e.target.value);
    if (selectedPhotos.includes(even)) {
      update.splice(selectedPhotos.indexOf(even), 1);
    } else {
      update.push(even);
    }
    setSelectedPhotos(update);
  };
  const handleSavaFeatured = (collection) => {
    const data = new FormData();
    data.append("collection_name", collection);
    // data.append("slides", selectedPhotos);
    selectedPhotos.forEach((item) => {
      data.append("slides", item);
    });
    // axios.post(`/api/v1/user/featured-slides/${users._id}`, data);
    dispatch(addFeaturedSlides(users._id, data));
  };
  return (
    <div>
      <FbModal title="Edit Featured Collection" back={back}>
        <div className="edit-featured-collection">
          <div className="add-new-section">
            <label>
              <div className="upload-photos-button">Upload Photos</div>
              <input onChange={handleChangeFile} type="file" multiple={true} />
            </label>
          </div>
          {featuredPhotos && (
            <div className="all-image-box">
              <div className="all-image-box-inner">
                {featuredPhotos.length > 0 && (
                  <>
                    <h4>Uploaded Photos</h4>
                    <div className="image-box">
                      {featuredPhotos.map((item, index) => {
                        const urlImage = URL.createObjectURL(item);
                        return (
                          <>
                            <label className="container">
                              <img key={index} src={urlImage} alt="" />
                              <input
                                type="checkbox"
                                value={item.name}
                                checked={selectedPhotos.includes(item)}
                                onChange={handleChangeCheckbox}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="edit-featured-collection-footer-button">
            <button onClick={() => close(false)} className="cancel">
              Cancel
            </button>
            <button
              className="next"
              onClick={() => setNextModal(!nextModal)}
              // onClick={handleSavaFeatured}
              disabled={selectedPhotos.length < 1}
            >
              Next
            </button>
          </div>
        </div>
        {nextModal && (
          <SaveFeatured
            photos={selectedPhotos}
            save={handleSavaFeatured}
            close={setNextModal}
            closeDone={close}
          />
        )}
      </FbModal>
    </div>
  );
};

export default AddNewFeatured;
