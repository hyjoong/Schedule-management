import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ScheduleReducer from "./schedule";
import authReducer from "./auth";
import PostReducer from "./post";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};

const rootReducer = combineReducers({
  authReducer,
  ScheduleReducer,
  PostReducer,
});

export default persistReducer(persistConfig, rootReducer);
