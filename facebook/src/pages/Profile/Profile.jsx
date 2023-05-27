import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import ProHeaderBox from "../../components/ProHeaderBox/ProHeaderBox";
import "./profile.css";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="user-profile">
      <TopBar />
      <ProHeaderBox />
      <Outlet />
    </div>
  );
};

export default Profile;
