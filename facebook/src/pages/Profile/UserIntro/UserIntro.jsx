import React from "react";
import FbCard from "../../../components/FbCard/FbCard";
import { GiWorld } from "react-icons/gi";
import { GrPrevious, GrNext } from "react-icons/gr";
import introProfileIcon from "../../../assets/fbprofile.png";
import introCodingIcon from "../../../assets/fbcodingicon.png";
import introFitnessIcon from "../../../assets/fbfitnessicon.png";
import introEatingIcon from "../../../assets/fbeatingicon.png";
import introSleepingIcon from "../../../assets/fbsleepingicon.png";
import introReadingIcon from "../../../assets/fbreadingicon.png";
import work from "../../../assets/work.png";
import studies from "../../../assets/study.png";
import fbgithub from "../../../assets/fbgithub.png";
import fblive from "../../../assets/fblives.png";
import fbrelation from "../../../assets/fbrelation.png";
import "../profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { profileUpdate } from "../../../redux/auth/actionType";
import EditDetailsModal from "./EditDetailsModal/EditDetailsModal";
import "../../../components/QuickAddAndEditBox/QuickAddAndEditBox.css";
import FullWidthPopup from "../../../components/FullWidthPopup/FullWidthPopup";
import StoryPopup from "../../../components/StoryPopup/StoryPopup";
import EditFeatureModal from "./EditFeatureModal/EditFeatureModal";
import AddNewFeatured from "./AddNewFeatured/AddNewFeatured";

const UserIntro = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const [bioShow, setBioShow] = useState(false);
  const [bio, setBio] = useState(users.bio ? users.bio : "");
  const [remain, setRemain] = useState(101 - bio.length);
  const [saveBtn, setSaveBtn] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  // Featured Story Full width Modal Manage
  const [fullWidthModal, setFullWidthModal] = useState(false);

  const handleBioRemain = (e) => {
    setBio(e.target.value);
    setRemain(101 - e.target.value.length);
    setSaveBtn(false);
    if (remain <= 0) {
      setSaveBtn(true);
    }
  };
  const handleAddBio = () => {
    setBioShow(!bioShow);
  };

  const handleBioSave = (e) => {
    e.preventDefault();
    dispatch(profileUpdate(users._id, { bio }, setBioShow));
  };

  // Edit Featured Manage
  const [showEditFeatured, setShowEditFeatured] = useState(false);
  // Add New Featured Collection Manage
  const [showAddFeatured, setShowAddFeatured] = useState(false);

  return (
    <FbCard>
      <div className="user-intro">
        <h3>Intro</h3>
        {/* User Bio */}
        <div className="bio">
          {users.bio && !bioShow && (
            <>
              <p>{users.bio}</p>
              <button className="user-intro-button" onClick={handleAddBio}>
                Edit bio
              </button>
            </>
          )}
          {!users.bio && !bioShow && (
            <>
              <button className="user-intro-button" onClick={handleAddBio}>
                Add bio
              </button>
            </>
          )}
          {bioShow && (
            <div className="quick-add-edit-box">
              <div className="edit-bio-box">
                <div className="edit-bio-inner-box">
                  <textarea
                    name=""
                    placeholder="Describe who you are"
                    onChange={handleBioRemain}
                  >
                    {users.bio}
                  </textarea>
                  <span>{remain} characters remaining</span>
                </div>
                <div className="edit-bio-bottom-button">
                  <div className="icon-text">
                    <div className="icon">
                      <GiWorld />
                    </div>
                    <span>Public</span>
                  </div>
                  <div className="buttons">
                    <button
                      className="cancel"
                      onClick={() => setBioShow(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className={`save ${!saveBtn && "active"}`}
                      disabled={saveBtn}
                      onClick={handleBioSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="user-intro-details">
          <ul>
            <li>
              <img src={introProfileIcon} alt="" />
              <p className="content">
                <span className="bold">Profile</span> .{" "}
                <span>{users.category}</span>
              </p>
            </li>
            {/* Profession and Job and work place */}
            {users.profession.map((data, index) => (
              <li key={index}>
                <img src={work} alt="" />
                <p className="content">
                  <span>
                    {data.positon} of{" "}
                    <span className="bold">{data.company}</span>
                  </span>
                </p>
              </li>
            ))}

            {/* Studies Background */}
            {users.education.college.map((data, index) => (
              <li key={index}>
                <img src={studies} alt="" />
                <p className="content">
                  <span>
                    {data.collegeLeaveOption} at{" "}
                    <span className="bold">{data.collegeName}</span>
                  </span>
                </p>
              </li>
            ))}
            {users.education.high_school && (
              <li>
                <img src={studies} alt="" />
                <p className="content">
                  <span>
                    {users.education.high_school.highLeaveOption} at{" "}
                    <span className="bold">
                      {users.education.high_school.highName}
                    </span>
                  </span>
                </p>
              </li>
            )}

            {/* Lives */}
            {users.living && (
              <li>
                <img src={fblive} alt="" />
                <p className="content">
                  <span>
                    Lives in <span className="bold">{users.living}</span>
                  </span>
                </p>
              </li>
            )}
            {/* Home Town */}
            {users.home_town && (
              <li>
                <img src={fblive} alt="" />
                <p className="content">
                  <span>
                    From <span className="bold">{users.home_town}</span>
                  </span>
                </p>
              </li>
            )}

            {/* Relationship */}
            {users.relationship && (
              <li>
                <img src={fbrelation} alt="" />
                <p className="content">
                  <span>{users.relationship}</span>
                </p>
              </li>
            )}
            {/* Social Media */}
            <li>
              <img src={fbgithub} alt="" />
              <p className="content">
                <span className="link">Sairaj-Aftab</span>
              </p>
            </li>
          </ul>
          {modalShow && <EditDetailsModal setModalShow={setModalShow} />}
          <button
            onClick={() => setModalShow(!modalShow)}
            className="user-intro-button"
          >
            Edit details
          </button>
        </div>
        <div className="user-intro-hobbies">
          <div className="hobbies-list">
            <ul>
              <li>
                <img src={introCodingIcon} alt="" /> <span>Coding</span>
              </li>
              <li>
                <img src={introFitnessIcon} alt="" /> <span>Fitness</span>
              </li>
              <li>
                <img src={introEatingIcon} alt="" /> <span>Eating</span>
              </li>
              <li>
                <img src={introCodingIcon} alt="" />{" "}
                <span>Learning to code</span>
              </li>
              <li>
                <img src={introSleepingIcon} alt="" /> <span>Sleeping</span>
              </li>
              <li>
                <img src={introReadingIcon} alt="" /> <span>Reading</span>
              </li>
              <li>
                <span className="see-all">See all</span>
              </li>
            </ul>
          </div>
          <button className="user-intro-button">Edit hobbies</button>
        </div>
        <div className="user-intro-featured">
          <ul>
            {users.featured_collection &&
              users.featured_collection
                .map((item, index) => {
                  return (
                    <li>
                      <div
                        onClick={() => setFullWidthModal(true)}
                        className="featured-image"
                      >
                        <img
                          src={`/featured_slides/${item.photos[0]}`}
                          alt=""
                        />
                        {item.photos.length > 1 && (
                          <div className="featured-img-count">
                            + {item.photos.length - 1}
                          </div>
                        )}
                      </div>
                      <p>{item.collection_name}</p>
                    </li>
                  );
                })
                .reverse()}
          </ul>
          <div className="next-prev">
            <div className="icon prev-icon">
              <GrPrevious />
            </div>
            {users.featured_collection.length > 3 && (
              <div className="icon next-icon">
                <GrNext />
              </div>
            )}
          </div>

          {fullWidthModal && (
            <FullWidthPopup close={setFullWidthModal}>
              <StoryPopup close={setFullWidthModal} />
            </FullWidthPopup>
          )}

          {users.featured_collection.length > 0 && (
            <button
              onClick={() => setShowEditFeatured(true)}
              className="user-intro-button"
            >
              Edit featured
            </button>
          )}
          {users.featured_collection.length < 1 && (
            <button
              onClick={() => setShowEditFeatured(true)}
              className="user-intro-button"
            >
              Add featured
            </button>
          )}
          {showEditFeatured && (
            <EditFeatureModal
              close={setShowEditFeatured}
              showFeatured={setShowAddFeatured}
            />
          )}
          {showEditFeatured && showAddFeatured && (
            <AddNewFeatured
              close={setShowAddFeatured}
              back={setShowAddFeatured}
            />
          )}
        </div>
      </div>
    </FbCard>
  );
};

export default UserIntro;
