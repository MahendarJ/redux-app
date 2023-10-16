import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLogin } from "./UserEntersAxios";

const Login = () => {
  const data = useSelector((state) => state.loginSignup.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(formData));
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <h1>Welcome </h1>
      <p>We are glad to see you back with us</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        /><br />
        <input type="submit" value="Sign In" />
      </form>
      <p>Login with Others</p>
      <button>Login with google </button> <br />
      <button> Login with Facebook</button>
      <br />
      <Link to="/sign-up" style={{ textDecoration: "none" }}>
        Click to SignUp
      </Link>
      <p>{data && data}</p>
    </div>
  );
};

export default Login;
