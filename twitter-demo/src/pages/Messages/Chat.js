import React, { useContext, useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, Button } from "@mui/material";
import Message from "./Message";
import SendIcon from "@mui/icons-material/Send";
import { ChatContext } from "../../Context/ChatContext";
import {
  doc,
  onSnapshot,
  arrayUnion,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import db from "../Home/firebase";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../Context/AuthContext";

const Chat = () => {
  const [text, setText] = useState("");
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  const removeGmailDomain = (email) => {
    if (email) {
      const usrname = email.replace("@gmail.com", "");
      return usrname;
    }
    return data.user?.email;
  };

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div className="chatside">
      <div className="chathead">
        <Avatar
          sx={{ width: 70, height: 70 }}
          src={data.user?.photoURL}
          alt=""
        />
        <h3>{data.user?.displayName}</h3>
      </div>
      <div className="chatting">
        <div className="msgc">
          {messages.map((m) => (
            <Message message={m} key={m.id} />
          ))}
        </div>
      </div>
      <div className="msgsend">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="msginpt"
          placeholder="Enter Message"
        />
        {/* <SendIcon className="sendicon" /> */}
        <Button onClick={handleSend} className="sendicon">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
