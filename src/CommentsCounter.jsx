import React from "react";
import Counter from "./feature/counter/Counter";
import Comments from "./feature/comments/Comments";
import LikeToggle from "./feature/account-like/LikeToggle";
import Profile from "./feature/profile/Profile";

const CommentsCounter = () => {
  return (
    <div style={{ display: "flex",justifyContent:'space-between',margin:50 }}>
      <div>
        <Counter />
        <Comments />
        <LikeToggle />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default CommentsCounter;
