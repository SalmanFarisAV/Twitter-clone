import React from "react";

import "./Sidebar.css";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TweetBox from "../pages/Home/TweetBox";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

export default function Sidebar({ a1, a2, a3, a4, a5, a6, a7, a8 }) {
  return (
    <div className="sidebar">
      <TwitterIcon className="twittericon" />

      <SidebarOption active={a1} Icon={HomeIcon} text="Home" path="/" />
      <SidebarOption
        active={a2}
        Icon={TagIcon}
        text="Explore"
        path="/explore"
      />
      <SidebarOption
        active={a3}
        Icon={NotificationsIcon}
        text="Notifications"
        path="/notifications"
      />
      <SidebarOption
        active={a4}
        Icon={MessageIcon}
        text="Messages"
        path="/messages"
      />
      <SidebarOption
        active={a5}
        Icon={BookmarksIcon}
        text="Bookmarks"
        path="/bookmarks"
      />
      <SidebarOption
        active={a6}
        Icon={ArticleIcon}
        text="Lists"
        path="/lists"
      />
      <SidebarOption
        active={a7}
        Icon={AccountCircleIcon}
        text="Profile"
        path="/profile"
      />
      <SidebarOption
        active={a8}
        Icon={MoreHorizIcon}
        text="More"
        path="/more"
      />
      <SidebarOption Icon={LoginIcon} text="Login" path="/login" />
      <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>
      {/* <Popup
        className="pop"
        trigger={
        }
        position="top center"
      >
        <div>
          <TweetBox />
        </div>
      </Popup> */}
    </div>
  );
}
