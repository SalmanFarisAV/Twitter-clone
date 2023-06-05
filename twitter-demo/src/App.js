import "./App.css";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notification from "./pages/Notification/Notification";
import Messages from "./pages/Messages/Messages";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Lists from "./pages/Lists/Lists";
import Profile from "./pages/Profile/Profile";
import More from "./pages/More/More";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "./pages/Home/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./Context/AuthContext";
import Notification2 from "./pages/Notification/Notification2";
import Notification3 from "./pages/Notification/Notification3";

function App() {
  const { currentUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [proFile, setproFile] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setproFile(user.photoURL);
      } else setproFile("");
    });
  }, []);

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

  return (
    <div className="app">
      {authUser ? (
        <Routes>
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="notifications/mention" element={<Notification3 />} />
          <Route path="notifications/verified" element={<Notification2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home prof={proFile} name={userName} />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="profile" element={<Profile />} />
          <Route path="more" element={<More />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

