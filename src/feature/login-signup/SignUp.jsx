import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUp } from "./UserEntersAxios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const data = useSelector((state) => state.loginSignup.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  console.log(data?.msg)
  if (data === 'success') {
    navigate("/");
  }

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(formData));
  };
  const handleInputChange = (e) => {
    e.preventDefault();
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
          <label htmlFor="firstname">firstname :</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="lastname">lastname :</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="email">email :</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
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
