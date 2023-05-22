import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import TextField from "@mui/material/TextField";
import "firebase/compat/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

var profile;

function TweetBox({ prof, name }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const array = [
    "DnTiKBy5xift6Ego5FXb90WAmG72",
    "HkQTU4GolaSTjptwt0bixI5S4T53",
  ];

  const search = (key) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === key) {
        return true;
      }
    }
    return false;
  };

  const removeGmailDomain = (email) => {
    const usrname = email.replace("@gmail.com", "");
    return usrname;
  };

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayname: authUser.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: removeGmailDomain(authUser.email),
      verified: true,
      // search(authUser.uid)
      text: tweetMessage,
      image: tweetImage,
      avatar: authUser.photoURL,
    });

    // https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=8pcgITFZ5X3OxJQBVtoHxa3bmMprtKkGAId5ZkufPuo=
    // "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    setTweetMessage("");
    setTweetImage("");
  };

  if (authUser) {
    profile = authUser.photoURL;
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src={profile} alt="" />

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
