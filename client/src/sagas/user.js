import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT,
} from "../redux/actionType";

function loginAPI(data) {
  return axios.post("/user/login", data);
}

function logoutAPI(data) {
  return axios.post("/user/logout", data);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({ type: LOGIN_FAILURE });
  }
}

function* logout(action) {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, login); // takeLatest가 LOGIN 액션이 dispatch되길 기다려서 dispatch될 때 login 제너레이터 호출
}

function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
