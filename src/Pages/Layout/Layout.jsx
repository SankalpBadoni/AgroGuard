import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function Layout() {
    return (
      <>
      <div className=' h-screen max-w-6xl mr-auto ml-auto pl-6 pr-6 lg:bg-white'>
        <div>
          <Navbar/>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
      </>
    )
  }
  
  export default Layout