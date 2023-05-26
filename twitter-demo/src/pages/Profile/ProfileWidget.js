import React from "react";
import Follow from "../Home/Follow";
import "./ProfileWidget.css";
import { Button } from "@mui/material";
function ProfileWidget() {
  return (
    <div className="profwid">
      <div className="widgets__container">
        <h2 className="h2">Who to Follow </h2>
        <Follow
          avatar="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
          disname="MrBeast"
          tag="MrBeast"
          link="https://twitter.com/MrBeast"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1562523305927618561/wbdOmBqz_400x400.jpg"
          disname="Marvel Studios"
          tag="MarvelStudios"
          link="https://twitter.com/MarvelStudios"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1599025506686754816/himIeRAN_400x400.jpg"
          disname="24 News"
          tag="i24onlive"
          link="https://twitter.com/24onlive"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1659804049993089024/kkdYLpy5_400x400.jpg"
          disname="Mohanlal"
          tag="Mohanlal"
          link="https://twitter.com/Mohanlal"
        />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
    </div>
  );
}

export default ProfileWidget;
