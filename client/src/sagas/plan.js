import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_PLAN_SUCCESS,
  ADD_PLAN_FAILURE,
  ADD_PLAN,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PLAN_FAIILURE,
  UPDATE_PLAN,
  DELETE_PLAN_SUCCESS,
  DELETE_PLAN_FAILURE,
  DELETE_PLAN,
  DONE_PLAN_SUCCESS,
  DONE_PLAN_FAILURE,
  DONE_PLAN,
  LOAD_PLAN_FAILURE,
  LOAD_PLAN,
  LOAD_PLAN_SUCCESS,
} from "../redux/actionType";
import { req, getHeaders } from "../apis/request";

const PUBLIC_API = process.env.REACT_APP_BASE_URL;

const loadPlanAPI = async (data) => {
  const { user } = data;
  return await req(`/schedules`, {
    // return await req(`/schedules?name=/${user}`, {
    method: "GET",
    headers: getHeaders(),
  });
};

function addPlanAPI(data) {
  return axios.post(`${PUBLIC_API}/schedules`, data);
}

function updatePlanAPI(data) {
  return axios.patch(`${PUBLIC_API}/schedules/${data.id}`, data);
}

function deletePlanAPI(data) {
  return axios.delete(`/schedules/${data}`);
}

function donePlanAPI(data) {
  return axios.patch(`/schedules/done/${data}`, data);
}

function* addPlan(action) {
  try {
    const result = yield call(addPlanAPI, action.data);
    yield put({
      type: ADD_PLAN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* updatePlan(action) {
  try {
    const result = yield call(updatePlanAPI, action.data);
    yield put({
      type: UPDATE_PLAN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_PLAN_FAIILURE,
      data: err.response.data,
    });
  }
}

function* deletePlan(action) {
  try {
    const result = yield call(deletePlanAPI, action.data);
    yield put({
      type: DELETE_PLAN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* donePlan(action) {
  try {
    const result = yield call(donePlanAPI, action.data);
    yield put({
      type: DONE_PLAN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DONE_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* loadPlan(action) {
  try {
    const result = yield call(loadPlanAPI, action.data);
    console.log("페치한 결과 ~", result);
    yield put({
      type: LOAD_PLAN_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_PLAN_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPlan() {
  yield takeLatest(ADD_PLAN, addPlan);
}

function* watchUpdatePlan() {
  yield takeLatest(UPDATE_PLAN, updatePlan);
}

function* watchDeletePlan() {
  yield takeLatest(DELETE_PLAN, deletePlan);
}

function* watchDonePlan() {
  yield takeLatest(DONE_PLAN, donePlan);
}
function* watchloadPlan() {
  yield takeLatest(LOAD_PLAN, loadPlan);
}

export default function* planSaga() {
  yield all([fork(watchAddPlan)]);
  yield all([fork(watchUpdatePlan)]);
  yield all([fork(watchDeletePlan)]);
  yield all([fork(watchDonePlan)]);
  yield all([fork(watchloadPlan)]);
}
