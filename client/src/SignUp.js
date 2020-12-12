import React, { useState } from "react";
import axios from "./axios";
import SideContent from "./SideContent.js";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const signUpH2 = "One of us?";
  const signUpP =
    "If you already has an account, just sign in. We've missed you!";
  const signButton = "Sign In";

  const handleClick = () => {
    if (!name || !email || !phNumber || !dob || !password) {
      alert("All Fields are mandatory");
    } else {
      axios
        .post("/register", {
          name: name,
          email: email,
          phNumber: phNumber,
          dob: dob,
          password: password,
        })
        .then((response) => {
          if (response.data === "EXIST") {
            alert("User Already Registered.");
          } else if (response.data === "REGISTERED") {
            alert("User Registered");
          }
        });

      setName("");
      setEmail("");
      setPhNumber("");
      setDob("");
      setPassword("");
    }
  };

  return (
    <div className="cont">
      <div className="sideContent">
        <SideContent
          signH2={signUpH2}
          signP={signUpP}
          signButton={signButton}
          signOperation={"signin"}
        />
      </div>
      <div className="mainContent">
        <div class="signUp">
          <h2>Sign Up</h2>
          <label>
            <span>Email</span>
            <input
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            <span>Name</span>
            <input
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            <span>Phone Number</span>
            <input
              value={phNumber}
              type="text"
              onChange={(e) => {
                setPhNumber(e.target.value);
              }}
            />
          </label>
          <label>
            <span>DOB</span>
            <input
              value={dob}
              type="text"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button onClick={handleClick} className="submit submit-btn">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

// {/* <div className="form sign-up">
//       <h2>Sign Up</h2>
//       <label>
//         <span>Email</span>
//         <input
//           value={email}
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//       </label>
//       <label>
//         <span>Name</span>
//         <input
//           value={name}
//           type="text"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//       </label>
//       <label>
//         <span>Phone Number</span>
//         <input
//           value={phNumber}
//           type="text"
//           onChange={(e) => {
//             setPhNumber(e.target.value);
//           }}
//         />
//       </label>
//       <label>
//         <span>DOB</span>
//         <input
//           value={dob}
//           type="text"
//           onChange={(e) => {
//             setDob(e.target.value);
//           }}
//         />
//       </label>
//       <label>
//         <span>Password</span>
//         <input
//           value={password}
//           type="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//       </label>
//       <button onClick={handleClick} className="submit">
//         Sign Up Now
//       </button>
//     </div> */}
