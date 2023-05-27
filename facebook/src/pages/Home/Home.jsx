import React from "react";
import "../../_assets/css/style.css";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import CenterSide from "../../components/CenterSide/CenterSide";
import RightBar from "../../components/RightBar/RightBar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="home-wraper">
        <SideBar />
        <CenterSide />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
