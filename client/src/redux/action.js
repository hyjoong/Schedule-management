import { LOAD_SCHEDULE, ADD_SCHEDULE, LOGIN, LOGOUT } from "./actionType";

const LoadScheduleAction = (Schedule) => ({
  type: LOAD_SCHEDULE,
  payload: Schedule,
});

const AddSchedule = (Schedule) => ({
  type: ADD_SCHEDULE,
  playload: Schedule,
});

const LoginAction = (data) => ({
  type: LOGIN,
  playload: data,
});

const LogoutAction = (data) => ({
  type: LOGOUT,
  payload: data,
});

export { LoadScheduleAction, AddSchedule, LoginAction, LogoutAction };
