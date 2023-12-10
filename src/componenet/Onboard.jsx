import React, { useEffect, useState } from 'react'

const Onboard = () => {

  const [userDetails , setUserDetails] = useState(null);

  useEffect(()=>{
    
      if()
  },[])
  return (
    <div>
      <div className='w-full h-80 bg-blue-300 mt-96 pt-5  rounded-xl'>
          <h1 className='text-lg font-bold'>Explore global map of wind, weather, and ocean conditons</h1>
          <p className='flex-wrap'>planning your trip become more easier with ideate weather app. ypu can instantly see the whole word weather few second</p>
          <button className='bg-white m-2  mt-10 p-3 w-48 rounded-2xl'>Get Started</button>
          <p>Already hava an account ! <span className='text-white'>Login</span></p>
      </div>
    </div>
  )
}

export default Onboard