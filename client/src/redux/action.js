import { ADD_PLAN, LOGIN, LOGOUT } from "./actionType";

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

export { LoginAction, LogoutAction, AddPlan };
