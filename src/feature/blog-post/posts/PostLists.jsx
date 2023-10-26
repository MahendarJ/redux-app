import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReacionButtons from "./ReacionButtons";
import { Link } from "react-router-dom";

const PostLists = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading ...</p>;
  } else if (postStatus === "succeeded") {
    const orderedList = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedList.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p className="excerpt">{post.body.substring(0, 75)}...</p>
        <p className="postCredit">
          <Link to={`post/${post.id}`}>View Post</Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
          <ReacionButtons post={post} />
        </p>
      </article>
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostLists;
