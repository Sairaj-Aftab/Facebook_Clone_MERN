import React from "react";
import { useSelector } from "react-redux";
import FbCard from "../../../components/FbCard/FbCard";
import "../profile.css";

const UserIntroAllFriends = () => {
  const { users, allUser } = useSelector((state) => state.auth);
  return (
    <FbCard>
      <div className="see-all-friends">
        <div className="user-intro-title">
          <h1>Friends</h1>
          <button>See all friends</button>
        </div>
        <p>{users.friends.length} friends</p>
        <div className="friends-list">
          {allUser.map((item, index) => {
            if (users.friends.includes(item._id)) {
              return (
                <div className="user-intro-friend-profile" key={index}>
                  <img src={`/profile_photo/${item.profile_photo}`} alt="" />
                  <span>{`${users.first_name} ${users.sur_name}`}</span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </FbCard>
  );
};

export default UserIntroAllFriends;
