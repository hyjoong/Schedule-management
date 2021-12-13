import { all, put, call, takeLatest, fork } from "redux-saga/effects";
import { req, getHeaders } from "../apis/request";
import {
  LOAD_BOARD_FAILURE,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
  ADD_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  LOAD_BOARD,
  LOAD_BOARD_SUCCESS,
} from "../redux/actionType";

const loadBoardAPI = async (data) => {
  return await req(`/board`, {
    method: "GET",
    headers: getHeaders(),
  });
};

const addBoardAPI = async (data) => {
  const { text } = data;
  const res = await req(`/board`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ text }),
  });
  return res;
};

const updateBoardAPI = async (data) => [
  // update
];

const deleteBoardAPI = async (data) => {
  const id = data;

  return await req(`/board/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
};

function* loadBoard(action) {
  try {
    const result = yield call(loadBoardAPI, action.data);
    console.log("load res =", result);
    yield put({
      type: LOAD_BOARD_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_BOARD_FAILURE,
      data: err.response.data,
    });
  }
}

function* addBoard(action) {
  try {
    const result = yield call(addBoardAPI, action.data);
    console.log("add_board_result", result);
    yield put({
      type: ADD_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_BOARD_FAILURE,
      data: err.response.data,
    });
  }
}

function* updateBoard(action) {
  try {
    const result = yield call(updateBoardAPI, action.data);
    yield put({
      type: UPDATE_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_BOARD_FAILURE,
      data: err.response.data,
    });
  }
}

function* deleteBoard(action) {
  try {
    const result = yield call(deleteBoardAPI, action.data);
    yield put({
      type: DELETE_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_BOARD_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadBoard() {
  yield takeLatest(LOAD_BOARD, loadBoard);
}

function* watchAddBoard() {
  yield takeLatest(ADD_BOARD, addBoard);
}

function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD, updateBoard);
}

function* watchDeleteBoard() {
  yield takeLatest(DELETE_BOARD, deleteBoard);
}

export default function* boardSaga() {
  yield all([fork(watchLoadBoard)]);
  yield all([fork(watchAddBoard)]);
  yield all([fork(watchUpdateBoard)]);
  yield all([fork(watchDeleteBoard)]);
}
