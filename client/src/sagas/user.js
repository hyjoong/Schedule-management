import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP,
} from "../redux/actionType";
import { saveToken, clearToken, getToken } from "../utils/token";
import { req } from "../apis/request";

const loginAPI = async (data) => {
  const { name, password } = data;
  const res = await req("/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, password }),
  });
  saveToken(res.token);
  console.log(res);
  return res;
};

const logoutAPI = async (data) => {
  clearToken();
};

const signUpAPI = async (data) => {
  const { email, name, password } = data;
  const res = await req("/auth/signup", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, name, password }),
  });
  console.log(res);
  return res;
};

// 추후에 구현
// const me = async () => {
//   const token = getToken();
//   return req("/auth/me", {
//     method: "GET",
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    console.log("로그인 결과", result);
    yield put({
      type: LOGIN_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({ type: LOGIN_FAILURE, error: err.response.data });
  }
}

function* logout() {
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

function* signup(action) {
  const result = yield call(signUpAPI, action.data);
  try {
    yield put({
      type: SIGNUP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGNUP_FAILURE,
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
function* watchSignUp() {
  yield takeLatest(SIGNUP, signup);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignUp)]);
}
