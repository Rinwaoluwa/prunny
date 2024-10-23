import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import signUpReducer from "./slices/signUpSlice";

const rootReducer = combineReducers({
  signUp: signUpReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
