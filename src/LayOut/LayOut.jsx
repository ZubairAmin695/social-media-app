import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// pages............

import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import ChatBox from "../pages/chatbox/ChatBox";


// components.......
import Nav from '../components/nav/Nav'
import Leftbar from '../components/leftbar/Leftbar'
import Rightbar from '../components/rightbar/Rightbar'


const LayOut = () => {
  // feed..............

  const Feed = () => {
    return (
      <>

      <Nav/>
        <main>
            <Leftbar/>
          <div className="container">
            <Outlet />
          </div>
          <Rightbar/>
        </main>
      </>
    );
  };
  // router...............
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chatbox/:id",
          element: <ChatBox />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default LayOut;
