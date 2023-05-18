import React from "react";
import "./More.css";
import Sidebar from "../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
function More() {
  const navigate = useNavigate();
  return (
    <div className="more">
      <Sidebar a8={true} />
      <div className="warning">
        <img className="img" src={require("../yw.png")} alt="" />
        <h2>UNDER MAINTENANCE</h2>
        <h3>COME BACK SOON</h3>
      </div>
      {/* <Button onClick={() => navigate("/login")} className="log">
        Login
      </Button> */}
    </div>
  );
}

export default More;
