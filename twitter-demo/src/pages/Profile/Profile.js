import React from "react";
import "./Profile.css";
import Sidebar from "../../Components/Sidebar";
import ProfilePage from "./ProfilePage";
import ProfileWidget from "./ProfileWidget";

function Profile() {
  return (
    <div className="profile">
      <Sidebar a7={true} />
      <ProfilePage />
      <ProfileWidget />
    </div>
  );
}

export default Profile;
