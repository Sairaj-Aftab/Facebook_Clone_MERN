import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import loadingBarReducer from "./loadingBar/reducer";

// create root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
