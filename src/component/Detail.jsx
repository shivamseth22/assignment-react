import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const weatherDetails = async () => {
    const { id } = useParams();
    const response = await fetch(
      `https://hiring-test.a2dweb.com/view-small-forecast/${id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    weatherDetails();
  }, [id]);
  return (
    <div className="flex flex-col gap-7 p-[3rem]">
      <Link to="/home">
        {" "}
        <button className="flex ">Back</button>
      </Link>
      <div className="flex justify-around">
        <p>Today</p>
        <p> sep 12</p>
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
