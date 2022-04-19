import React from "react";

function Name() {
  let myRole = "<Full Stack Developer/>";

  return (
    <div style={{ marginTop: "1.2rem" }}>
      <h1 style={{ fontSize: "2.8rem" }} className="name-title">
        Hi, I'm Shoeb Uddin Ahmed
      </h1>
      <h3 style={{ paddingLeft: "19em" }} className="name-title-role">
        {myRole}
      </h3>
    </div>
  );
}

export default Name;
