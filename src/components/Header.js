import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "./store/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((store) => store.auth);
  function log() {
    dispatch(logInOut());
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">My Books</span>

      <button onClick={log} className="btn btn-outline-primary" type="submit">
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};

export default Header;
