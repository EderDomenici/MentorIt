import { Login } from "./login";
import { Profile } from "./profile";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><h1>Home Page</h1></div>,
    },

    {
        path:"/login",
        element: <Login/>
    }

    {
        path:"/profile",
        element:<Profile/>
    }
  ]);