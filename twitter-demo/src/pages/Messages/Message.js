import React, { useContext, useEffect, useRef } from "react";
import { Avatar } from "@mui/material";
import "./Message.css";
import { ChatContext } from "../../Context/ChatContext";
import { AuthContext } from "../../Context/AuthContext";

var condition;

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  if (message.senderId === currentUser.uid) {
    condition = true;
  } else {
    condition = false;
  }

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <>
      {condition ? (
        <div className="msgf">
          <div className="msgl">
            <div ref={ref} className="owner">
              <p className="msgtxt">{message.text}</p>
            </div>
            <Avatar className="msgavt" src={currentUser.photoURL} alt="" />
          </div>
        </div>
      ) : (
        <div className="msgfl">
          <div className="msgll">
            <Avatar className="msgavtl" src={data.user.photoURL} alt="" />
            <div ref={ref} className="msgfeedl">
              <p className="msgtxtl">{message.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
