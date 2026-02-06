import { useState, useEffect } from "react"
import Typewriter from "../animations/Typewriter"

function LandingPage(){

const textArray = ["Wake up, User...", "The Matrix is after you", "Let's get started!"]

return(
    <div className="flex justify-center-safe items-center border-red border-4 w-screen h-screen">
        <h1 className="text-3xl justify-self-center align-self-center
         text-green-300"><Typewriter text={textArray[0]} delay={100} /></h1>
    </div>
    )
}


export default LandingPage