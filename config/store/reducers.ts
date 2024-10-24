import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import signUpReducer from "./slices/signUpSlice";

const rootReducer = combineReducers({
  signUp: signUpReducer,
//   resetPassword: resetPasswordReducer,
//   profileInfo: profileInfoReducer,
//   bankList: bankListSlice,
//   kycInfo: kycInfoReducer,
//   appSettings: appSettingsReducer,
//   transaction: transactionSlice,
//   billerCategories: billerCategoryReducer,
//   cards: cardSlice,
//   notifications: notificationSlice
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
//   whitelist: ["profileInfo", "kycInfo", "transaction", "appSettings", "cards",],
//   blacklist: ["signUp", "resetPassword", "billerCategories", "bankList"],
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
