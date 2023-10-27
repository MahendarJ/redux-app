import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postSlice";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";
import { set } from "date-fns";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClick = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/blog-post/post/${postId}`);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClick = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
      navigate(`/blog-post`);
    } catch (err) {
      console.error("Failed to save the post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <section>
      <h2>Edit post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => Number(setUserId(e.target.value))}
        >
          <option value="">none</option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content :</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" disabled={!canSave} onClick={onSavePostClick}>
          Save Post
        </button>
        <button
          type="button"
          className="deleteButton"
          onClick={onDeletePostClick}
        >
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
