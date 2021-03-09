import React from "react";
import image1 from "../assets/img/image1.png";
import image2 from "../assets/img/image2.png";

const FirstPart = () => {
  return (
    <div className="FirstPart">
      <img className="image1" src={image1} alt="insertImage" />
      <img className="image2" src={image2} alt="insertImage" />
    </div>
  );
};

export default FirstPart;
