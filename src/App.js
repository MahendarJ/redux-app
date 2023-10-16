import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentsCounter from "./CommentsCounter";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/comment-inc_dec" element={<CommentsCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
