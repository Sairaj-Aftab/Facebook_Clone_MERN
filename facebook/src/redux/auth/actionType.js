import axios from "axios";
import createToast from "../../utility/toastify/toast";
import Cookie from "js-cookie";
import {
  FEATURED_UPDATE,
  GET_ALL_USER,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  PROFILE_UPDATE,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TOKEN_USER_FAIL,
  TOKEN_USER_REQUEST,
  TOKEN_USER_SUCCESS,
  UPDATED_ME,
} from "./type";
import { LOADING_END, LOADING_START } from "../loadingBar/type";
import Cookies from "js-cookie";

// Registration User
export const registerUser =
  (data, e, setInput, setShowRegister, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
      });
      axios
        .post("/api/v1/user/register", data)
        .then((res) => {
          createToast(res.data.message, "success");
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.message,
          });
          dispatch({ type: LOADING_START });
          e.target.reset();
          setInput({
            fname: "",
            sname: "",
            emailOrPhone: "",
            password: "",
            gender: "",
            day: "",
            month: "",
            year: "",
          });
          setShowRegister(false);
          navigate("/activate/account");
        })
        .catch((err) => {
          createToast(err.response.data.message);
          dispatch({
            type: REGISTER_FAIL,
            payload: err.response.message,
          });
          dispatch({ type: LOADING_END });
        });
    } catch (error) {
      createToast(error.response.data.message);
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
      });
      dispatch({ type: LOADING_END });
    }
  };

// Activate Account By OTP Code
export const activateAccountByOtp =
  ({ code, auth }, navigate) =>
  async (dispatch) => {
    try {
      axios
        .post("/api/v1/user/activate", {
          code: code,
          auth: auth,
        })
        .then((res) => {
          dispatch({ type: LOADING_START });
          createToast(res.data.message, "success");
          Cookie.remove("otp");
          navigate("/");
        })
        .catch((err) => {
          dispatch({ type: LOADING_END });
          createToast(err.response.data.message, "error");
        });
    } catch (error) {
      dispatch({ type: LOADING_END });
      createToast(error.response.data.message, "error");
    }
  };

// Activate Account By OTP Code
export const sendResendLinkMail =
  ({ auth }, navigate) =>
  async (dispatch) => {
    try {
      axios
        .post("/api/v1/user/resend-mail", {
          auth: auth,
        })
        .then((res) => {
          createToast(res.data.message, "success");
        })
        .catch((err) => {
          createToast(err.response.data.message, "error");
        });
    } catch (error) {
      createToast(error.response.data.message, "error");
    }
  };

// Send Resend Email or Message for for forgot or recovery or set new password
export const sendResendMessageForPassword =
  ({ auth }, navigate) =>
  async (dispatch) => {
    try {
      axios
        .post("/api/v1/user/resend-message-password", {
          auth: auth,
        })
        .then((res) => {
          createToast(res.data.message, "success");
        })
        .catch((err) => {
          createToast(err.response.data.message, "error");
        });
    } catch (error) {
      createToast(error.response.data.message, "error");
    }
  };

// Check password otp for changing password
export const checkPasswordResetOTP =
  ({ code, auth }, navigate) =>
  async (dispatch) => {
    try {
      await axios
        .post("/api/v1/user/check-password-reset-otp", { code, auth })
        .then((res) => {
          dispatch({ type: LOADING_START });
          navigate("/new-password");
        })
        .catch((err) => {
          dispatch({ type: LOADING_END });
          createToast(err.response.data.message, "error");
        });
    } catch (error) {
      dispatch({ type: LOADING_END });
      createToast(error.response.data.message, "error");
    }
  };

// Change Password
export const changePassword =
  ({ id, code, password }, navigate) =>
  async (dispatch) => {
    try {
      await axios
        .post("/api/v1/user/change-password", { id, code, password })
        .then((res) => {
          createToast(res.data.message, "success");
          dispatch({ type: LOADING_START });
          navigate("/login");
        })
        .catch((err) => {
          createToast(err.response.data.message, "error");
          dispatch({ type: LOADING_END });
        });
    } catch (error) {
      createToast(error.response.data.message, "error");
      dispatch({ type: LOADING_END });
    }
  };

// User Login
export const userLogin = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    await axios
      .post("/api/v1/user/login", { auth: data.auth, password: data.password })
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.user,
        });
        dispatch({ type: LOADING_START });
        navigate("/");
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({ type: LOADING_END });
        createToast(err.response.data.message, "error");
      });
  } catch (error) {
    createToast(error.response.data.message, "error");
  }
};

// Token user for LogedIn
export const tokenUserLogedIn = (data) => async (dispatch) => {
  try {
    dispatch({ type: TOKEN_USER_REQUEST });
    await axios
      .get("/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      })
      .then((res) => {
        dispatch({
          type: TOKEN_USER_SUCCESS,
          payload: res.data.user,
        });
        dispatch({ type: LOADING_START });
      })
      .catch((err) => {
        dispatch({
          type: TOKEN_USER_FAIL,
        });
        dispatch({ type: LOADING_END });
        createToast(err.response.data.message, "error");
      });
  } catch (error) {
    createToast(error.response.data.message, "error");
    dispatch({ type: TOKEN_USER_FAIL });
  }
};

// Log Out User
export const logOut = (navigate) => (dispatch) => {
  dispatch({ type: LOADING_START });
  Cookies.remove("authToken");
  dispatch({ type: LOG_OUT });
  navigate("/");
};

// Profile Update
export const profileUpdate = (id, data, setBioShow) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/user-profile-update/${id}`, data)
      .then((res) => {
        dispatch({ type: PROFILE_UPDATE, payload: data });
        setBioShow(false);
        createToast(res.data.message, "success");
      })
      .catch((err) => {
        createToast(err.response.data.message, "error");
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

// Add Featured Slides
export const addFeaturedSlides = (id, data) => async (dispatch) => {
  try {
    await axios
      .post(`/api/v1/user/featured-slides/${id}`, data)
      .then((res) => {
        // dispatch({ type: FEATURED_UPDATE, payload: data });
      })
      .catch((err) => {
        createToast(err.response.data.message);
      });
  } catch (error) {}
};

// Profile Photo Update
export const profilePhotoUpdate = (id, data) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/profile-photo-update/${id}`, data)
      .then((res) => {
        dispatch({
          type: PROFILE_UPDATE,
          payload: { profile_photo: res.data.filename },
        });
      })
      .catch((err) => {
        createToast("Update failed");
      });
  } catch (error) {
    console.log(error);
  }
};
// Profile Photo Update
export const coverPhotoUpdate = (id, data) => async (dispatch) => {
  try {
    await axios
      .put(`/api/v1/user/cover-photo-update/${id}`, data)
      .then((res) => {
        dispatch({
          type: PROFILE_UPDATE,
          payload: { cover_photo: res.data.filename },
        });
      })
      .catch((err) => {
        createToast("Update failed");
      });
  } catch (error) {
    console.log(error);
  }
};

// Get All Users
export const getAllUser = (id) => async (dispatch) => {
  try {
    axios
      .get(`/api/v1/user/all-user/${id}`)
      .then((res) => {
        dispatch({ type: GET_ALL_USER, payload: res.data.users });
      })
      .catch((err) => {
        createToast("Users not found");
      });
  } catch (error) {
    console.log(error);
  }
};

// Send Friend Request
export const sendFriendReq = (id, receiver) => async (dispatch) => {
  try {
    axios
      .get(`/api/v1/user/send-friend-request/${id}/${receiver}`)
      .then((res) => {
        dispatch({
          type: UPDATED_ME,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

// Accept Friend Request
export const acceptFriendReq = (id, requested) => async (dispatch) => {
  try {
    axios
      .get(`/api/v1/user/accept-friend-request/${id}/${requested}`)
      .then((res) => {
        dispatch({
          type: UPDATED_ME,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
// Delete Friend Request
export const deleteFriendReq = (id, requested) => async (dispatch) => {
  try {
    axios
      .get(`/api/v1/user/delete-friend-request/${id}/${requested}`)
      .then((res) => {
        dispatch({
          type: UPDATED_ME,
          payload: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
