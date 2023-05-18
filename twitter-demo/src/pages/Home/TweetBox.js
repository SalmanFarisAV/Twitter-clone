import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import TextField from "@mui/material/TextField";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayname: "Salman Faris",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: "sal96",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    });
    // https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=8pcgITFZ5X3OxJQBVtoHxa3bmMprtKkGAId5ZkufPuo=
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is Happening?!"
            type="text"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Image Url"
          variant="standard"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetbox_imageinput"
          placeholder="Optional : Enter The Image Url"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetfeed">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
