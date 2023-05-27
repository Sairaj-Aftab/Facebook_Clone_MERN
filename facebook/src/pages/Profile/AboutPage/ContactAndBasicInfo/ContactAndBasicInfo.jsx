import React from "react";
import { BiPencil } from "react-icons/bi";
import plusicon from "../../../../assets/fbplusicon.png";
import worldicon from "../../../../assets/worldicon.png";
import callicon from "../../../../assets/bigcallicon.png";
import emailicon from "../../../../assets/bigemailicon.png";
import linkedinicon from "../../../../assets/biglinkedinicon.png";
import githubicon from "../../../../assets/biggithubicon.png";
import birthdayicon from "../../../../assets/bigbirthdayicon.png";
import manicon from "../../../../assets/bigmanicon.png";
import categoryicon from "../../../../assets/bigcategoryicon.png";
import { useDispatch, useSelector } from "react-redux";
import QuickAddAndEditBox from "../../../../components/QuickAddAndEditBox/QuickAddAndEditBox";
import { useState } from "react";
import { profileUpdate } from "../../../../redux/auth/actionType";

const ContactAndBasicInfo = () => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [catShow, setCatShow] = useState(false);
  const [cat, setCat] = useState();
  // Add Website and social Media
  const [workEditBoxShow, setWorkEditBoxShow] = useState(false);
  const [webName, setWebName] = useState([]);
  const [webLink, setWebLink] = useState([]);

  const handleSaveWebsite = (e) => {
    e.preventDefault();
    dispatch(
      profileUpdate(users._id, {
        social_media: [...users.social_media, { webName, webLink }],
      })
    );
    setWorkEditBoxShow(false);
  };

  const handleCatSave = (e) => {
    e.preventDefault();
    dispatch(profileUpdate(users._id, { category: cat }));
    setCatShow(false);
  };
  return (
    <div className="fb-about-page-overview-section">
      <div className="fb-about-page-overview-section-wraper">
        {/* Contact info */}
        <h4>Contact info</h4>
        <ul>
          {users.phone && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={callicon} alt="" />
                <span>01881591572</span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon">
                  <BiPencil />
                </div>
              </div>
            </li>
          )}

          {users.email && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={emailicon} alt="" />
                <span>{users.email}</span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon">
                  <BiPencil />
                </div>
              </div>
            </li>
          )}
          {!users.phone && (
            <li>
              <div className="fb-about-page-overview-section-content-left add-icon-add-link">
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add a phone number</span>
              </div>
            </li>
          )}
          {!users.email && (
            <li>
              <div className="fb-about-page-overview-section-content-left add-icon-add-link">
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add a email</span>
              </div>
            </li>
          )}
        </ul>
        {/* Website and Social Link */}
        <h4>Websites and social links</h4>
        <ul>
          {!workEditBoxShow && (
            <li>
              <div
                onClick={() => setWorkEditBoxShow(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add a website</span>
              </div>
            </li>
          )}

          {workEditBoxShow && (
            <QuickAddAndEditBox
              save={handleSaveWebsite}
              close={setWorkEditBoxShow}
              data={{
                placeholder: "Set social media name",
                data: webName,
                setData: setWebName,
              }}
              data2={{
                placeholder: "Set user name",
                data: webLink,
                setData: setWebLink,
              }}
            />
          )}

          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={githubicon} alt="" />
              <span>Sairaj-Aftab</span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiPencil />
              </div>
            </div>
          </li>

          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={linkedinicon} alt="" />
              <span>sairaj-aftab-8808ba1b5</span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiPencil />
              </div>
            </div>
          </li>
        </ul>
        {/* Basic Info */}
        <h4>Basic info</h4>
        <ul>
          <li>
            <div className="fb-about-page-overview-section-content-left add-icon-add-link">
              <img className="add-icon" src={plusicon} alt="" />
              <span className="add-link">Add a language</span>
            </div>
          </li>
          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={manicon} alt="" />
              <span>{users.gender}</span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiPencil />
              </div>
            </div>
          </li>
          <li>
            <div className="fb-about-page-overview-section-content-left">
              <img src={birthdayicon} alt="" />
              <span>
                {users.birth_month} {users.birth_date} {users.birth_year}
              </span>
            </div>
            <div className="fb-about-page-overview-section-content-right">
              <img src={worldicon} alt="" />
              <div className="icon">
                <BiPencil />
              </div>
            </div>
          </li>
        </ul>
        {/* Category */}
        <h4>Category</h4>
        <ul>
          {!catShow && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={categoryicon} alt="" />
                <span>{users.category}</span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon" onClick={() => setCatShow(!catShow)}>
                  <BiPencil />
                </div>
              </div>
            </li>
          )}
          {catShow && (
            <QuickAddAndEditBox
              save={handleCatSave}
              close={setCatShow}
              data={{
                placeholder: "Set category",
                data: cat,
                setData: setCat,
                preData: users.category,
              }}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactAndBasicInfo;
