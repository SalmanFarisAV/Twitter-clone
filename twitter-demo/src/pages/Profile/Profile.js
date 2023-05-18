import React from "react";
import "./Profile.css";
import Sidebar from "../../Components/Sidebar";
function Profile() {
  return (
    <div className="profile">
      <Sidebar a7={true} />
      <div className="warning">
        <h1>Welcome to Profile</h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default Profile;
