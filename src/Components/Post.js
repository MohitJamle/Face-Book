import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import AccountCircleIclon from "@mui/icons-material/AccountCircle";

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
  console.log(timestamp);
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {imgName ? (
        <div className="post__image">
          <img
            src={`https://face-book-mern.herokuapp.com/retrive/image/single?name=${imgName}`}
            alt=""
          />
        </div>
      ) : (
        console.log("DEBUG >>> no image here")
      )}

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIclon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
