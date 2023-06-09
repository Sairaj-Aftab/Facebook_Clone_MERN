import React from "react";
import "./fbcard.css";

const FbCard = ({ children }) => {
  return (
    <div className="fb-card">
      <div className="fb-card-wraper">{children}</div>
    </div>
  );
};

export default FbCard;
