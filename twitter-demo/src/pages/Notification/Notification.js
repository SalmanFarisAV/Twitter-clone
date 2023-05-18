import React from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar";
function Notification() {
  return (
    <div className="noti">
      <Sidebar a3={true} />
      <div className="warning">
        <h1>Welcome to Notifications</h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Notification;
