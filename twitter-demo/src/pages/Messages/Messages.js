import React from "react";
import "./Messages.css";
import Sidebar from "../../Components/Sidebar";
import Chatbox from "./Chatbox";

function Messages() {
  return (
    <div className="message">
      <Sidebar a4={true} />
      <Chatbox />
    </div>
  );
}

export default Messages;
