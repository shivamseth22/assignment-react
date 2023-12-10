import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const [myId, setMyId] = useState(null);
  const [localLiveData, setLocalLiveData] = useState(null);

  const weatherDetails = async () => {
    if (myId) {
      const token =JSON.parse(localStorage.getItem("myToken"));
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
      console.log(data);
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
    <div className="flex flex-col gap-7 p-[3rem]">
      <Link to="/home">
        {" "}
        <button className="flex ">Back</button>
      </Link>
      <div className="flex justify-around">
        <p>Today</p>
        <p>sep 12</p>
      </div>
      <div>data</div>
      <div className="flex justify-around">
        <p>nextForecast</p>
        <p>dd</p>
      </div>
      <div className="flex justify-around">
        <p>x</p>
        <p>y</p>
        <p>z</p>
      </div>
      <div className="flex justify-around">
        <p>x</p>
        <p>y</p>
        <p>z</p>
      </div>
      <div className="flex justify-around">
        <p>x</p>
        <p>y</p>
        <p>z</p>
      </div>
      <div className="flex justify-around">
        <p>x</p>
        <p>y</p>
        <p>z</p>
      </div>
      <div className="flex justify-around">
        <p>x</p>
        <p>y</p>
        <p>z</p>
      </div>
      <div className="flex justify-around">
        <p>x</p>
        <p>y</p>
        <p>z</p>
      </div>
    </div>
  );
};

export default Detail;
