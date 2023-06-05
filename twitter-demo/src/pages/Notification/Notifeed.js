import React from "react";
import "./Notifeed.css";
function Notifeed() {
  return (
    <div className="notifeed">
      <div className="warning">
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Notifeed;
