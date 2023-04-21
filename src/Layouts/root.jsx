import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import ResponsiveAppBar from "../Components/Header/Header"

function Root(){
    return (
      <>
        <ResponsiveAppBar /* title="Rick and Morty Api Project" */ />
        <Outlet />
        <Footer /* name='AdayOrtega@2023' */ />
      </>
    )
}

export default Root