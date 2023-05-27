import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import PostSection from "../PostSection/PostSection";
import Story from "../Story/Story";
import "./centerside.css";

const CenterSide = () => {
  return (
    <div className="center-side">
      <div className="wraper">
        <Story />
        <CreatePost />
        <PostSection />
      </div>
    </div>
  );
};

export default CenterSide;
