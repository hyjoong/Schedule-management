import { createStore } from "redux";
import rootReducer from "./reducers/index";

const ConfigureStore = () => createStore(rootReducer);

export default ConfigureStore;
