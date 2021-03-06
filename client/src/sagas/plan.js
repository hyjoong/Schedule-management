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
import { client } from "../apis/axios";

const loadPlanAPI = async (data) => {
  const { user } = data;
  return await req(`/schedules?name=${user}`, {
    method: "GET",
    headers: getHeaders(),
  });
};

const addPlanAPI = async (data) => {
  const { title, start, end } = data;
  const res = client.post(`/schedules`, {
    title,
    start,
    end,
  });
  return res;
};

function updatePlanAPI(data) {
  // return axios.patch(`${PUBLIC_API}/schedules/${data.id}`, data);
}

const deletePlanAPI = async (data) => {
  const id = data;
  const res = client.delete(`/schedules/${id}`, {});
  return res;
  // return await req(`/schedules/${id}`, {
  //   method: "DELETE",
  //   headers: getHeaders(),
  // });
};

function donePlanAPI(data) {
  return axios.patch(`/schedules/done/${data}`, data);
}

function* loadPlan(action) {
  try {
    const result = yield call(loadPlanAPI, action.data);
    console.log("load res =", result);
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

function* addPlan(action) {
  try {
    const result = yield call(addPlanAPI, action.data);
    console.log("add_plan_result", result);
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
  console.log("action = ", action);
  try {
    const result = yield call(deletePlanAPI, action.data.id);
    console.log("res = ", result);
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
