import React from "react";
import CreatePost from "../../../components/CreatePost/CreatePost";
import PostSection from "../../../components/PostSection/PostSection";
import UserIntro from "../UserIntro/UserIntro";
import UserIntroAllFriends from "../UserIntroAllFriends/UserIntroAllFriends";
import UserIntroAllPhoto from "../UserIntroAllPhoto/UserIntroAllPhoto";

const PostsPage = () => {
  return (
    <div className="bottom-body">
      <div className="bottom-body-wraper">
        <div className="user-intro-section">
          <UserIntro />
          <UserIntroAllPhoto />
          <UserIntroAllFriends />
        </div>
        <div className="right-timeline-section">
          <div style={{ marginTop: "-20px" }}>
            <CreatePost />
          </div>
          <PostSection />
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
