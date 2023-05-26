import React, { useContext, useState } from "react";
import "./ProfilePage.css";
import { Avatar, Button } from "@mui/material";
import { AuthContext } from "../../Context/AuthContext";
import TextField from "@mui/material/TextField";
import { auth } from "../Home/firebase";
import { updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import db from "../Home/firebase";

function ProfilePage() {
  const { currentUser } = useContext(AuthContext);
  const removeGmailDomain = (email) => {
    const usrname = email.replace("@gmail.com", "");
    return usrname;
  };

  const [values, setValues] = useState({
    name: "",
    photoUrl: "",
  });

  const changeName = async (e) => {
    e.preventDefault();
    await updateProfile(currentUser, {
      displayName: values.name,
    });
    await updateDoc(doc(db, "users", currentUser.uid), {
      displayName: values.name,
    });
    window.location.reload();
  };

  const changePic = async (e) => {
    e.preventDefault();
    await updateProfile(currentUser, {
      photoURL: values.photoUrl,
    });
    await updateDoc(doc(db, "users", currentUser.uid), {
      photoURL: values.photoUrl,
    });
    window.location.reload();
  };

  return (
    <div className="profpage">
      <div className="profhead">
        <Avatar
          className="profavt"
          sx={{ width: 135, height: 135 }}
          src={currentUser.photoURL}
          alt=""
        />
      </div>
      <div className="proffoot">
        <h2>{currentUser.displayName}</h2>
        <h3>@{removeGmailDomain(currentUser.email)}</h3>
        <div className="updt">
          <h5>Change Name :</h5>
          <div className="nmi">
            <TextField
              className="protext"
              id="b1"
              label="Enter The Name"
              variant="outlined"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <Button onClick={changeName}>Change</Button>
          </div>
          <h5>Change Profile Photo :</h5>
          <div className="pic">
            <TextField
              className="protext"
              id="outlined-basic"
              label="Enter Image URL"
              variant="outlined"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, photoUrl: event.target.value }))
              }
            />
            <Button onClick={changePic}>Change</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
