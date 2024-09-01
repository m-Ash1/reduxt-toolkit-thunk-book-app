import { configureStore } from "@reduxjs/toolkit";
import books from "../Book/bookSlice";
import auth from "../store/authSlice";
const store = configureStore({
  reducer: {
    books,
    auth,
  },
});
export default store;