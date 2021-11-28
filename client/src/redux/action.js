import {
  ADD_PLAN,
  LOGIN,
  LOGOUT,
  SIGNUP,
  LOAD_PLAN,
  DELETE_PLAN,
} from "./actionType";

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

const AddPlanAction = (data) => {
  return {
    type: ADD_PLAN,
    data,
  };
};

const SignupAction = (data) => {
  return {
    type: SIGNUP,
    data,
  };
};

const LoadPlanAction = (data) => {
  return {
    type: LOAD_PLAN,
    data,
  };
};

const DeleteAction = (data) => {
  return {
    type: DELETE_PLAN,
    data,
  };
};
export {
  LoginAction,
  LogoutAction,
  AddPlanAction,
  SignupAction,
  LoadPlanAction,
  DeleteAction,
};
