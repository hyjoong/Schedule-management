import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const ConfigureStore = createStore(rootReducer, composeWithDevTools());

export default ConfigureStore;
