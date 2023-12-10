import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Onboard = () => {

  const [userDetails , setUserDetails] = useState(null);
 const navigate = useNavigate();

 const checking = () =>{
  // e.preventDefault();
  const userDetails = localStorage.getItem("token");
  console.log(userDetails);
    if (userDetails==null) {
      setUserDetails(userDetails);
      navigate("/signup");
      use
    } else {
      navigate("/home");
      
    }
  }

// useEffect(() => {
  // checking();
// }
//  , []);
 
  return  (

    
    <div className='min-w-[350px] '>
      <div className='bg-blue-300 mt-96 pt-5 pb-8  rounded-xl'>
          <h1 className='text-lg font-bold'>Explore global map of wind, weather, and ocean conditons</h1>
          <p className='flex-wrap'>planning your trip become more easier with ideate weather app. ypu can instantly see the whole word weather few second</p>
          <button onClick={checking} className='bg-white m-2  mt-10 p-3 w-48 rounded-2xl'>Get Started</button>
          <p className=''>Already hava an account ! <span className='text-white'>Login</span></p>
      </div>
    </div>
  )
}

export default Onboard