import "./Login.css";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
import TwitterIcon from "@mui/icons-material/Twitter";
import { auth } from "../Home/firebase";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmissionSignup = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handleSubmissionLogin = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div class="container">
      <input id="signup_toggle" type="checkbox" />
      <form class="form">
        <div class="form_front">
          <TwitterIcon className="t" />
          <div class="form_details">Login to Twitter</div>

          <input
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            type="email"
            class="input"
            placeholder="email"
          />

          <input
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            type="password"
            class="input"
            placeholder="Password"
          />

          <b className="err">{errorMsg}</b>
          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmissionLogin}
            class="btny"
          >
            Login
          </button>
          <span class="switch">
            Don't have an account?
            <label for="signup_toggle" class="signup_tog">
              Sign Up
            </label>
          </span>
        </div>

        <div class="form_back">
          <TwitterIcon className="t" />
          <div class="form_details">SignUp to Twitter</div>
          <input
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            type="text"
            class="input"
            placeholder="Name"
          />
          <input
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            type="email"
            class="input"
            placeholder="email"
          />
          <input
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            type="password"
            class="input"
            placeholder="Password"
          />

          <b className="err">{errorMsg}</b>
          <button
            onClick={handleSubmissionSignup}
            disabled={submitButtonDisabled}
            class="btny"
          >
            Signup
          </button>

          <span class="switch">
            Already have an account?
            <label for="signup_toggle" class="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
