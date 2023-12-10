import React from "react";
import LoginPage from "./LoginPage";
import Sucessfull from "./Sucessfull";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Frame from "./Frame";
import Onboard from "./Onboard";
import SignUp from "./SignUp"
import Home from "./Home";
import Detail from "./Detail";
import City from "./City";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/onboard",
      element: <Onboard/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/loginPage",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <Home/>,
      // children:[
      //   {
      //     path:"/detail",
      //     element:<Detail/>
      //   }
      // ]
    },
    {
      path: "/sucessfull",
      element: <Sucessfull />,
    },
    {
      path: "/frame",
      element: <Frame/>,
    },
    {
      path: "/detail",
      element: <Detail/>,
    },
    {
      path: "/city",
      element: <City/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
