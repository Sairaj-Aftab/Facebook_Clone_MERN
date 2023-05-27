import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";
import { getAllUser } from "../../../redux/auth/actionType";
import "./friendscontainer.css";

const FriendsContainer = () => {
  const dispatch = useDispatch();
  const { users, allUser } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllUser(users._id));
  }, [dispatch]);
  return (
    <div className="friends-container">
      <div className="friends-container-header">
        <h4>Friend Requests</h4>
        <button>See all</button>
      </div>
      <div className="profile-box-wraper">
        {allUser.map((item, index) => {
          if (users.friends_request.includes(item._id)) {
            return (
              <Link to="#" key={index}>
                <ProfileBox user={item} buttonState="friend-request" />
              </Link>
            );
          }
        })}
      </div>
      <div className="friends-container-header">
        <h4>People You May Know</h4>
        <button>See all</button>
      </div>
      <div className="profile-box-wraper">
        {allUser.map((item, index) => {
          if (
            !users.friends_request.includes(item._id) &&
            !users.friends.includes(item._id) &&
            !users.send_request.includes(item._id)
          ) {
            return (
              <Link to="#" key={index}>
                <ProfileBox user={item} buttonState="user" />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FriendsContainer;
