import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";
import SignUp from "./SignUp";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Browse />, 
  },
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/signup",
    element: <SignUp />, 
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword />, 
  },
]);

const Body = () => {
  return (
    <RouterProvider router={appRouter}>
      <Login /> 
    </RouterProvider>
  );
};

export default Body;
