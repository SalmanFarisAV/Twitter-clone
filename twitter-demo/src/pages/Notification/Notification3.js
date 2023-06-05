import React from "react";
import "./Notification3.css";
import Sidebar from "../../Components/Sidebar";
import Notimention from "./Notimention";
import Notiwidget from "./Notiwidget";
function Notification3() {
  return (
    <div className="noti">
      <Sidebar a3={true} />
      <Notimention />
      <Notiwidget />
    </div>
  );
}

export default Notification3;
