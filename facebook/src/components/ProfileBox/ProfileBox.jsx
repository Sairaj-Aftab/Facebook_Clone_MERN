import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptFriendReq,
  deleteFriendReq,
  sendFriendReq,
} from "../../redux/auth/actionType";
import "./profilebox.css";

const ProfileBox = ({ user, buttonState }) => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (user) {
    // Send Friend Request
    const handleSendFriReq = (receiver) => {
      dispatch(sendFriendReq(users._id, receiver));
    };
    // Delete Friend Request
    const handleDeleteFriReq = (requested) => {
      dispatch(deleteFriendReq(users._id, requested));
    };
    // Accept Friend Request
    const handleAcceptFriReq = (requested) => {
      dispatch(acceptFriendReq(users._id, requested));
    };
    return (
      <div>
        <div className="profile-box">
          <img
            className="profile-img"
            src={`/profile_photo/${user.profile_photo}`}
            alt=""
          />
          <div className="user-name">{`${user.first_name} ${user.sur_name}`}</div>
          <div className="mutual-friends">
            <div>
              <img
                src="https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <span>5 mutual friends</span>
          </div>
          <div className="buttons">
            {buttonState === "friend-request" && (
              <>
                <button
                  className="confirm"
                  onClick={() => handleAcceptFriReq(user._id)}
                >
                  Confirm
                </button>
                <button
                  className="cancel"
                  onClick={() => handleDeleteFriReq(user._id)}
                >
                  Delete
                </button>
              </>
            )}

            {buttonState === "user" && (
              <>
                <button
                  className="add-friend"
                  onClick={() => handleSendFriReq(user._id)}
                >
                  Add Friend
                </button>
                <button className="cancel">Remove</button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileBox;
