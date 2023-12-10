import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col gap-7">
      <div className="flex justify-between">
        <h1>Semarang</h1>
        <p>LO</p>
      </div>
      <div>Img</div>
      <div>
        <p></p>
        <h1></h1>
        <p></p>
        <div className="flex justify-around m-2 p-2">
          <div>Time</div>
          <div>4131</div>
        </div>
        <div className="flex justify-around m-2 p-2" >
          <div>Temprature</div>
          <div>24</div>
        </div>
        <div className="flex justify-around m-2 p-2">
          <div>Max</div>
          <div>12</div>
        </div>
        <div className="flex justify-around m-2 p-2">
          <div>Min</div>
          <div>1</div>
        </div>
        <div className="flex justify-around m-2 p-2">
          <div>Condition</div>
          <div>windSpeed</div>
        </div>
        <div className="flex justify-around m-2 p-2">
          <div>Humidity</div>
          <div>54</div>
        </div>
        <div className="flex justify-around m-2 p-2">
          <div></div>
          <div></div>
        </div>
      </div>
      <button className="bg-blue-400 m-3 p-3"> Forecast</button>
    </div>
  );
};

export default Home;
