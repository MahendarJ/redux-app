import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPostById } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReacionButtons from "./ReacionButtons";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/blog-post/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReacionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
