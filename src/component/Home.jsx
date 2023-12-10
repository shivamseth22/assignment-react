import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import City from "./City";

const Home = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [localLiveData, setLocalLiveData] = useState();
  const [showModel, setShowModal] = useState(false);
  const [cityData , setCityData] = useState(false);
  // console.log(localLiveData);

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
  },[]);

  const MyModel = () => {
    return (
      <div className="bg-white p-12 min-w-[300px] absolute text-black z-10 mt-20  rounded-xl">
        <img src="" alt="img" className="m-5 p-5" />
        <h1 className="text-lg font-bold">Log out</h1>
        <p className="my-2">Are you sure want to logout from app</p>
        <div className="flex">
          <button onClick={()=>navigate("/signup")} className="bg-red-300 m-2 p-2 w-full rounded-2xl" >Logout</button>
          <button onClick={CloseModel} className="bg-red-300 m-2 p-2 w-full rounded-2xl">Cancel</button>
        </div>
      </div>
    );
  };
  const CloseModel = ()=>setShowModal(false);
  // localStorage.setItem("liveWeather", JSON.stringify(data.liveWeather));


  return (
    <div className=" flex flex-col gap-7 p-[2rem] bg-blue-400 h-[800px] text-white" >
      <div className="flex justify-between ">
        
          <h1 className="text-xl font-bold" onClick={()=>setCityData(true)}>Semarang</h1>
      {cityData&& <City  cityData={cityData} setCityData={setCityData}/>}
        <p className="" onClick={()=>setShowModal(true)}>LO</p>
        {showModel && <MyModel />}
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
            <button className="bg-blue-400 m-3 p-3"> Forecast</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
