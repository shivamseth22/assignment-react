import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

import Home from "./Home";

const Login = () => {
 
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState(true);
  const [signUpError , setSignUpError] = useState();

  const navigate = useNavigate();


  const [formData, setFormData] =
    useState(
      {
        name: "",
        email: "",
        phone: "",
        password: "",
        country: "",
      }
    );

  const countries = [
    "Select Country",
    "USA",
    "Canada",
    "UK",
    "Australia",
    "India",
  ];



  const handleToggleSignUp = () => {
    setLogin(true);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://hiring-test.a2dweb.com/create-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    

    if(data.status){
      navigate("/sucessfull")
    }else{
      setSignUpError(data.message)
    }
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
    // console.log(name, value);
  };

  return (
    <div className="p-[2rem]">
      <img src={Logo} className="mb-7" />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
        </div>
        <div>
          <input
            name="phone"
            type="number"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
        </div>
        <div>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          >
            {countries.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
        </div>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
          <span
            onClick={handleTogglePassword}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? "👁️" : "👁️"}
          </span>
        </div>
              {signUpError && <p className="bg-red-400">{signUpError}</p>
              }
        <button
          type="submit"
          className="m-3 mb-24 p-3 border-[1px] border-gray-300 w-full rounded-2xl bg-blue-500 text-white font-bold"
        >
          Sign Up
        </button>

        {/* <input type="checkbox">Remember Me</input> */}
      </form>

      <Link to="/loginPage">
        <p onClick={handleToggleSignUp}>
          Already have an Account?{" "}
          <span className="text-blue-800 font-bold">Login</span>
        </p>
      </Link>
    </div>
  );
};

export default Login;
