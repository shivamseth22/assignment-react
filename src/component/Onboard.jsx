// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className=" bg-blue-300 h-[100vh] flex items-end pb-4">
      <div className="  rounded-xl bg-white ">
        <h1 className="text-lg font-bold">
          Explore global map of wind, weather, and ocean conditons
        </h1>
        <p className="flex-wrap">
          planning your trip become more easier with ideate weather app. ypu can
          instantly see the whole word weather few second
        </p>
        <button
          onClick={()=>navigate('/signup')}
          className="bg-white m-2  mt-10 p-3 w-48 rounded-2xl"
        >
          Get Started
        </button>
        <p className="" onClick={()=>navigate('/loginpage')}>
          Already hava an account ! <span className="text-white">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Onboard;
