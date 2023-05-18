import React from "react";
import "./Explore.css";
import Sidebar from "../../Components/Sidebar";
function Explore() {
  return (
    <div className="explore">
      <Sidebar a2={true} />
      <div className="warning">
        <h1> Welcome to Explore </h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Explore;
