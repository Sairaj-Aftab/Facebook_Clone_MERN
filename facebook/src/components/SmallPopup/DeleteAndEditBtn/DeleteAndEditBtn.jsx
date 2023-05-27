import React from "react";
import { MdStarBorder } from "react-icons/md";
import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import SmallPopup from "../SmallPopup";
import "../smallpopup.css";

const DeleteAndEditBtn = () => {
  return (
    <SmallPopup>
      <div className="delete-edit-btn">
        <div className="delete-edit-btn-item">
          <div className="icon">
            <MdStarBorder />
          </div>{" "}
          <span>See life event</span>
        </div>
        <div className="delete-edit-btn-item">
          <div className="icon">
            <RiPencilLine />
          </div>{" "}
          <span>Edit workplace</span>
        </div>
        <div className="delete-edit-btn-item">
          <div className="icon">
            <RiDeleteBinLine />
          </div>{" "}
          <span>Delete workplace</span>
        </div>
      </div>
    </SmallPopup>
  );
};

export default DeleteAndEditBtn;
