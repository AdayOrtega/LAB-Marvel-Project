import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function Root(){
    return (
        <>
        <Header title='Marvel Page Project' />
        <Outlet/>
        <Footer name='AdayOrtega@2023'/>
        
        </>
    )
}

export default Root