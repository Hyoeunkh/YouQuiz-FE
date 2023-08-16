import { createStore } from "redux";
import answersReducer from "./reducers";

const store = createStore(answersReducer);

export default store;