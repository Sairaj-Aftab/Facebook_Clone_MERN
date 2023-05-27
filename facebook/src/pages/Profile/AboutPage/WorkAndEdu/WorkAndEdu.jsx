import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import plusicon from "../../../../assets/fbplusicon.png";
import fbworkicon from "../../../../assets/bigworkicon.png";
import worldicon from "../../../../assets/worldicon.png";
import studyicon from "../../../../assets/bigstudyicon.png";
import { useDispatch, useSelector } from "react-redux";
import QuickAddAndEditBox from "../../../../components/QuickAddAndEditBox/QuickAddAndEditBox";
import { useState } from "react";
import { profileUpdate } from "../../../../redux/auth/actionType";
import SmallPopup from "../../../../components/SmallPopup/SmallPopup";
import DeleteAndEditBtn from "../../../../components/SmallPopup/DeleteAndEditBtn/DeleteAndEditBtn";

const WorkAndEdu = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  // Work and Job
  const [workEditBoxShow, setWorkEditBoxShow] = useState(false);
  const [positon, setPosition] = useState([]);
  const [company, setCompany] = useState([]);
  // Education like College and High School
  const [collegeEditBoxShow, setCollegeEditBoxShow] = useState(false);
  const [collegeName, setCollegeName] = useState([]);
  const [collegeLeaveOption, setCollegeLeaveOption] = useState([]);
  // Education High School
  const [highEditBoxShow, setHighEditBoxShow] = useState(false);
  const [highName, setHighName] = useState();

  // Handle Work
  const handleSaveWork = (e) => {
    e.preventDefault();
    dispatch(
      profileUpdate(users._id, {
        profession: [...users.profession, { positon, company }],
      })
    );
    setWorkEditBoxShow(false);
  };
  const handleDeleteWork = (company) => {
    const finalWork = users.profession.filter(
      (data) => data.company !== company
    );
    dispatch(
      profileUpdate(users._id, {
        profession: finalWork,
      })
    );
  };
  // Handle College
  const handleSaveCollege = (e) => {
    e.preventDefault();
    dispatch(
      profileUpdate(users._id, {
        education: {
          ...users.education,
          college: [
            ...users.education.college,
            { collegeLeaveOption, collegeName },
          ],
        },
      })
    );
    setCollegeEditBoxShow(false);
  };
  // College Delete
  const handleDeleteCollege = (collegeName) => {
    const finalCollege = users.education.college.filter(
      (data) => data.collegeName !== collegeName
    );
    dispatch(
      profileUpdate(users._id, {
        education: { ...users.education, college: finalCollege },
      })
    );
  };

  // Handle High School
  const handleSaveHigh = (e) => {
    e.preventDefault();

    dispatch(
      profileUpdate(users._id, {
        education: {
          ...users.education,
          high_school: {
            highLeaveOption:
              users.education.college.length <= 0 ? "Studies" : "Studied",
            highName,
          },
        },
      })
    );
    setHighEditBoxShow(false);
  };
  // Delete High
  const handleDeleteHigh = (e) => {
    e.preventDefault();
    dispatch(
      profileUpdate(users._id, {
        education: {
          ...users.education,
          high_school: null,
        },
      })
    );
  };

  return (
    <div className="fb-about-page-overview-section">
      <div className="fb-about-page-overview-section-wraper">
        {/* Work */}
        <h4>Work</h4>
        <ul>
          {!workEditBoxShow && (
            <li>
              <div
                onClick={() => setWorkEditBoxShow(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add a workplace</span>
              </div>
            </li>
          )}
          {workEditBoxShow && (
            <QuickAddAndEditBox
              save={handleSaveWork}
              close={setWorkEditBoxShow}
              data={{
                placeholder: "Set position",
                data: positon,
                setData: setPosition,
              }}
              data2={{
                placeholder: "Set company name",
                data: company,
                setData: setCompany,
              }}
            />
          )}
          {users.profession.map((data, index) => (
            <li key={index}>
              <div className="fb-about-page-overview-section-content-left">
                <img src={fbworkicon} alt="" />
                <span>
                  {data.positon} works at {data.company}
                </span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div
                  className="icon"
                  onClick={() => handleDeleteWork(data.company)}
                >
                  <RiDeleteBinLine />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* College */}
        <h4>College</h4>
        <ul>
          {/* College Add Button */}
          {!collegeEditBoxShow && (
            <li>
              <div
                onClick={() => setCollegeEditBoxShow(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add college</span>
              </div>
            </li>
          )}
          {/* College Add Box */}
          {collegeEditBoxShow && (
            <QuickAddAndEditBox
              save={handleSaveCollege}
              close={setCollegeEditBoxShow}
              data={{
                placeholder: "Set college name",
                data: collegeName,
                setData: setCollegeName,
              }}
              data2={{
                placeholder: "Studies or Studied",
                data: collegeLeaveOption,
                setData: setCollegeLeaveOption,
              }}
            />
          )}
          {/* College List */}
          {users.education.college.map((data, index) => (
            <li key={index}>
              <div className="fb-about-page-overview-section-content-left">
                <img src={studyicon} alt="" />
                <span>
                  {data.collegeLeaveOption} at {data.collegeName}
                </span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div
                  className="icon"
                  onClick={() => handleDeleteCollege(data.collegeName)}
                >
                  <BiDotsHorizontalRounded />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* High School */}
        <h4>High school</h4>
        <ul>
          {/* Add High School Button */}
          {!highEditBoxShow && !users.education.high_school && (
            <li>
              <div
                onClick={() => setHighEditBoxShow(true)}
                className="fb-about-page-overview-section-content-left add-icon-add-link"
              >
                <img className="add-icon" src={plusicon} alt="" />
                <span className="add-link">Add a high school</span>
              </div>
            </li>
          )}
          {/* Add High School Box */}
          {highEditBoxShow && (
            <QuickAddAndEditBox
              save={handleSaveHigh}
              close={setHighEditBoxShow}
              data={{
                placeholder: "Set high school name",
                data: highName,
                setData: setHighName,
              }}
            />
          )}
          {/* High School Name Get */}
          {users.education.high_school && (
            <li>
              <div className="fb-about-page-overview-section-content-left">
                <img src={studyicon} alt="" />
                <span>
                  {users.education.high_school.highLeaveOption} at{" "}
                  {users.education.high_school.highName}
                </span>
              </div>
              <div className="fb-about-page-overview-section-content-right">
                <img src={worldicon} alt="" />
                <div className="icon" onClick={handleDeleteHigh}>
                  <BiDotsHorizontalRounded />
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WorkAndEdu;
