import React from "react";
import Login from "./SignUp";
import LoginPage from "./LoginPage";
import Sucessfull from "./Sucessfull";
import AfterSplash from "./AfterSplash";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Frame from "./Frame";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/create-user",
      element: <LoginPage/>,
    },
    {
      path: "/loginPage",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/sucessfull",
      element: <Sucessfull />,
    },
    {
      path: "/frame",
      element: <Frame/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
