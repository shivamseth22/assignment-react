import React from "react";
import LoginPage from "./LoginPage";
import Sucessfull from "./Sucessfull";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Frame from "./Frame";
import Onboard from "./Onboard";
import SignUp from "./SignUp"

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Onboard />,
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
