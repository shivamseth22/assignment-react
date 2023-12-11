import React, { useEffect, useRef, useState } from "react";
import Search from "../assets/search.png";

const CityName = ({ name, minTemprature, maxTemprature }) => {
  console.log(name);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const City = ({ cityData, setCityData }) => {
  const [cityList, setCityList] = useState();

  const myRef = useRef(null);
  useEffect(() => {
    const eventHandler = (e) => {
      if (cityData && myRef.current && !myRef.current.contains(e.target)) {
        setCityData(false);
      }
    };
    document.addEventListener("mousedown", eventHandler);
  }, []);

  const MyFetch = async () => {
    const token = JSON.parse(localStorage.getItem("myToken"));
    const response = await fetch(`https://hiring-test.a2dweb.com/city-list/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.list);
    setCityList(data.list);
  };
  useEffect(() => {
    MyFetch();
  }, []);
  return (
    <div
      ref={myRef}
      className="p-[3rem] flex flex-col gap-5 absolute bg-white mt-12 text-black myCityData z-10  rounded-2xl"
    >
      <div className="flex items-center justify-center ">
        <img src={Search} alt="" className="max-w-[250px]" />
      </div>

      <div>
        {cityList&&Object?.entries(cityList).map(([key, value]) => {
          return (
            <div key={key} className="m-3 flex justify-between capitalize">
              <div>
                {value.name}
                
              </div>
              <div>
              {value.maxTemperature +"" + "/" + value.minTemperature}
              </div>
              

              {console.log(value.minTemprature)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default City;
