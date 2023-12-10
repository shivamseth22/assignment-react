import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [localLiveData, setLocalLiveData] = useState();

  console.log(localLiveData);

  useEffect(() => {
    const liveData = localStorage.getItem("liveWeather");
    const parsedLiveData = JSON.parse(liveData); // Parse the JSON
    console.log(parsedLiveData);
    setLocalLiveData(parsedLiveData);
  }, []);

  const checking = () => {
    const token = localStorage.getItem("myToken");
    console.log(token);
    if (token) {
      setToken(token);
    } else {
      navigate("/onboard");
    }
  };

  useEffect(() => {
    checking();
  }, []);

  // localStorage.setItem("liveWeather", JSON.stringify(data.liveWeather));

  return (
    <div className=" flex flex-col gap-7 p-[2rem] bg-blue-400 h-[800px] text-white">
      <div className="flex justify-between ">
        <Link to="/city"><h1 className="text-xl font-bold">Semarang</h1>
       </Link>
         <p>LO</p>
      </div>
      <div>Img</div>
      <div className="">
        <div className="absolute mt-36 mx-auto min-w-[350px] ">
          <p></p>
          <h1></h1>
          <p></p>
          <div className="flex justify-around m-2 p-2">
            <div>Time</div>
            <div>{localLiveData?.time}</div>
          </div>
          <div className="flex justify-around m-2 p-2">
            <div>Temprature</div>
            <div>{localLiveData?.temperature}</div>
          </div>
          <div className="flex justify-around m-2 p-2">
            <div>Max</div>
            <div>{localLiveData?.maxTemperature}</div>
          </div>
          <div className="flex justify-around m-2 p-2">
            <div>Min</div>
            <div>{localLiveData?.minTemperature}</div>
          </div>
          <div className="flex justify-around m-2 p-2">
            <div>Condition</div>
            <div>windSpeed</div>
          </div>
          <div className="flex justify-around m-2 p-2">
            <div>Humidity</div>
            <div>{localLiveData?.humidity}</div>
          </div>
          <div className="flex justify-around m-2 p-2">
            <div></div>
            <div></div>
          </div>
          <Link to="/detail">
          <button className="bg-blue-400 m-3 p-3" > Forecast</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
