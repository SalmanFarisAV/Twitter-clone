import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Trending from "./Trending";
import Follow from "./Follow";


import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
function Widget() {
  return (
    <div className="widget">
      <div className="widgets__input">
        <SearchIcon className="widget__searchicon" />
        <input className="search" placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__container">
        <h2 className="h2">What's happening</h2>

        <Trending
          head="Trending in India"
          tag="#ViratKohli"
          tweet="7,365 Tweets"
        />
        <Trending
          head="Trending in Politics"
          tag="#DKShivakumar"
          tweet="8160 Tweets"
        />
        <Trending head="Trending" tag="Musk" tweet="513K Tweets" />
        <Trending
          head="Entertainment·Trending"
          tag="#Don3"
          tweet="3,749 Tweets"
        />
        <Trending head="Sports·Trending" tag="#RRvsRCB" tweet="20.3K Tweets" />
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

      <div className="widgets__container">
        <TwitterTweetEmbed tweetId={"1665612867243061251"} />
        <TwitterTweetEmbed tweetId={"1665663431054094337"} />
      </div>

      {/* <div className="follow">
        <div className="p1">
          <Avatar src={require("./p7.jpg")} />
          <h4>Virat Kohli</h4>
          <VerifiedIcon fontSize="small" />
        </div>
        <h4>@imVkohli</h4>
      </div> */}

      <div className="widgets__container">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AsianetNewsML"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widget;
