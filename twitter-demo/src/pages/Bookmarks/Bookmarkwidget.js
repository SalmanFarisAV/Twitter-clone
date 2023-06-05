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
        <Trending
          head="Trending in India"
          tag="मनीष कश्यप"
          tweet="13.2K Tweets"
        />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
      <div className="widgets__container">
        <h2 className="h2">Who to Follow </h2>
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1631922736959475713/P543dkC5_400x400.jpg"
          disname="ksi"
          tag="KSI"
          link="https://twitter.com/KSI"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1665778585129603072/SUzJ-zWL_400x400.jpg"
          disname="nikhilraj"
          tag="rajnikhil343"
          link="https://twitter.com/rajnikhil343"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1140596536205877248/2UYQ4X8a_400x400.jpg"
          disname="Sidemen"
          tag="Sidemen"
          link="https://twitter.com/Sidemen"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1661932557133307907/WG7zbT8u_400x400.jpg"
          disname="RAE"
          tag="Valkyrae"
          link="https://twitter.com/Valkyrae"
        />
        <Follow
          avatar="https://pbs.twimg.com/profile_images/1611332347470692353/h5JnKeil_400x400.jpg"
          disname="Leo Messi"
          tag="imessi"
          link="https://twitter.com/imessi"
        />
        <Button className="bh5">
          <h5>Show more</h5>
        </Button>
      </div>
    </div>
  );
}

export default Bookmarkwidget;
