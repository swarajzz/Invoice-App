import { combineReducers, createStore } from "redux";
import formReducer from "./features/invoice/formSlice";
  import authSlice from "./features/auth/authSlice";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authSlice,
});

const store = createStore(rootReducer);

export default store;
