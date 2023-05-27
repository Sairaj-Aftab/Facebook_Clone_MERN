import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import plusicon from "../../../../assets/fbplusicon.png";
import fbworkicon from "../../../../assets/bigworkicon.png";
import worldicon from "../../../../assets/worldicon.png";
import studyicon from "../../../../assets/bigstudyicon.png";
import homeicon from "../../../../assets/bighomeicon.png";
import hurticon from "../../../../assets/bighurticon.png";
import callicon from "../../../../assets/bigcallicon.png";
import emailicon from "../../../../assets/bigemailicon.png";
import linkedinicon from "../../../../assets/biglinkedinicon.png";
import githubicon from "../../../../assets/biggithubicon.png";
import birthdayicon from "../../../../assets/bigbirthdayicon.png";
import manicon from "../../../../assets/bigmanicon.png";
import categoryicon from "../../../../assets/bigcategoryicon.png";
import { useDispatch, useSelector } from "react-redux";
import QuickAddAndEditBox from "../../../../components/QuickAddAndEditBox/QuickAddAndEditBox";
import { profileUpdate } from "../../../../redux/auth/actionType";

const PlacesLived = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const [editBoxShow, setEditBoxShow] = useState(false);
  const [editBoxShow1, setEditBoxShow1] = useState(false);
  const [homeTown, setHomeTown] = useState();
  const [currentCity, setCurrentCity] = useState();

  const handleSaveHomeTown = (e) => {
    e.preventDefault();
    dispatch(profileUpdate(users._id, { home_town: homeTown }));
    setEditBoxShow(false);
  };
  const handleSaveCurrentCity = (e) => {
    e.preventDefault();
    dispatch(profileUpdate(users._id, { living: currentCity }));
    setEditBoxShow1(false);
  };

  return (
    <div className="fb-about-page-overview-section">
      <div className="fb-about-page-overview-section-wraper">
        {/* Places lived */}
        <h4>Places lived</h4>
        <ul>
          {/* Add Home Town */}
          {!users.home_town && !editBoxShow && (
            <li>
              <div
                onClick={() => setEditBoxShow(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add hometown</span>
              </div>
            </li>
          )}
          {/* Add Current City */}
          {!users.living && !editBoxShow1 && (
            <li>
              <div
                onClick={() => setEditBoxShow1(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add current city</span>
              </div>
            </li>
          )}
          {editBoxShow && (
            <QuickAddAndEditBox
              save={handleSaveHomeTown}
              close={setEditBoxShow}
              data={{
                placeholder: "Add home town",
                data: homeTown,
                setData: setHomeTown,
                preData: users.home_town,
              }}
            />
          )}
          {editBoxShow1 && (
            <QuickAddAndEditBox
              save={handleSaveCurrentCity}
              close={setEditBoxShow1}
              data={{
                placeholder: "Add current city",
                data: currentCity,
                setData: setCurrentCity,
                preData: users.living,
              }}
            />
          )}

          {/* Showing Living City */}
          {users.living && !editBoxShow1 && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={homeicon} alt="" />
                <div>
                  <span>{users.living}</span>
                  <p>Current city</p>
                </div>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div
                  className="icon"
                  onClick={() => {
                    setEditBoxShow1(true);
                  }}
                >
                  <BiDotsHorizontalRounded />
                </div>
              </div>
            </li>
          )}
          {/* Showing Home Town */}
          {users.home_town && !editBoxShow && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={homeicon} alt="" />
                <div>
                  <span>{users.home_town}</span>
                  <p>Home town</p>
                </div>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon" onClick={() => setEditBoxShow(true)}>
                  <BiDotsHorizontalRounded />
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlacesLived;
