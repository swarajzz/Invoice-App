import { combineReducers, createStore } from "redux";
import formReducer from "./features/invoice/formSlice";
import authSlice from "./features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice
);

const rootReducer = combineReducers({
  form: formReducer,
  auth: persistedAuthReducer,
});

const store = createStore(rootReducer);

let persistor = persistStore(store);

export { store, persistor };
