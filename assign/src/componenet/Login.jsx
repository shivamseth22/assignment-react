import React, { useState } from 'react';

const Login = (data) => {
  const [fullName, setFullName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic with the collected data
    console.log('Full Name:', fullName);
    console.log('Phone No:', phoneNo);
    console.log('Country:', country);
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add your login logic here, such as making an API request to authenticate the user
  };

  return (
    <div>
      <h2>Enter your email and password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} required className='m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full' />
        </div>
        <div>
          <input type="tel" placeholder="Phone No" value={phoneNo} onChange={handlePhoneNoChange} required className='m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full'  />
        </div>
        <div>
          <input type="text" placeholder="Country" value={country} onChange={handleCountryChange} required className='m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full'  />
        </div>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required  className='m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full'  />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required  className='m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full' />
        </div>
       
       
       
       
        <button type="submit" className=' m-3 p-3 border-[1px] border-gray-300 w-full rounded-2xl bg-gray-300'>Sign Up</button>
      </form>


      <p>Already have an Account ? Login</p>
    </div>
  );
};

export default Login;
