import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaPause, FaPlay } from "react-icons/fa";
import { GoMute, GoUnmute } from "react-icons/go";
import { useEffect } from "react";
import { useState } from "react";
import { featured } from "../../fakeData/fakeData";
import { useSelector } from "react-redux";
import "./storypopup.css";

const StoryPopup = ({ close }) => {
  const { users } = useSelector((state) => state.auth);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mute, setMute] = useState(false);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    const sliderInterval = setTimeout(() => {
      if (photoIndex <= featured.length) {
        photoIndex === featured.length - 1 && close(false);
        setPhotoIndex(photoIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(sliderInterval);
  }, [photoIndex]);

  const handleNextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % featured.length);
  };
  const handlePrevPhoto = () => {
    setPhotoIndex((photoIndex - 1) % featured.length);
  };
  const handleSoundManage = () => {
    setMute(!mute);
  };
  const handlePlayManage = () => {
    setPause(!pause);
  };
  return (
    <div className="story-popup">
      <div className="story-popup-wraper">
        <div
          className="img"
          style={{
            backgroundImage: `url(${featured[photoIndex].photo})`,
          }}
        >
          <img src={featured[photoIndex].photo} alt="" />
          <div className="progress-bar-wraper">
            {featured.map((data, index) => (
              <div
                key={index}
                className={`progress-bar-item ${
                  index === photoIndex ? "active" : ""
                } ${index < photoIndex ? "viewed" : ""}`}
              >
                <div className="progress"></div>
              </div>
            ))}
          </div>
          <div className="navigation-bar">
            {/* {photoIndex > 0 && (
              
            )} */}
            <div
              onClick={handlePrevPhoto}
              style={
                photoIndex === 0
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              className="prev-icon icon"
            >
              <SlArrowLeft />
            </div>
            <div
              style={
                photoIndex + 1 === featured.length
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              onClick={handleNextPhoto}
              className="next-icon icon"
            >
              <SlArrowRight />
            </div>
          </div>
          <div className="story-popup-profile">
            <div className="story-popup-profile-left">
              <img
                src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="name">Sairaj Aftab</div>
              <div className="posting-timing">1h</div>
            </div>
            <div className="story-popup-profile-right">
              <div onClick={handlePlayManage} className="play-icon icon">
                {pause && <FaPause />}
                {!pause && <FaPlay />}
              </div>

              <div onClick={handleSoundManage} className="mute-icon icon">
                {mute && <GoMute />}
                {!mute && <GoUnmute />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPopup;
