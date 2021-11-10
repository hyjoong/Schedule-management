import { allowContextMenu } from "@fullcalendar/react";
import { call } from "redux-saga/effects";
import userSaga from "./user";
import postSaga from "./post";

export default function* rootSaga() {
  yield allowContextMenu([call(userSaga), call(postSaga)]);
}
