import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./dataService";

const Comments = () => {
    
  const data = useSelector((state) => state.comments);
  const value = useSelector((state) => state.counter.count);
  const comments = data.data;
  console.log("comments", comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  if (data.loading) {
    return <p>Loading...</p>;
  }
  if (data.error) {
    return <p>Error: {data.error}</p>;
  }

  const limitedData = comments && comments.slice(0, value ? value : 10);

  return (
    <div>
      {comments &&
        limitedData.map((comment, index) => (
          <p key={index}>
            {comment.id}. {comment.name}
          </p>
        ))}
    </div>
  );
};

export default Comments;
