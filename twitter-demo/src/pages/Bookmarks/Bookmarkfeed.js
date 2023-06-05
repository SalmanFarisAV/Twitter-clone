import React,{useContext} from "react";
import "./Bookmarkfeed.css";
import { AuthContext } from "../../Context/AuthContext";
function Bookmarkfeed() {
  const { currentUser } = useContext(AuthContext);
  const removeGmailDomain = (email) => {
    const usrname = email.replace("@gmail.com", "");
    return usrname;
  };
  return (
    <div className="bookfeed">
    <h2>Bookmarks</h2>
    <h4>@{removeGmailDomain(currentUser.email)}</h4>
    <div className="bookimage">
      <img className="bimg" src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png">
      </img>
      <h2>Save Tweets for later</h2>
      <p>Don’t let the good ones fly away! Bookmark</p>
      <p>Tweets to easily find them again in the future.</p>
    </div>
    </div>
  );
}

export default Bookmarkfeed;
