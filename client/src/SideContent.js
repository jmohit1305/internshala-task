import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideContent({ signH2, signP, signButton, signOperation }) {
  return (
    <div className="side">
      <div className="side-text m-up">
        <h2>{signH2}</h2>
        <p>{signP}</p>
      </div>
      <Link to={"/" + signOperation} className="linkDeco side-btn">
        <div>
          <span>{signButton}</span>
        </div>
      </Link>
    </div>
  );
}

export default SideContent;
