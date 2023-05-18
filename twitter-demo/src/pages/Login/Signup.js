// import "./Signup.css";

import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TwitterIcon from "@mui/icons-material/Twitter";
import { auth } from "../Home/firebase";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="container">
      <input id="signup_toggle" type="checkbox" />
      <form onSubmit={signUp} class="form">
        <div class="form_front">
          <TwitterIcon className="t" />
          <div class="form_details">SignUp to Twitter</div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            class="input"
            placeholder="Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            class="input"
            placeholder="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            class="input"
            placeholder="Password"
          />

          {/* <input type="text" class="input" placeholder="Confirm Password" /> */}
          <button class="btny">Signup</button>
          <span class="switch">
            Already have an account?
            <label
              onClick={() => navigate("/login")}
              for="signup_toggle"
              class="signup_tog"
            >
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
