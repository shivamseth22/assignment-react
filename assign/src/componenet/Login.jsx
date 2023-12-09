import React, { useState } from "react";
import Logo from "../assets/logo.png";


const Login = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState(true);

  const countries = [
    "Select Country",
    "USA",
    "Canada",
    "UK",
    "Australia",
    "India",
  ]; // Add more countries as needed

  const newUser = {
    name: fullName,
    email: email,
    phone: phoneNo,
    password: password,
    country: country,
  };

  const handlePostData = async () => {
    const response = await fetch("https://hiring-test.a2dweb.com/create-user", {
      method: "POST",
      headers: {
        'content-type': "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log(data.status);
  };

  const handleTogglelogin = () => {
    setLogin(false);
  };
  const handleToggleSignUp = () => {
    setLogin(true);
  };

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Perform login logic with the collected data
    // console.log("Full Name:", fullName);
    // console.log("Phone No:", phoneNo);
    // console.log("Country:", country);
    // console.log("Email:", email);
    // console.log("Password:", password);

    // You can add your login logic here, such as making an API request to authenticate the user
  };

  return (
    <div>
      <img src={Logo} className="mb-7" />
      <form onSubmit={handleSubmit}>
        <div>
          {login && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              required
              className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
            />
          )}
        </div>
        <div>
          {login && (
            <input
              type="tel"
              placeholder="Phone No"
              value={phoneNo}
              onChange={handlePhoneNoChange}
              required
              className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
            />
          )}
        </div>
        <div>
          {login && (
            <select
              value={country}
              onChange={handleCountryChange}
              required
              className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
            >
              {countries.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="m-3 p-3 border-[1px] border-gray-300 rounded-2xl w-full"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
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
        <button
          type="submit"
          className="m-3 mb-24 p-3 border-[1px] border-gray-300 w-full rounded-2xl bg-gray-300"
          onClick={handlePostData}
        >
          {login ? "Sign up" : "Login"}
        </button>
        {/* <input type="checkbox">Remember Me</input> */}
      </form>

      {login && (
        <p onClick={handleTogglelogin}>
          Already have an Account?{" "}
          <span className="text-blue-800 font-bold">Login</span>
        </p>
      )}
      {!login && (
        <p onClick={handleToggleSignUp}>
          Do not have an Account?{" "}
          <span className="text-blue-800 font-bold">Sign Up</span>
        </p>
      )}
    </div>
  );
};

export default Login;
