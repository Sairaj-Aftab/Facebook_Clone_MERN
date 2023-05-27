import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import fbworkicon from "../../../../assets/bigworkicon.png";
import worldicon from "../../../../assets/worldicon.png";
import studyicon from "../../../../assets/bigstudyicon.png";
import homeicon from "../../../../assets/bighomeicon.png";
import hurticon from "../../../../assets/bighurticon.png";
import callicon from "../../../../assets/bigcallicon.png";
import plusicon from "../../../../assets/fbplusicon.png";
import { useSelector } from "react-redux";

const OverviewSection = () => {
  const { users } = useSelector((state) => state.auth);
  return (
    <div className="fb-about-page-overview-section">
      <div className="fb-about-page-overview-section-wraper">
        <ul>
          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={fbworkicon} alt="" />
              <span>
                Full stack web developer., WordPress, Shopify, Wix Specialist.
                and works at Fiverr
              </span>
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
              <img src={homeicon} alt="" />
              <span>Lives in Cox's Bazar, Bangladesh</span>
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
              <img src={hurticon} alt="" />
              <span>Single</span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiPencil />
              </div>
            </div>
          </li>
          {users.phone && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={callicon} alt="" />
                <span>{users.phone}</span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon">
                  <BiPencil />
                </div>
              </div>
            </li>
          )}

          {!users.phone && (
            <li>
              <div className="fb-about-page-overview-section-content-left add-icon-add-link">
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add phone number</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default OverviewSection;
