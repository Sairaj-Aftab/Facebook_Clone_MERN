import React from "react";
import { GiWorld } from "react-icons/gi";
import "./QuickAddAndEditBox.css";

const QuickAddAndEditBox = ({ save, close, data, data2 }) => {
  return (
    <div className="quick-add-edit-box">
      <div className="edit-bio-box">
        <div className="edit-bio-inner-box">
          <textarea
            name=""
            placeholder={data.placeholder}
            onChange={(e) => data.setData(e.target.value)}
          >
            {data.preData}
          </textarea>
          {data2 && (
            <textarea
              name=""
              placeholder={data2.placeholder}
              onChange={(e) => data2.setData(e.target.value)}
            >
              {data2.preData}
            </textarea>
          )}
          <span>remain characters remaining</span>
        </div>
        <div className="edit-bio-bottom-button">
          <div className="icon-text">
            <div className="icon">
              <GiWorld />
            </div>
            <span>Public</span>
          </div>
          <div className="buttons">
            <button className="cancel" onClick={() => close(false)}>
              Cancel
            </button>
            <button className={`save blue`} onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAddAndEditBox;
