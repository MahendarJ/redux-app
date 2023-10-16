import React from "react";
import PostLists from "./posts/PostLists";
import AddPostForm from "./posts/AddPostForm";

const index = () => {
  return (
    <div>
      <AddPostForm />
      <PostLists />
    </div>
  );
};

export default index;
