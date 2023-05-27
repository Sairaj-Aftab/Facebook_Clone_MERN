import React from "react";
import "./smallpopup.css";

const SmallPopup = ({children}) => {
  return <div className="small-popup">
    {children}
  </div>;
};

export default SmallPopup;
