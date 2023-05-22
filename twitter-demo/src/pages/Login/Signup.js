// // import "./Signup.css";

// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { auth } from "../Home/firebase";
// import React, { useState } from "react";

// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmissionSignup = () => {
//     if (!values.name || !values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         navigate("/");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };

//   return (
//     <div class="container">
//       <input id="signup_toggle" type="checkbox" />
//       <form class="form">
//         <div class="form_front">
//           <TwitterIcon className="t" />
//           <div class="form_details">SignUp to Twitter</div>
//           <input
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, name: event.target.value }))
//             }
//             type="text"
//             class="input"
//             placeholder="Name"
//           />
//           <input
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, email: event.target.value }))
//             }
//             type="email"
//             class="input"
//             placeholder="email"
//           />
//           <input
//             onChange={(event) =>
//               setValues((prev) => ({ ...prev, pass: event.target.value }))
//             }
//             type="password"
//             class="input"
//             placeholder="Password"
//           />

//           {/* <input type="text" class="input" placeholder="Confirm Password" /> */}
//           <b className="err">{errorMsg}</b>
//           <button
//             onClick={handleSubmissionSignup}
//             disabled={submitButtonDisabled}
//             class="btny"
//           >
//             Signup
//           </button>

//           <span class="switch">
//             Already have an account?
//             <label
//               onClick={() => navigate("/login")}
//               for="signup_toggle"
//               class="signup_tog"
//             >
//               Sign In
//             </label>
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;
