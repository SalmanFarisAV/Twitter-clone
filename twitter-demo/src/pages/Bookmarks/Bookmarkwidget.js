import React from "react";
import "./Bookmarkwidget.css";
import Trending from "../Home/Trending";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Follow from "../Home/Follow";
function Bookmarkwidget() {
  return (
    <div className="Bookwid">
      <div className="widgets__input">
        <SearchIcon className="widget__searchicon" />
        <input className="search" placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__container">
        <h2 className="h2">What's happening</h2>

        <Trending
          head="Trending in India"
          tag="Fake News"
          tweet="69.1K Tweets"
        />
        <Trending
          head="Entertainment · Trending"
          tag="#MouniRoy"
          tweet="4,569 Tweets"
        />
        <Trending head="Technology · Trending" tag="#NothingPhone2" tweet="" />
        <Trending
          head="Trending in India"
          tag="#BalasoreTrainTragedy"
          tweet="13.3K Tweets"
        />
        <Trending head="Trending in India" tag="मनीष कश्यप" tweet="13.2K Tweets" />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
      <div className="widgets__container">
        <h2 className="h2">Who to Follow </h2>
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1286687023185592320/Q1r6FSus_400x400.jpg"
          disname="Suriya Sivakumar"
          tag="Suriya_offl"
          link="https://twitter.com/Suriya_offl"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1660745906487185409/bpgD4hqR_400x400.jpg"
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

export default Bookmarkwidget;
