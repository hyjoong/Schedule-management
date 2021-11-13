import { combineReducers } from "redux";
import ScheduleReducer from "./schedule";
import authReducer from "./auth";

const rootReducer = combineReducers({
  authReducer,
  ScheduleReducer,
});

export default rootReducer;
