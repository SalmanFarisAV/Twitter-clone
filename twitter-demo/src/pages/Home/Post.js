import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(
  ({ displayname, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headertext">
              <h3>
                {displayname}
                <span className="post__headerspecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
              <div className="post__description">
                <p>{text}</p>
              </div>
            </div>
            <img className="image" src={image} alt="" />
            <div className="post__footer">
              <ChatBubbleOutlineIcon className="b1" fontSize="small" />
              <RepeatIcon className="b2" fontSize="small" />
              <FavoriteBorderIcon className="b3" fontSize="small" />
              <SendIcon className="b4" fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
