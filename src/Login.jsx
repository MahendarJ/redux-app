import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    console.log("e", e);
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          style={{ backgroundColor: "F2F2F2" }}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          style={{ backgroundColor: "F2F2F2" }}
        />{" "}
        <br />
        <br />
        <input style={{ marginLeft: 45 }} type="submit" />
      </form>
      <p>Login with Others</p>
      <button>Login with google </button> <br />
      <button> Login with Facebook</button>
      <br />
      <Link to="/sign-up" style={{ textDecoration: "none" }}>
        Click to SignUp
      </Link>
    </div>
  );
};

export default Login;
