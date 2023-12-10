import React from "react";
import Frame from "../assets/frame.png";
import Congo from "../assets/congo.png";

const Sucessfull = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <img src={Frame} className="" />
        <img src={Congo} alt="" className=" mb-52"/>
      </div>
      <h1>Back to Login</h1>
    </div>
  );
};

export default Sucessfull;
