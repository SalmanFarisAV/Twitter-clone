import React from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar";
import Notifeed from "./Notifeed";
import Notiwidget from "./Notiwidget";
function Notification() {
  return (
    <div className="noti">
      <Sidebar a3={true} />
      <Notifeed />
      <Notiwidget />
    </div>
  );
}

export default Notification;
