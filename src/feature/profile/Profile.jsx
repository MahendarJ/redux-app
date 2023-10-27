import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataNull } from "../login-signup/LoginSignupSlice";

const Profile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector((state) => state.loginSignup.data);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(dataNull());
    navigate("/");
  };
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Hi, {profile?.username}
      </button>
      {isOpen && (
        <div>
          <p>{profile?.email}</p>
          <p onClick={handleLogout}>Logout</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
