import { useState, useEffect } from "react";
import Typewriter from "../animations/Typewriter";
import NeoLandingPage from "../assets/neo-landing-page.png";

//Arbitrary text array
const textArray: string[] = [
  "Wake up, Neo...",
  "The Matrix has you...",
  "Follow the white rabbit",
  "Knock, knock, Neo.",
];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const text = textArray[index];
  const delayMs = text.length * 100;

  useEffect(() => {
    if (index === textArray.length - 1) return;
    const nextId = setTimeout(() => {
      setIndex((i) => (i + 1) % textArray.length);
    }, delayMs + 1000);

    return () => {
      clearTimeout(nextId);
    };
  }, [index]);

  return (
    <>
    <img src={NeoLandingPage} className="fixed top-0 left-0 w-screen h-screen object-cover opacity-10 bg-transparent" />
      <div className="flex justify-center-safe items-center border-red border-4 w-screen h-screen">
        <h1
          className="text-3xl justify-self-center align-self-center
         text-green-300"
        >
          <Typewriter key={text} text={text} delay={100} />
        </h1>
      </div>
      <button
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          bottom: "100px",
          left: 0,
          right: 0,
          textAlign: "center",
          cursor: "pointer",
          border: "2px solid white",
          padding: "10px 20px",
          borderRadius: "5px",
          width: "100px",
            backgroundColor: "transparent",
            color: "green",
            fontSize: "16px",
        }}
      >
        Skip
      </button>
    </>
  );
}

export default LandingPage;
