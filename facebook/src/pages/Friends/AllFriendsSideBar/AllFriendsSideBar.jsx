import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDotsHorizontal } from "react-icons/rx";
import "./AllFriendsSideBar.css";

const AllFriendsSideBar = () => {
  return (
    <div className="all-friends">
      <div className="all-friends-header">
        <div className="all-friends-header-icon">
          <BsArrowLeftShort />
        </div>
        <div className="all-friends-header-inner">
          <p>Friends</p>
          <h4>All friends</h4>
        </div>
      </div>
      <div className="all-friends-scroll">
        <div className="all-friends-search-bar">
          <div className="all-friends-search-bar-icon">
            <AiOutlineSearch />
          </div>
          <input type="text" placeholder="Search Friends" />
        </div>
        <h4 className="all-friends-title">3,893 friends</h4>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
        <div className="friends-profile-intro">
          <div className="friends-profile-intro-inner">
            <img
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="friends-profile-intro-name">
              <h4>Shahadat Hossin Abir</h4>
              <p>309 mutual friends</p>
            </div>
          </div>
          <div className="friends-profile-intro-icon">
            <RxDotsHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFriendsSideBar;
