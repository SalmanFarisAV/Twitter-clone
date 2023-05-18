import React, { useEffect, useState } from "react";
import { auth } from "../Home/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Home from "../Home/Home";
import Messages from "../Messages/Messages";
function Auth() {
  const [authuser, setAuthuser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthuser(user);
      } else {
        setAuthuser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authuser ? <p>{`Signed In as ${authuser.email}`}</p> : <p>Signed Out</p>}
    </div>
  );
}

export default Auth;
