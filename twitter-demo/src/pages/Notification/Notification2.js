import React from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar";
import Notiverified from "./Notiverified";
import Notiwidget from "./Notiwidget";
function Notification2() {
  return (
    <div className="noti">
      <Sidebar a3={true} />
      <Notiverified />
      <Notiwidget />
    </div>
  );
}

export default Notification2;
