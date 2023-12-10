import React from "react";
import Frame from "../assets/frame.png";
import Congo from "../assets/congo.png";
import { Link } from "react-router-dom";

const Sucessfull = () => {
  return (
    <div className="flex p-[3rem] flex-col justify-center items-center">
      <div className="flex flex-col">
        <img src={Frame} className="" />
        <img src={Congo} alt="" className=" mb-52" />
      </div>
      <Link to="/loginpage">
      <h1>Back to Login</h1>
      </Link>
    </div>
  );
};

export default Sucessfull;
