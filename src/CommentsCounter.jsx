import React from "react";
import Counter from "./feature/counter/Counter";
import Comments from "./feature/comments/Comments";

const CommentsCounter = () => {
  return (
    <div>
      <Counter />
      <Comments />
    </div>
  );
};

export default CommentsCounter;
