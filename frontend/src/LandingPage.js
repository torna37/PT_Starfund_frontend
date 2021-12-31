import React from "react";

import { NavbarComponent } from "./components/NavbarComponent"
import { Home } from "./sections/Home"
import { Posts } from "./sections/Posts"

export const LandingPage = () => {
    
    return (
        <>
            <NavbarComponent />
            <div className = "landing-page">
                {/* <Home /> */}
                <Posts />
            </div> 
        </>
    )
}