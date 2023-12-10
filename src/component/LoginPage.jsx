import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false); // Assuming loginError should be initialized as false

  const [loginData, setLoginData] = useState({
    email: "",

    password: "",
  });

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://hiring-test.a2dweb.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    console.log(data);

    if (data.token) {
      localStorage.setItem("myToken", JSON.stringify(data.token));
      localStorage.setItem("liveWeather", JSON.stringify(data.liveWeather));
      navigate("/");

    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
    // console.log(name, value);
  };

  return (
    <div className="p-[3rem]">
      <img src={Logo} className="mb-7" />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={loginData.email} // Assuming you want to use loginData.email
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
            value={loginData.password} // Assuming you want to use loginData.password
            onChange={handleInputChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
          <span
            onClick={handleTogglePassword} // Corrected function name
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? "👁️" : "👁️"}
          </span>
        </div>

        <button
          type="submit"
          className="m-3 mb-48 p-3 border-[1px] border-gray-300 w-full rounded-2xl bg-gray-300"
        >
          Login
        </button>
      </form>

      <Link to="/signup">
        <p>
          Do not have an Account?{" "}
          <span className="text-blue-800 font-bold">Sign Up</span>
        </p>
      </Link>
    </div>
  );
};

export default LoginPage;
