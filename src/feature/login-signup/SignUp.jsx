import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "./UserEntersAxios";

const SignUp = () => {
  const data = useSelector((state) => state.loginSignup.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(formData));
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e, "e");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <br />
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <p>{data && data}</p>
    </div>
  );
};

export default SignUp;
