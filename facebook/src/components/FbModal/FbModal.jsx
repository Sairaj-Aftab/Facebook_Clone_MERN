import React from "react";
import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdArrowBack } from "react-icons/md";
import usePopupClose from "../../hooks/usePopupClose";
import "./fbmodal.css";

const FbModal = ({ children, title, closePopup, back }) => {
  return (
    <div className="blur-box">
      <div className="fb-modal-wraper">
        <div className="fb-modal-box">
          <div className="fb-modal-header">
            {back && (
              <div className="icon back-icon" onClick={() => back(false)}>
                <MdArrowBack />
              </div>
            )}
            <h1>{title}</h1>
            {closePopup && (
              <div className="icon" onClick={() => closePopup(false)}>
                <RxCross2 />
              </div>
            )}
          </div>
          <div className="fb-modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FbModal;
