import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import Activate from "./pages/Activate/Activate";
import FindAccount from "./pages/FindAccount/FindAccount";
import Forgot from "./pages/Forgot/Forgot";
import NewPassword from "./pages/NewPassword/NewPassword";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_END } from "./redux/loadingBar/type";
import LogOut from "./userNavigate/LogOut";
import Cookies from "js-cookie";
import { tokenUserLogedIn } from "./redux/auth/actionType";
import Register from "./pages/Register/Register";
import LoginSecond from "./pages/LoginSecond/LoginSecond";
import Profile from "./pages/Profile/Profile";
import Friends from "./pages/Friends/Friends";
import AboutPage from "./pages/Profile/AboutPage/AboutPage";
import ReelsPage from "./pages/Profile/ReelsPage/ReelsPage";
import PhotosPage from "./pages/Profile/PhotosPage/PhotosPage";
import PostsPage from "./pages/Profile/PostsPage/PostsPage";
import VideosPage from "./pages/Profile/VideosPage/VideosPage";
import GroupsPage from "./pages/Profile/GroupsPage/GroupsPage";
import NoPage from "./pages/NoPage/NoPage";
import OverviewSection from "./pages/Profile/AboutPage/OverviewSection/OverviewSection";
import WorkAndEdu from "./pages/Profile/AboutPage/WorkAndEdu/WorkAndEdu";
import PlacesLived from "./pages/Profile/AboutPage/PlacesLived/PlacesLived";
import ContactAndBasicInfo from "./pages/Profile/AboutPage/ContactAndBasicInfo/ContactAndBasicInfo";
import PrivacyAndLegalInfo from "./pages/Profile/AboutPage/PrivacyAndLegalInfo/PrivacyAndLegalInfo";
import ProfileTransparency from "./pages/Profile/AboutPage/ProfileTransparency/ProfileTransparency";
import FamilyAndRelationship from "./pages/Profile/AboutPage/FamilyAndRelationship/FamilyAndRelationship";
import DetailsAboutYou from "./pages/Profile/AboutPage/DetailsAboutYou/DetailsAboutYou";
import LifeEvents from "./pages/Profile/AboutPage/LifeEvents/LifeEvents";
import FriendsList from "./pages/Friends/pages/FriendsList/FriendsList";

const App = () => {
  const loadingBar = useSelector((state) => state.loadingBar);
  const { logedIn } = useSelector((state) => state.auth);
  const loadingDispatch = useDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      dispatch(tokenUserLogedIn(token));
    }
  }, [tokenUserLogedIn]);
  return (
    <div>
      <LoadingBar
        color="#1b74e4"
        height={3}
        progress={loadingBar}
        onLoaderFinished={() => loadingDispatch({ type: LOADING_END })}
      />
      <ToastContainer
        style={{ zIndex: 99999 }}
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <TopBar/> */}
      <Routes>
        <Route path="/" element={logedIn ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={
            <LogOut>
              <Register />
            </LogOut>
          }
        />
        <Route path="/" element={<Login />} />
        <Route
          path="/login"
          element={
            <LogOut>
              <LoginSecond />
            </LogOut>
          }
        />
        <Route
          path="/activate/:type"
          element={
            <LogOut>
              <Activate />
            </LogOut>
          }
        />
        <Route
          path="/forgot"
          element={
            <LogOut>
              <Forgot />
            </LogOut>
          }
        />
        <Route
          path="/find-account"
          element={
            <LogOut>
              <FindAccount />
            </LogOut>
          }
        />
        <Route
          path="/new-password"
          element={
            <LogOut>
              <NewPassword />
            </LogOut>
          }
        />
        <Route path="/profile" element={logedIn ? <Profile /> : <Login />}>
          <Route index element={<PostsPage />} />
          <Route path="/profile/about" element={<AboutPage />}>
            <Route index element={<OverviewSection />} />
            <Route
              path="/profile/about/workandeducation"
              element={<WorkAndEdu />}
            />
            <Route
              path="/profile/about/placedlived"
              element={<PlacesLived />}
            />
            <Route
              path="/profile/about/contactandbasicinfo"
              element={<ContactAndBasicInfo />}
            />
            <Route
              path="/profile/about/privacyandlegalinfo"
              element={<PrivacyAndLegalInfo />}
            />
            <Route
              path="/profile/about/profiletransparency"
              element={<ProfileTransparency />}
            />
            <Route
              path="/profile/about/familyandrelationship"
              element={<FamilyAndRelationship />}
            />
            <Route
              path="/profile/about/detailsaboutyou"
              element={<DetailsAboutYou />}
            />
            <Route path="/profile/about/lifeevents" element={<LifeEvents />} />
          </Route>
          <Route path="/profile/reels" element={<ReelsPage />} />
          <Route path="/profile/photos" element={<PhotosPage />} />
          <Route path="/profile/videos" element={<VideosPage />} />
          <Route path="/profile/groups" element={<GroupsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/friends" element={logedIn ? <Friends /> : <Login />}>
          <Route path="/friends/list" element={<FriendsList />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
