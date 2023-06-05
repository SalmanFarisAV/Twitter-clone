import React from "react";
import "./Notiwidget.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Trending from "../Home/Trending";
import Follow from "../Home/Follow";
function Notiwidget() {
  return (
    <div className="Notiwid">
      <div className="widgets__input">
        <SearchIcon className="widget__searchicon" />
        <input className="search" placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__container">
        <h2 className="h2">What's happening</h2>

        <Trending
          head="Technology · Trending"
          tag="#WWDC23"
          tweet="68.7K Tweets"
        />
        <Trending
          head="Trending in Politics"
          tag="#BalasoreTrainTragedy"
          tweet="13.2K Tweets"
        />
        <Trending
          head="Careers · Trending"
          tag="#IITMadras"
          tweet="Trending with #NIRF2023"
        />
        <Trending
          head="Entertainment·Trending"
          tag="#Don3"
          tweet="3,749 Tweets"
        />
        <Trending head="Trending in India" tag="Fake News" tweet="66K Tweets" />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>

      <div className="widgets__container">
        <h2 className="h2">Who to Follow </h2>
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
          disname="Elon Muskr"
          tag="elonmusk"
          link="https://twitter.com/elonmusk"
        />

        <Follow
          avatar="https://pbs.twimg.com/profile_images/669241201757786113/C3XX6cGE_400x400.png"
          disname="Matt LeBlanc"
          tag="Matt_LeBlanc"
          link="https://twitter.com/matt_leblanc"
        />
        <Follow
          avatar="https://i.ibb.co/sCKwVYD/Whats-App-Image-2023-05-26-at-00-19-35-dp.jpg"
          disname="Jishnu Vijayan"
          tag="JishnuVijayan03"
          link="https://twitter.com/JishnuVijayan03"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1496734873133924353/XcjkhMaj_400x400.jpg"
          disname="AB de Villiers"
          tag="ABdeVilliers17"
          link="https://twitter.com/ABdeVilliers17"
        />

        <Follow
          avatar="https://pbs.twimg.com/profile_images/1178987041209454594/uhPst1AS_400x400.jpg"
          disname="Sunny Leone"
          tag="SunnyLeone"
          link="https://twitter.com/SunnyLeone"
        />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
    </div>
  );
}

export default Notiwidget;
