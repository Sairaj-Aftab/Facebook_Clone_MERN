import React from "react";
import FbModal from "../../../../components/FbModal/FbModal";
import workIcon from "../../../../assets/work.png";
import plusIcon from "../../../../assets/fbplusicon.png";
import fbwatchicon from "../../../../assets/fbwatchicon.png";
import { FaPen } from "react-icons/fa";
import introProfileIcon from "../../../../assets/fbprofile.png";
import studies from "../../../../assets/study.png";
import fblive from "../../../../assets/fblives.png";
import fbrelation from "../../../../assets/fbrelation.png";
import "../../profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EditDetailsModal = ({ setModalShow }) => {
  const { users } = useSelector((state) => state.auth);
  return (
    <FbModal title="Edit details" closePopup={setModalShow}>
      <div className="fb-edit-details-modal">
        <div className="fb-edit-details-title">
          <h4>Customize your intro</h4>
          <p>Details you select will be public.</p>
        </div>
        <div className="fb-edit-details-body">
          <div className="fb-edit-details-all-list">
            {/* Category Section */}
            <div className="fb-edit-details-list-item">
              <h4>Category</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-modal-img-icon">
                  <img src={introProfileIcon} alt="" />
                  <span>Profile · {users.category}</span>
                </div>
                <Link to="/profile/about/contactandbasicinfo">
                  <div className="icon">
                    <FaPen />
                  </div>
                </Link>
              </div>
            </div>
            {/* Work Section */}
            <div className="fb-edit-details-list-item">
              <h4>Work</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-inner-list">
                  {/* All Item */}
                  {users.profession.map((data, index) => (
                    <div key={index} className="fb-edit-details-inner-item">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={workIcon} alt="" />
                        <span>
                          {data.positon} at {data.company}
                        </span>
                      </div>
                      <Link to="/profile/about/workandeducation">
                        <div className="icon">
                          <FaPen />
                        </div>
                      </Link>
                    </div>
                  ))}

                  {/* Item Add Section */}
                  <div className="fb-edit-details-inner-item">
                    <Link to="/profile/about/workandeducation">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={plusIcon} alt="" className="plus-icon" />
                        <span className="fb-edit-details-modal-add-link">
                          Add a work place
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="fb-edit-details-list-item">
              <h4>Education</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-inner-list">
                  {/* College List */}
                  {users.education.college.map((data, index) => (
                    <div key={index} className="fb-edit-details-inner-item">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={studies} alt="" />
                        <span>
                          {data.collegeLeaveOption} at {data.collegeName}
                        </span>
                      </div>
                      <Link to="/profile/about/workandeducation">
                        <div className="icon">
                          <FaPen />
                        </div>
                      </Link>
                    </div>
                  ))}
                  {users.education.high_school && (
                    <div className="fb-edit-details-inner-item">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={studies} alt="" />
                        <span>
                          {users.education.high_school.highLeaveOption} at{" "}
                          {users.education.high_school.highName}
                        </span>
                      </div>
                      <Link to="/profile/about/workandeducation">
                        <div className="icon">
                          <FaPen />
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Item Add Section Button */}
                  {!users.education.high_school && (
                    <div className="fb-edit-details-inner-item">
                      <Link to="/profile/about/workandeducation">
                        <div className="fb-edit-details-modal-img-icon">
                          <img src={plusIcon} alt="" className="plus-icon" />
                          <span className="fb-edit-details-modal-add-link">
                            Add high school
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}

                  <div className="fb-edit-details-inner-item">
                    <Link to="/profile/about/workandeducation">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={plusIcon} alt="" className="plus-icon" />
                        <span className="fb-edit-details-modal-add-link">
                          Add college
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Current City */}
            <div className="fb-edit-details-list-item">
              <h4>Current city</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-inner-list">
                  {/* All Item */}
                  {users.living && (
                    <div className="fb-edit-details-inner-item">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={fblive} alt="" />
                        <span>Lives in {users.living}</span>
                      </div>
                      <Link to="/profile/about/placedlived">
                        <div className="icon">
                          <FaPen />
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Item Add Section */}
                  {!users.living && (
                    <div className="fb-edit-details-inner-item">
                      <Link to="/profile/about/placedlived">
                        <div className="fb-edit-details-modal-img-icon">
                          <img src={plusIcon} alt="" className="plus-icon" />
                          <span className="fb-edit-details-modal-add-link">
                            Add current city
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Home Town */}
            <div className="fb-edit-details-list-item">
              <h4>Hometown</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-inner-list">
                  {/* All Item */}
                  {users.home_town && (
                    <div className="fb-edit-details-inner-item">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={fblive} alt="" />
                        <span>{users.home_town}</span>
                      </div>
                      <Link to="/profile/about/placedlived">
                        <div className="icon">
                          <FaPen />
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Item Add Section */}
                  {!users.home_town && (
                    <div className="fb-edit-details-inner-item">
                      <Link to="/profile/about/placedlived">
                        <div className="fb-edit-details-modal-img-icon">
                          <img src={plusIcon} alt="" className="plus-icon" />
                          <span className="fb-edit-details-modal-add-link">
                            Add hometown
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* RelationShip */}
            <div className="fb-edit-details-list-item">
              <h4>Relationship</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-inner-list">
                  {/* All Item */}
                  {users.relationship && (
                    <div className="fb-edit-details-inner-item">
                      <div className="fb-edit-details-modal-img-icon">
                        <img src={fbrelation} alt="" />
                        <span>{users.relationship}</span>
                      </div>
                      <Link to="/profile/about/familyandrelationship">
                        <div className="icon">
                          <FaPen />
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* Item Add Section */}
                  {!users.relationship && (
                    <div className="fb-edit-details-inner-item">
                      <Link to="/profile/about/familyandrelationship">
                        <div className="fb-edit-details-modal-img-icon">
                          <img src={plusIcon} alt="" className="plus-icon" />
                          <span className="fb-edit-details-modal-add-link">
                            Add relationship
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Joined Date */}
            <div className="fb-edit-details-list-item">
              <h4>Joined Facebook</h4>
              <div className="fb-edit-details-list">
                <div className="fb-edit-details-inner-list">
                  {/* All Item */}
                  <div className="fb-edit-details-inner-item">
                    <div className="fb-edit-details-modal-img-icon">
                      <img src={fbwatchicon} alt="" />
                      <span>Joined December 2015</span>
                    </div>
                  </div>
                  {/* Item Add Section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fb-edit-details-modal-footer">
        <button className="fb-edit-details-modal-footer-button1">
          Update your information
        </button>
        <div className="fb-edit-details-modal-footer-buttons">
          <button
            className="fb-edit-details-modal-footer-cancel"
            onClick={() => setModalShow(false)}
          >
            Cancel
          </button>
          <button className="fb-edit-details-modal-footer-save">Save</button>
        </div>
      </div>
    </FbModal>
  );
};

export default EditDetailsModal;
