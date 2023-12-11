import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import badal from "../assets/badal.png"

const Detail = () => {
  const [myId, setMyId] = useState(null);
  const [localLiveData, setLocalLiveData] = useState(null);
  const [apiData, setApiData] = useState();
  console.log(apiData);

  const weatherDetails = async () => {
    if (myId) {
      const token = JSON.parse(localStorage.getItem("myToken"));
      const response = await fetch(
        `https://hiring-test.a2dweb.com/view-small-forecast/${myId}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data.DATA[0].data1.time);
      setApiData(data.DATA);
    }
  };

  useEffect(() => {
    const liveData = localStorage.getItem("liveWeather");
    const parsedLiveData = JSON.parse(liveData);
    setLocalLiveData(parsedLiveData);
    setMyId(parsedLiveData?.cityId);
    weatherDetails();
  }, [myId]);

  return (
    <div className="flex flex-col gap-7 p-[3rem] bg-blue-400 min-h-[]">
      <Link to="/home">
        {" "}
        <button className="flex text-white text-lg font-bold">Back</button>
      </Link>
      <div className="flex justify-around">
        <p className="text-white text-lg font-bold">Today</p>
        <p className="text-white text-lg font-bold">sep 12</p>
        {/* <p>{apiData.Data[0].}</p> */}
      </div>
      {apiData?.map((data) => {
        return (
          <div key={Math.random()} className="flex text-white -ml-5">
            <div>
              <h1>{data?.data1?.time}</h1>
              <Icon condition={"sunny"} />
              <p>{data?.data1?.temperature}</p>
            </div>
            <div >
              <h1>{data?.data2?.time}</h1>
              <Icon condition={"sunny"} />
              <p>{data?.data2?.temperature}</p>
            </div>
            <div>
              <h1>{data?.data3?.time}</h1>
              <Icon condition={"sunny"} />
              <p>{data?.data3?.temperature}</p>
            </div>
            <div>
              <h1>{data?.data4?.time}</h1>
              <Icon condition={"sunny"} />
              <p>{data?.data4?.temperature}</p>
            </div>
            <div>
              <h1>{data?.data5?.time}</h1>
              <Icon condition={"sunny"} />
              <p>{data?.data5?.temperature}</p>
            </div>
            <div>
              <h1>{data?.data6?.time}</h1>
              <Icon condition={"sunny"} />
              <p>{data?.data6?.temperature}</p>
            </div>
          </div>
        );
      })}

      <div className="flex justify-around text-white mt-5">
        <p className="text-lg font-bold">NextForecast</p>
        <p className="text-lg font-bold">DD</p>
      </div>

    
      <div className="flex justify-around text-white items-center">
        <p className="text-lg ">Sep, 13</p>
        <img src={badal} alt="" className="-m-10"/>
        <p>21</p>
      </div>
      <div className="flex justify-around text-white items-center">
        <p className="text-lg ">Sep, 13</p>
        <img src={badal} alt="" className="-m-10"/>
        <p>22</p>
      </div>
      <div className="flex justify-around text-white items-center">
        <p className="text-lg ">Sep, 13</p>
        <img src={badal} alt="" className="-m-10"/>
        <p>34</p>
      </div>
      <div className="flex justify-around text-white items-center">
        <p className="text-lg ">Sep, 13</p>
        <img src={badal} alt="" className="-m-10"/>
        <p>27</p>
      </div>
      <div className="flex justify-around text-white items-center">
        <p className="text-lg ">Sep, 13</p>
        <img src={badal} alt="" className="-m-10"/>
        <p>32</p>
      </div>
      <div className="flex justify-around text-white items-center">
        <p className="text-lg ">Sep, 13</p>
        <img src={badal} alt="" className="-m-10"/>
        <p>25</p>
      </div>
    </div>
  );
};

export default Detail;
