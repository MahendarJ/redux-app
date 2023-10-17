import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "./UserEntersAxios";

const Login = () => {
  const data = useSelector((state) => state.loginSignup.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  if (data?.username) {
    navigate("comment-inc_dec");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(formData));
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        />
        <br />
        <input type="submit" value="Sign In" />
      </form>
      <p>Login with Others</p>
      <button>Login with google </button> <br />
      <button> Login with Facebook</button>
      <br />
      <Link to="/sign-up" style={{ textDecoration: "none" }}>
        Click to SignUp
      </Link>
      {data === 'False' && "Invalid username or password"}
    </div>
  );
};

export default Login;
