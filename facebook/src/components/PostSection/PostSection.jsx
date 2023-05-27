import React from "react";
import { useSelector } from "react-redux";
import { BiWorld, BiComment } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiThumbUp } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  RiShareForwardLine,
  RiNotification3Line,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { VscBookmark } from "react-icons/vsc";
import { ImEmbed2 } from "react-icons/im";
import { CiCircleRemove } from "react-icons/ci";
import { TfiTimer } from "react-icons/tfi";
import "./postsection.css";
import profileimg from "../../assets/profile.png";
import post1 from "../../assets/post/post1.jpg";
import post2 from "../../assets/post/post2.jpg";
import { useState } from "react";

const PostSection = () => {
  const { users } = useSelector((state) => state.auth);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="post-section">
      <div className="post-section-container">
        <div className="wraper">
          <div className="profile-section">
            <div className="profile-inner">
              <img
                src={
                  users.profile_photo
                    ? `/profile_photo/${users.profile_photo}`
                    : profileimg
                }
                alt=""
              />
              <div className="name-time">
                <h4>{`${users.first_name} ${users.sur_name}`}</h4>
                <div className="time-world">
                  <span>
                    15m <BiWorld />
                  </span>
                </div>
              </div>
            </div>
            <div className="more">
              <FiMoreHorizontal onClick={() => setShowMore(!showMore)} />
              {showMore && (
                <div>
                  <div className="more-tri"></div>
                  <div className="more-setting">
                    <div className="first">
                      <ul>
                        <li>
                          <a href="/">
                            <div className="button">
                              <div className="more-icon">
                                <VscBookmark />
                              </div>
                              <div className="content">
                                <h3>Save post</h3>
                                <p>Add this to your saved items.</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="second">
                      <ul>
                        <li>
                          <a href="/">
                            <div className="button">
                              <div className="more-icon">
                                <RiNotification3Line />
                              </div>
                              <h3>Turn on notification for this post</h3>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <div className="button">
                              <div className="more-icon">
                                <ImEmbed2 />
                              </div>
                              <h3>Embed</h3>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="third">
                      <ul>
                        <li>
                          <a href="/">
                            <div className="button">
                              <div className="more-icon">
                                <CiCircleRemove />
                              </div>
                              <div className="content">
                                <h3>Hide post</h3>
                                <p>See fewer posts like this.</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <div className="button">
                              <div className="more-icon">
                                <TfiTimer />
                              </div>
                              <div className="content">
                                <h3>Snooze Karim for 30 days</h3>
                                <p>Temporarily stop seeing posts.</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <div className="button">
                              <div className="more-icon">
                                <RiUserUnfollowLine />
                              </div>
                              <div className="content">
                                <h3>Unfollow Karim</h3>
                                <p>Stop seeing post but stay friend.</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="content-section">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              omnis optio magni eligendi repudiandae veritatis consequatur?
              Consequuntur velit magni, ducimus tempora at maxime provident qui.
              Enim nobis fugit ipsa veritatis distinctio voluptatum
              reprehenderit? Nulla hic, facilis accusamus tenetur sequi delectus
              eius, laborum vero aut officia aliquam distinctio molestiae
              dolores. Hic.
            </p>
            <div className="image-box">
              <img src={post2} alt="" />
            </div>
          </div>
          <div className="bottom-section">
            <div className="top-side">
              <div className="react-count">
                <div className="react">
                  <HiThumbUp className="like" />
                  <AiFillHeart className="love" />
                </div>
                <span>2.8 K</span>
              </div>
              <div className="com-share-count">
                <span>78 Comments</span>
                <span>78 Shares</span>
              </div>
            </div>
            <div className="react-option">
              <div className="react-options">
                <div className="div">
                  <div className="icon">
                    <HiThumbUp />
                  </div>
                  <span>Like</span>
                </div>
                <div className="div">
                  <div className="icon">
                    <BiComment />
                  </div>
                  <span>Comment</span>
                </div>
                <div className="div">
                  <div className="icon">
                    <RiShareForwardLine />
                  </div>
                  <span>Share</span>
                </div>
              </div>
              <div className="profile-options">
                <img src={profileimg} alt="" />
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
