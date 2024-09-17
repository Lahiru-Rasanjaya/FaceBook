import React from "react";
import "./postPane.css";
import AddPost from "../addPost/addPost.js";
import Post from "../post/post.js";

export default function postPane() {
  return (
    <div className="postAllContent">
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
