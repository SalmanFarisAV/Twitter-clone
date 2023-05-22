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
          avatar="https://pbs.twimg.com/profile_images/1406692941804883971/P-si1zT8_400x400.jpg"
          disname="DMRそPHOENIX"
          tag="SalmanFarisAV1"
          link="https://twitter.com/SalmanFarisAV1"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg"
          disname="Virat Kohli"
          tag="imVkohli"
          link="https://twitter.com/imVkohli"
        />
        <Follow
          avatar="https://i.ibb.co/xXKPyvQ/jv.jpg"
          disname="Jishnu Vijayan"
          tag="JishnuVijayan03"
          link="https://twitter.com/JishnuVijayan03"
        />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
    </div>
  );
}

export default ProfileWidget;
