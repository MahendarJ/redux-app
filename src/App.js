import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CommentsCounter from "./CommentsCounter";
import "./App.css";
import Login from "./feature/login-signup/Login";
import SignUp from "./feature/login-signup/SignUp";
import BlogPost from "./feature/blog-post";
import Layout from "./feature/blog-post/components/Layout";
import PostLists from "./feature/blog-post/posts/PostLists";
import AddPostForm from "./feature/blog-post/posts/AddPostForm";
import SinglePostPage from "./feature/blog-post/posts/SinglePostPage";
import EditPostForm from "./feature/blog-post/posts/EditPostForm";
import UserDetails from "./feature/user-details/UserDetails";

function App() {
  const hasToken = !!localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/blog-post" element={<Layout />}>
            <Route index element={<PostLists />} />
            <Route path="post">
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>
          </Route>
          <Route path="/user-details" element={<UserDetails />} />
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
