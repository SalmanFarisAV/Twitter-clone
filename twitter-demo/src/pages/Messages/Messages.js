import React from "react";
import "./Messages.css";
import Sidebar from "../../Components/Sidebar";
function Messages() {
  return (
    <div className="message">
      <Sidebar a4={true} />
      <div className="warning">
        <h1>Welcome to Messages</h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Messages;
