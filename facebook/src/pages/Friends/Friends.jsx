import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import FriendsMenu from "./FriendsMenu/FriendsMenu";

const Friends = () => {
  return (
    <div>
      <TopBar />
      <FriendsMenu />
      <FriendsContainer />
    </div>
  );
};

export default Friends;
