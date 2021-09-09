import { createStore } from "redux";
import Reducers, { countReducer, depositoReducer } from "../reducers";
const store = createStore(depositoReducer)
export default store;