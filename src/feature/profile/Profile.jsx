import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector((state) => state.loginSignup.data);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Hi, {profile?.username}</button>
      {isOpen && (
        <div style={{backgroundColor:'black'}}>
          <p>{profile?.email}</p>
          <p onClick={() => ""}>Logout</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
