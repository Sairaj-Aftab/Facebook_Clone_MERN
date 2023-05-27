import React from "react";
import FbModal from "../../../../components/FbModal/FbModal";
import editfeaturedimg from "../../../../assets/editfeatured.png";
import "./editfeaturemodal.css";

const EditFeatureModal = ({ close, showFeatured }) => {
  return (
    <div>
      <FbModal title="Edit featured" closePopup={close}>
        <div className="edit-featured-modal">
          <div className="img-description">
            <img src={editfeaturedimg} alt="" />
            <p>
              Feature your favorite photos and stories here for all your friends
              to see.
            </p>
          </div>
          <button onClick={() => showFeatured(true)}>Add New</button>
        </div>
      </FbModal>
    </div>
  );
};

export default EditFeatureModal;
