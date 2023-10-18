import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector((state) => state.loginSignup.data);
  const username = localStorage.getItem('username')
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
    
  }
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Hi, {username}</button>
      {isOpen && (
        <div style={{backgroundColor:'black'}}>
          <p>{profile?.email}</p>
          <p onClick={handleLogout}>Logout</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
