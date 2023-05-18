import React from "react";
import { Avatar, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./Follow.css";
function Follow({ avatar, disname, tag, link }) {
  return (
    <div className="follow">
      <div className="follow1">
        <Avatar src={avatar} alt="" />
        <div className="follow_text">
          <div className="follow_head">
            <h5>{disname}</h5>
            <VerifiedIcon className="icon" />
          </div>
          <h5 className="tt">@{tag}</h5>
        </div>
        <Button href={link} className="btni">
          Follow
        </Button>
      </div>
    </div>
  );
}

export default Follow;
