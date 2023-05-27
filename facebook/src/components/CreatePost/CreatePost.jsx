import React from "react";
import { useSelector } from "react-redux";
import profileimg from "../../assets/profile.png";
import livevideo from "../../assets/livevideo.png";
import gallery from "../../assets/gallery.png";
import feelings from "../../assets/feelings.png";
import { TiWorld } from "react-icons/ti";
import { MdArrowDropDown } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import fbcoloricon from "../../assets/fbcoloricon.png";
import "./createpost.css";
import FbModal from "../FbModal/FbModal";
import { useState } from "react";

const CreatePost = () => {
  const { users } = useSelector((state) => state.auth);
  const [closePopup, setClosePopup] = useState(false);
  return (
    <div className="create-post">
      <div className="topside">
        <img
          src={
            users.profile_photo
              ? `/profile_photo/${users.profile_photo}`
              : profileimg
          }
          alt=""
        />
        <span onClick={() => setClosePopup(!closePopup)}>
          What's on your mind, Sairaj?
        </span>
      </div>
      {/* Create Post Modal Popup */}
      {closePopup && (
        <FbModal title="Create post" closePopup={setClosePopup}>
          <div className="create-post-popup">
            <div className="create-post-popup-profile">
              <img
                src={
                  users.profile_photo
                    ? `/profile_photo/${users.profile_photo}`
                    : profileimg
                }
                alt=""
              />
              <div className="create-post-popup-profile-right">
                <h4>
                  {users.first_name} {users.sur_name}
                </h4>
                <div className="public-option">
                  <div className="icon">
                    <TiWorld />
                  </div>
                  <span>Public</span>
                  <div className="icon">
                    <MdArrowDropDown />
                  </div>
                </div>
              </div>
            </div>
            <div className="create-post-popup-content">
              <textarea
                name=""
                placeholder="What's on your mind, Sairaj?"
              ></textarea>
            </div>
            <div className="create-post-popup-color-emoji">
              <img
                src="https://web.facebook.com/images/composer/SATP_Aa_square-2x.png"
                alt=""
              />
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </div>
            <div className="create-post-popup-file-icon">
              <span>Add to your post</span>
              <div className="file-icon-list">
                <img src={fbcoloricon} alt="" />
                <img src={fbcoloricon} alt="" />
                <img src={fbcoloricon} alt="" />
                <img src={fbcoloricon} alt="" />
                <img src={fbcoloricon} alt="" />
                <img src={fbcoloricon} alt="" />
              </div>
            </div>
            <div className="create-post-popup-file-button">
              <button>Post</button>
            </div>
          </div>
        </FbModal>
      )}

      <div className="bottomside">
        <div className="col">
          <img src={livevideo} alt="" />
          <span>Live video</span>
        </div>
        <div className="col">
          <img src={gallery} alt="" />
          <span>Photo/video</span>
        </div>
        <div className="col">
          <img src={feelings} alt="" />
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
