import React from "react";
import profileimg from "../../assets/profile.png";

import friends from "../../assets/leftsideicons/friends.png";
import saved from "../../assets/leftsideicons/saved.png";
import groups from "../../assets/leftsideicons/groups.png";
import marketplace from "../../assets/leftsideicons/marketplace.png";
import watch from "../../assets/leftsideicons/watch.png";
import adCenter from "../../assets/leftsideicons/adCenter.png";
import adsManager from "../../assets/leftsideicons/adsmanager.png";
import bloodDonation from "../../assets/leftsideicons/bloodDonation.png";
import climateChange from "../../assets/leftsideicons/climateChange.png";
import comunity from "../../assets/leftsideicons/comunity.png";
import covid19 from "../../assets/leftsideicons/covid19.png";
import emotionalHealth from "../../assets/leftsideicons/emotionalHealth.png";
import events from "../../assets/leftsideicons/events.png";
import favorite from "../../assets/leftsideicons/favorite.png";
import fundarise from "../../assets/leftsideicons/fundarise.png";
import gamingVideo from "../../assets/leftsideicons/gamingVideo.png";
import liveVideos from "../../assets/leftsideicons/liveVideos.png";
import memories from "../../assets/leftsideicons/memories.png";
import messenger from "../../assets/leftsideicons/messanger.png";
import messengerKids from "../../assets/leftsideicons/messengerKids.png";
import metaBusinessSuite from "../../assets/leftsideicons/metaBusinessSuite.png";
import mostRecent from "../../assets/leftsideicons/mostRecent.png";
import pagess from "../../assets/leftsideicons/pages.png";
import playGames from "../../assets/leftsideicons/playGames.png";
import professionalDashbord from "../../assets/leftsideicons/professionalDashbord.png";
import recentAdActivity from "../../assets/leftsideicons/recentAdActivity.png";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";

const SideBar = () => {
  const { users } = useSelector((state) => state.auth);
  return (
    <div className="sidebar">
      <div className="wraper">
        <div className="top-feature">
          <ul>
            <li>
              <Link to="/profile" className="profile">
                <img
                  className="left-side-profile-img"
                  src={
                    users.profile_photo
                      ? `/profile_photo/${users.profile_photo}`
                      : profileimg
                  }
                  alt=""
                />
                <div className="title">{`${users.first_name} ${users.sur_name}`}</div>
              </Link>
            </li>
            <li>
              <Link to="/friends" className="link">
                <img src={friends} alt="" />
                <div className="title">Friends</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={saved} alt="" />
                <div className="title">Saved</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={groups} alt="" />
                <div className="title">Groups</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={marketplace} alt="" />
                <div className="title">Marketplace</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={watch} alt="" />
                <div className="title">Watch</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={adCenter} alt="" />
                <div className="title">Ad Center</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={adsManager} alt="" />
                <div className="title">Ads Manager</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={bloodDonation} alt="" />
                <div className="title">Blood Donations</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={climateChange} alt="" />
                <div className="title">Climate Science Center</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={comunity} alt="" />
                <div className="title">Community Help</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={covid19} alt="" />
                <div className="title">CVID-19 Information Center</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={emotionalHealth} alt="" />
                <div className="title">Emotional Health</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={events} alt="" />
                <div className="title">Events</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={favorite} alt="" />
                <div className="title">Favorites</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={fundarise} alt="" />
                <div className="title">Fundraisers</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={gamingVideo} alt="" />
                <div className="title">Gaming Video</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={liveVideos} alt="" />
                <div className="title">Live Videos</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={memories} alt="" />
                <div className="title">Memories</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={messenger} alt="" />
                <div className="title">Messenger</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={messengerKids} alt="" />
                <div className="title">Messenger Kids</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={metaBusinessSuite} alt="" />
                <div className="title">Meta Business Suite</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={mostRecent} alt="" />
                <div className="title">Most Recent</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={pagess} alt="" />
                <div className="title">Pages</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={playGames} alt="" />
                <div className="title">Play Games</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={professionalDashbord} alt="" />
                <div className="title">Professional Dashboard</div>
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                <img src={recentAdActivity} alt="" />
                <div className="title">Recent ad activity</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
