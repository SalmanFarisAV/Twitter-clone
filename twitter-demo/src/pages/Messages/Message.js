import React, { useContext, useEffect, useRef } from "react";
import { Avatar } from "@mui/material";
import "./Message.css";
import { ChatContext } from "../../Context/ChatContext";
import { AuthContext } from "../../Context/AuthContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div className="msgf">
      <div className="msgl">
        <div
          ref={ref}
          className={`msgfeed ${
            message.senderId === currentUser.uid && "owner"
          }`}
        >
          <p className="msgtxt">{message.text}</p>
        </div>
        <Avatar
          className="msgavt"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
