import React from "react";
import "./Lists.css";
import Sidebar from "../../Components/Sidebar";

function Lists() {
  return (
    <div className="list">
      <Sidebar a6={true} />
      <div className="warning">
        <h1>Welcome to Lists</h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Lists;
