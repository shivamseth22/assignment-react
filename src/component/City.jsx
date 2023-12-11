import React, { useEffect, useRef ,useState } from "react";



const CityName =({name, minTemprature , maxTemprature})=>{
  console.log(name);

  return(
    <>
      <h1>{name}</h1>
    </>
  )
}




const City = ({cityData , setCityData}) => {

  const [cityList, setCityList] = useState();
 cons

  const myRef = useRef(null);
  useEffect(()=>{
    const eventHandler = (e) =>{
      if (
        cityData &&
        myRef.current &&
        !myRef.current.contains(e.target)
      ) {
        setCityData(false)
      }
    }
    document.addEventListener('mousedown', eventHandler)
  },[])

  const MyFetch = async ()=>{
    const token = JSON.parse(localStorage.getItem("myToken"));
    const response = await fetch(`https://hiring-test.a2dweb.com/city-list/`,{
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json();
    console.log(data.list);
    setCityList(data.list);
  }
  useEffect(()=>{
      MyFetch();
  },[]);
  return (
    <div  ref={myRef} className="p-[3rem] flex flex-col gap-5 absolute bg-white mt-12 text-black myCityData z-10 ml-8 rounde">
      <div className="flex bg-red-300 items-center justify-center ">
        <p >X</p>
        <input type="text" className="bg-gray-400" />
        <p>M</p>
      </div>
      <div>
        {cityList?.map((data)=>{

          <div>
           
            <CityName {...data}/>
          </div>
        })}
      </div>
    </div>
  );
};

export default City;
