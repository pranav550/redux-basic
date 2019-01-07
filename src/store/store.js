import { createStore, applyMiddleware } from "redux";
import allReducer from "../reducer";
import thunk from "redux-thunk";

const store = createStore(allReducer, {}, applyMiddleware(thunk));

export default store;
