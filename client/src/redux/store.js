import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas";

const sagamiddleware = createSagaMiddleware();

const ConfigureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagamiddleware))
);

sagamiddleware.run(rootSaga);

export default ConfigureStore;
