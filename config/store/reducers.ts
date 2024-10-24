import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import signUpReducer from "./slices/signUpSlice";
import profileInfoReducer from "./slices/profileInfoSlice";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  profileInfo: profileInfoReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["profileInfo", "transaction", "cards",],
  blacklist: ["signUp", "resetPassword"],
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
