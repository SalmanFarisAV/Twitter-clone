import React from "react";
import "./Exwidget.css";
import Follow from "../Home/Follow";
import { Button } from "@mui/material";
function Exwidget() {
  return (
    <div className="exwidget">
      <div className="widgets__container">
        <h2 className="h2">Who to Follow </h2>
        <Follow
          avatar="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
          disname="MrBeast"
          tag="MrBeast"
          link="https://twitter.com/MrBeast"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg"
          disname="NASA"
          tag="NASA"
          link="https://twitter.com/NASA"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1649088268355653634/yRnzTnJg_400x400.jpg"
          disname="Mammootty"
          tag="mammukka"
          link="https://twitter.com/mammukka"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1644061982239387648/4pxcTG5J_400x400.jpg"
          disname="Vijay"
          tag="actorvijay"
          link="https://twitter.com/actorvijay"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg"
          disname="Jeff Bezos"
          tag="JeffBezos"
          link="https://twitter.com/JeffBezos"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_400x400.jpg"
          disname="Joe Biden"
          tag="JoeBiden"
          link="https://twitter.com/JoeBiden
"
        />

        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
    </div>
  );
}

export default Exwidget;
