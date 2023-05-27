import React from "react";
import { useSelector } from "react-redux";
import profileimg from "../../assets/profile.png";

const Avatar = () => {
  const { users } = useSelector((state) => state.auth);
  return (
    <img src={users.profile_photo ? users.profile_photo : profileimg} alt="" />
  );
};

export default Avatar;
