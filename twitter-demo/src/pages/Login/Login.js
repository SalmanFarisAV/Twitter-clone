import "./Login.css";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
import TwitterIcon from "@mui/icons-material/Twitter";
import { auth } from "../Home/firebase";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const logIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <form onSubmit={logIn}>
//       <div className="login">
//         <h1 className="h1">.</h1>
//         <div className="loginbox">
//           <TwitterIcon className="t" />
//           <h2 className="h2">Log in to Twitter</h2>
//           <TextField
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             className="tw"
//             id="outlined-basic"
//             label="Email"
//             type="email"
//             variant="outlined"
//           />
//           <TextField
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             className="tw"
//             id="outlined-basic"
//             label="Password"
//             type="password"
//             variant="outlined"
//           />
//           <Button onClick={() => navigate("/")} className="button">
//             Login
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default Login;
// () => navigate("/home")

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
      <form onSubmit={logIn} class="form">
        <div class="form_front">
          <TwitterIcon className="t" />
          <div class="form_details">Login to Twitter</div>
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
          <button onClick={() => navigate("/")} class="btny">
            Login
          </button>
          <span class="switch">
            Don't have an account?
            <label
              onClick={() => navigate("/signup")}
              for="signup_toggle"
              class="signup_tog"
            >
              Sign Up
            </label>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
