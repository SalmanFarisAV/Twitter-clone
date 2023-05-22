import React from "react";
import "./ProfilePage.css";
import SearchIcon from "@mui/icons-material/Search";
function ProfilePage() {
  return (
    <div className="profpage">
      <div className="searchh">
        <input
          type="text"
          autocomplete="off"
          name="text"
          class="inputt"
          placeholder="Search Twitter"
        ></input>
      </div>
    </div>
  );
}

export default ProfilePage;
