// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../assets/World.png"

const Onboard = () => {
  // const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const checking = () => {
    const token = localStorage.getItem("myToken");
    console.log(token);
    if (token) {
      // setToken(token);
      navigate("/");
    }
  };

  return (
    <div className=" bg-blue-400 h-[795px]  items-end pb-4">
    <img src={Map} alt="" />
      <div className="  rounded-xl bg-white m-5 p-5 ">
        <h1 className="text-lg font-bold">
          Explore global map of wind, weather, and ocean conditons
        </h1>
        <p className="flex-wrap">
          planning your trip become more easier with ideate weather app. ypu can
          instantly see the whole word weather few second
        </p>
        <button
          onClick={()=>navigate('/signup')}
          className="bg-blue-400 m-2  mt-10 p-3 w-48 rounded-2xl"
        >
          Get Started
        </button>
        <p className="m-2" onClick={()=>navigate('/loginpage')}>
          Already hava an account ! <span className="text-blue-400 ">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Onboard;
