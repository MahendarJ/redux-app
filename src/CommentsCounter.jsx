import React from "react";
import Counter from "./feature/counter/Counter";
import Comments from "./feature/comments/Comments";
import LikeToggle from "./feature/account-like/LikeToggle";

const CommentsCounter = () => {
  return (
    <div>
      <Counter />
      <Comments />
      <LikeToggle />
    </div>
  );
};

export default CommentsCounter;
