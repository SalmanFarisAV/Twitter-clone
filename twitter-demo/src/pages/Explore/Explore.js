import React from "react";
import "./Explore.css";

import Sidebar from "../../Components/Sidebar";
import Exfeed from "./Exfeed";
import Exwidget from "./Exwidget";
function Explore() {
  return (
    <div className="explore">
      <Sidebar a2={true} />
      <Exfeed />
      <Exwidget />
    </div>
  );
}

export default Explore;
