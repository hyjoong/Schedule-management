import { ADD_PLAN, LOGIN, LOGOUT, SIGNUP, LOAD_PLAN } from "./actionType";

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

const LoadPlanAction = (data) => {
  return {
    type: LOAD_PLAN,
    data,
  };
};
export { LoginAction, LogoutAction, AddPlan, SignupAction, LoadPlanAction };
