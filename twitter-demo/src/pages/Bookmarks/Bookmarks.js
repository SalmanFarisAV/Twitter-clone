import React from "react";
import "./Bookmarks.css";
import Sidebar from "../../Components/Sidebar";

function Bookmarks() {
  return (
    <div className="bookmark">
      <Sidebar a5={true} />
      <div className="warning">
        <h1>Welcome to Bookmarks</h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Bookmarks;
