import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profpage">
      <div className="warningp">
        <h1>Welcome to Profile</h1>
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
    </div>
  );
}

export default ProfilePage;
