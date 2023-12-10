import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(true);

  const [loginData, setloginData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      password: "",
      country: "",
    }
  );


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("https://hiring-test.a2dweb.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    console.log(data.status);

    if(data.status){
      navigate("/login")
    }else{
      setLoginError(data.message)
    }
    console.log(data);
  };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
    // console.log(name, value);
  };


  return (
    <div>
      <img src={Logo} className="mb-7" />
      <form onSubmit={handleSubmit}>
        <div>
          <input
          name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
        </div>
        <div className="relative">
          <input
          name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
          <span
            onClick={handleInputChange}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? "👁️" : "👁️"}
          </span>
        </div>
        <Link to="/frame">
        <button
          type="submit"
          className="m-3 mb-24 p-3 border-[1px] border-gray-300 w-full rounded-2xl bg-gray-300"
          
        >
          Login
        </button>
        </Link>
        {/* <input type="checkbox">Remember Me</input> */}
      </form>

      <Link to="/login">
        <p>
          Do not have an Account?{" "}
          <span className="text-blue-800 font-bold">Sign Up</span>
        </p>
      </Link>
    </div>
  );
};

export default LoginPage;
