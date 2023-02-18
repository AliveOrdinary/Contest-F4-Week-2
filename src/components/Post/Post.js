import React, { useState } from "react";
import "./Post.css";

const Post = ({ imageSrc, title, subtitle }) => {
  const [like, setLike] = useState(0);

  return (
    <div className="card">
      <img className="image" src={imageSrc} alt={title} />
      <div className="card-body">
        <div>User Id : {title}</div>
        <div className="title">Title : {subtitle}</div>
        <div>Likes : {like}</div>
      </div>
      <button className="like-btn" onClick={() => setLike(like + 1)}>
        Like
      </button>
    </div>
  );
};

export default Post;
