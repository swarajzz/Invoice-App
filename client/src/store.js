import { combineReducers, createStore } from "redux";
import formReducer from "./features/invoice/formSlice";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
