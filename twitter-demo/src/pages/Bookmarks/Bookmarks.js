import React from "react";
import "./Bookmarks.css";
import Sidebar from "../../Components/Sidebar";
import Bookmarkfeed from "./Bookmarkfeed";
import Bookmarkwidget from "./Bookmarkwidget";
function Bookmarks() {
  return (
    <div className="bookmark">
      <Sidebar a5={true} />
      <Bookmarkfeed />
      <Bookmarkwidget />
    </div>
  );
}

export default Bookmarks;
