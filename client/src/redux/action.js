import { ADD_PLAN, LOGIN, LOGOUT, SIGNUP } from "./actionType";

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

const AddPlan = (data) => {
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

export { LoginAction, LogoutAction, AddPlan, SignupAction };
