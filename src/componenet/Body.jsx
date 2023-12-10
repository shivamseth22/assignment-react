import React from "react";
import Login from "./Login";
import LoginPage from "./LoginPage";
import Sucessfull from "./Sucessfull";
import AfterSplash from "./AfterSplash";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/create-user", element: <Login /> },
    {
      path: "/home",
      element: <Home/>,
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
