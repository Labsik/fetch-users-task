import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import userDetailsReducer from "./userDetails/userDetailsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    userDetails: userDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
