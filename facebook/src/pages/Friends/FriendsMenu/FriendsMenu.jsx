import React, { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import {
  BsFillPersonDashFill,
  BsFillPersonPlusFill,
  BsFillPersonLinesFill,
  BsGiftFill,
} from "react-icons/bs";
import "./friendsmenu.css";

const FriendsMenu = () => {
  return (
    <div className="friends-menu">
      <div className="friends-menu-header">
        <h4>Friends</h4>
        <div className="friends-menu-header-icon">
          <AiTwotoneSetting />
        </div>
      </div>
      <div className="friends-menu-items">
        <ul>
          <li>
            <div className="friends-menu-items-icon">
              <FaUserFriends />
            </div>
            <span>Home</span>
          </li>
          <li>
            <div className="friends-menu-items-icon">
              <BsFillPersonDashFill />
            </div>
            <span>Friends Requests</span>
          </li>
          <li>
            <div className="friends-menu-items-icon">
              <BsFillPersonPlusFill />
            </div>
            <span>Suggestions</span>
          </li>
          <li>
            <div className="friends-menu-items-icon">
              <BsFillPersonLinesFill />
            </div>
            <span>All friends</span>
          </li>
          <li>
            <div className="friends-menu-items-icon">
              <BsGiftFill />
            </div>
            <span>Birthdays</span>
          </li>
          <li>
            <div className="friends-menu-items-icon">
              <BsFillPersonLinesFill />
            </div>
            <span>Custom Lists</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FriendsMenu;
