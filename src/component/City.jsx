import React, { useEffect, useRef } from "react";

const City = ({cityData , SetCityData}) => {
  const myRef = useRef(null);
  useEffect(()=>{
    const eventHandler = (e) =>{
      if(!myRef.current.contains(e.target)){
        SetCityData(false);
      }
    }
    document.addEventListener("mousedown" , eventHandler )
  },[])
  return (
    <div  ref={myRef} className="p-[3rem] flex flex-col gap-5 absolute bg-white mt-12 text-black myCityData">
      <div className="flex bg-red-300 items-center justify-center ">
        <p >X</p>
        <input type="text" className="bg-gray-400" />
        <p>M</p>
      </div>
      <div className="flex justify-around">
      <p>banglere</p>
      <p>34/23</p>

      </div>
      <div className="flex justify-around">
      <p>banglere</p>
      <p>34/23</p>

      </div><div className="flex justify-around">
      <p>banglere</p>
      <p>34/23</p>

      </div><div className="flex justify-around">
      <p>banglere</p>
      <p>34/23</p>

      </div><div className="flex justify-around">
      <p>banglere</p>
      <p>34/23</p>

      </div><div className="flex justify-around">
      <p>banglere</p>
      <p>34/23</p>

      </div>
      
    </div>
  );
};

export default City;
