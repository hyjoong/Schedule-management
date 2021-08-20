import {
  LOAD_SCHEDULE,
  ADD_SCHEDULE,
  LOGIN,
  LOGOUT,
  DELETE_SCHEDULE,
} from "./actionType";

const LoadScheduleAction = (data) => {
  return {
    type: LOAD_SCHEDULE,
    data,
  };
};

const AddSchedule = (data) => {
  return {
    type: ADD_SCHEDULE,
    data,
  };
};

const DeleteSchedule = (data) => {
  return {
    type: DELETE_SCHEDULE,
    data,
  };
};

const LoginAction = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

const LogoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export {
  LoadScheduleAction,
  AddSchedule,
  LoginAction,
  LogoutAction,
  DeleteSchedule,
};
