import initialState from "./initialState";
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
  SEND_FRIEND_REQUEST,
  TOKEN_USER_FAIL,
  TOKEN_USER_REQUEST,
  TOKEN_USER_SUCCESS,
  UPDATED_ME,
} from "./type";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: payload,
        logedIn: true,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        users: null,
        logedIn: false,
        loading: false,
      };
    case TOKEN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOKEN_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        logedIn: true,
        loading: false,
      };
    case TOKEN_USER_FAIL:
      return {
        ...state,
        users: null,
        logedIn: false,
        loading: false,
      };
    case LOG_OUT:
      return {
        ...state,
        users: null,
        logedIn: false,
        loading: false,
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        users: {
          ...state.users,
          ...payload,
        },
        loading: false,
      };
    case GET_ALL_USER:
      return {
        ...state,
        allUser: payload,
      };
    case UPDATED_ME:
      return {
        ...state,
        users: payload,
      };
    // case FEATURED_UPDATE:
    //   return {
    //     ...state,
    //     users: {
    //       ...state.users,
    //       ...payload,
    //     },
    //   };

    default:
      return state;
  }
};

export default authReducer;
