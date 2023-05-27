import { React, useState } from "react";
import FbModal from "../../../../components/FbModal/FbModal";
import "./SaveFeatured.css";

const SaveFeatured = ({ photos, save, close, closeDone }) => {
  const [collectionName, setCollctionName] = useState("Collection");

  const handleSaveFeatured = () => {
    save(collectionName);
    close(false);
    closeDone(false);
  };
  return (
    <div>
      <FbModal title="Edit Featured Collection">
        <div className="save-featured-body">
          <div className="cover-title">
            <h5>Cover</h5>
            <img src={URL.createObjectURL(photos[0])} alt="" />
            <div className="input-collection-name">
              <span>Title</span>
              <input
                type="text"
                value={collectionName}
                onChange={(e) => setCollctionName(e.target.value)}
              />
            </div>
          </div>
          <div className="more-images">
            {photos &&
              photos.slice(1).map((item, index) => {
                let imageLink = URL.createObjectURL(item);

                return <img key={index} src={imageLink} alt="" />;
              })}
          </div>
        </div>
        <div className="save-featured-footer">
          <div className="left-side"></div>
          <div className="right-button">
            <button className="cancel" onClick={() => close(false)}>
              Cancel
            </button>
            <button className="save" onClick={handleSaveFeatured}>
              Save
            </button>
          </div>
        </div>
      </FbModal>
    </div>
  );
};

export default SaveFeatured;
