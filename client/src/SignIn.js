import React, { useState } from "react";
import axios from "./axios.js";
import SideContent from "./SideContent.js";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInH2 = "New here?";
  const signInP = "Sign up and discover great amount of new opportunities!";
  const signButton="Sign Up"

  const handleClick = () => {
    if (!email || !password) {
      alert("All Fields are mandatory");
    } else {
      axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data === "NO") {
            alert("User not found");
          } else if (response.data === "YES") {
            alert("Logged In");
          } else if (response.data === "WRONG") {
            alert("Invalid Credentials");
          }
        });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="cont">
      <div className="sideContent">
        <SideContent signH2={signInH2} signP={signInP} signButton={signButton} signOperation={"signup"}/>
      </div>
      <div className="mainContent">
        <div class="signIn">
          <h2>Sign In</h2>
          <label>
            <span>Email Address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button className="submit submit-btn" onClick={handleClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

// <div className="form sign-in">
//   <h2>Sign In</h2>
//   <label>
//     <span>Email Address</span>
//     <input
//       type="email"
//       value={email}
//       onChange={(e) => {
//         setEmail(e.target.value);
//       }}
//     />
//   </label>
//   <label>
//     <span>Password</span>
//     <input
//       type="password"
//       value={password}
//       onChange={(e) => {
//         setPassword(e.target.value);
//       }}
//     />
//   </label>
//   <button className="submit" onClick={handleClick}>
//     Sign In
//   </button>
// </div>
