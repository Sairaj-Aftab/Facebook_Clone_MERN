import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import OverviewSection from "./OverviewSection/OverviewSection";

const AboutPage = () => {
  return (
    <div className="fb-profile-about-page">
      <div className="fb-profile-about-page-wraper">
        <div className="fb-profile-about-page-left">
          <h4>About</h4>
          <ul>
            <li>
              <NavLink to="/profile/about">
                <span>Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/workandeducation">
                <span>Work and education</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/placedlived">
                <span>Places lived</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/contactandbasicinfo">
                <span>Contact and basic info</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/privacyandlegalinfo">
                <span>Privacy and Legal info</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/profiletransparency">
                <span>Profile transparency</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/familyandrelationship">
                <span>Family and relationship</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/detailsaboutyou">
                <span>Details about you</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/about/lifeevents">
                <span>Life events</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="fb-profile-about-page-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
