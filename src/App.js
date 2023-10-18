import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CommentsCounter from "./CommentsCounter";
import "./App.css";
import Login from "./feature/login-signup/Login";
import SignUp from "./feature/login-signup/SignUp";
import BlogPost from "./feature/blog-post";

function App() {
  const hasToken = !!localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/blog-post"
            element={hasToken ? <BlogPost /> : <Navigate to="/" />}
          />
          <Route
            path="/comment-inc_dec"
            element={hasToken ? <CommentsCounter /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
