import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import fbworkicon from "../../../../assets/bigworkicon.png";
import worldicon from "../../../../assets/worldicon.png";
import studyicon from "../../../../assets/bigstudyicon.png";
import hurticon from "../../../../assets/bighurticon.png";
import homeicon from "../../../../assets/bighomeicon.png";
import callicon from "../../../../assets/bigcallicon.png";
import plusicon from "../../../../assets/fbplusicon.png";
import { useDispatch, useSelector } from "react-redux";
import QuickAddAndEditBox from "../../../../components/QuickAddAndEditBox/QuickAddAndEditBox";
import { useState } from "react";
import { profileUpdate } from "../../../../redux/auth/actionType";

const FamilyAndRelationship = () => {
  const { users } = useSelector((state) => state.auth);
  const [editBoxShow, setEditBoxShow] = useState(false);
  const [relationship, setRelationship] = useState();
  const dispatch = useDispatch();

  const handleSaveRelationship = (e) => {
    e.preventDefault();
    dispatch(profileUpdate(users._id, { relationship: relationship }));
    setEditBoxShow(false);
  };
  return (
    <div className="fb-about-page-overview-section">
      <div className="fb-about-page-overview-section-wraper">
        {/* Relationship */}
        <h4>Relationship</h4>
        <ul>
          {users.relationship && !editBoxShow && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={hurticon} alt="" />
                <span>{users.relationship}</span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon" onClick={() => setEditBoxShow(true)}>
                  <BiPencil />
                </div>
              </div>
            </li>
          )}
          {!users.relationship && !editBoxShow && (
            <li>
              <div
                onClick={() => setEditBoxShow(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add relationship</span>
              </div>
            </li>
          )}
          {editBoxShow && (
            <QuickAddAndEditBox
              save={handleSaveRelationship}
              close={setEditBoxShow}
              data={{
                placeholder: "Add relationship status",
                data: relationship,
                setData: setRelationship,
                preData: users.relationship,
              }}
            />
          )}
        </ul>
        {/* Family members */}
        <h4>Family members</h4>
        <ul>
          <li>
            <div className="fb-about-page-overview-section-content-left add-icon-add-link">
              <img className="add-icon" src={plusicon} alt="" />
              <span className="add-link">Add family member</span>
            </div>
          </li>
          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={fbworkicon} alt="" />
              <span>Studied at Ramu Government College</span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiDotsHorizontalRounded />
              </div>
            </div>
          </li>
          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={studyicon} alt="" />
              <span>Studies at Cox's Bazar Govt. College</span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiDotsHorizontalRounded />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FamilyAndRelationship;
