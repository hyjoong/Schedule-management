import {
  LOAD_SCHEDULE,
  ADD_SCHEDULE,
  LOGIN,
  LOGOUT,
  DELETE_SCHEDULE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
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

const LoginSuccessAction = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

const LoginFailAction = (data) => {
  return {
    type: LOGIN_FAILURE,
    data,
  };
};

const LogoutAction = () => {
  return {
    type: LOGOUT,
  };
};

const LogoutSuccessAction = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

const LogoutFailAction = (data) => {
  return {
    type: LOGOUT_FAILURE,
    data,
  };
};

export {
  LoadScheduleAction,
  AddSchedule,
  LoginAction,
  LogoutAction,
  DeleteSchedule,
  LoginSuccessAction,
  LoginFailAction,
  LogoutSuccessAction,
  LogoutFailAction,
};
