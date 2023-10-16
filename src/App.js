import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentsCounter from "./CommentsCounter";
import "./App.css";
import Login from "./feature/login-signup/Login";
import SignUp from "./feature/login-signup/SignUp";
import BlogPost from "./feature/blog-post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/comment-inc_dec" element={<CommentsCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
