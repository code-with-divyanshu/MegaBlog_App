import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      className="inline-bock px-4 py-2 duration-200 font-bold uppercase hover:bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-400 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
