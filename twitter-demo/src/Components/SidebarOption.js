import React from "react";
import "./SidebarOption.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function SidebarOption({ active, text, Icon, path }) {
  const navigate = useNavigate();
  return (
    <div className="SidebarOption">
      <Button onClick={() => navigate(path)} className="sidebutton">
        <div className={`opt ${active && "opt--active"}`}>
          <Icon />
          <h2>{text}</h2>
        </div>
      </Button>
    </div>
  );
}

export default SidebarOption;
