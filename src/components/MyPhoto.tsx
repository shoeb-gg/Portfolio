import React from "react";
import myPhoto from "../resources/myphoto.jpg";

function MyPhoto() {
  return (
    <div className="photo">
      <div className="photo-img-outline"></div>
      <img className="photo-img" src={myPhoto} alt="" />
    </div>
  );
}

export default MyPhoto;
