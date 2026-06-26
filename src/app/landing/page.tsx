import { useState, useEffect } from "react";
import Typewriter from "@/animations/Typewriter";
import NeoLandingPage from "@/assets/neo-landing-page.png";
import { NavLink } from "react-router";
import { NavigationHeaderMenu } from "../app_wide_componente/navigation_menu";
//Arbitrary text array
const textArray: string[] = [
  "Wake up, Neo...",
  "The Matrix has you...",
  "Follow the white rabbit",
  "Knock, knock, Neo.",
];

const footerArray: string[] = [
  "Julio Quintanilla",
  "Github @JayArch97",
  "Medium @j.xcvii",
  "",
];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const [footerIndex, setFooterIndex] = useState(0);
  const text = textArray[index];
  const footer = footerArray[footerIndex];
  const delayMs = text.length * 100;

  useEffect(() => {
    if (index === textArray.length - 1) {
      if (footerIndex === footerArray.length - 1) return;
      const nextFooterId = setTimeout(() => {
        setFooterIndex((i) => (i + 1) % footerArray.length);
      }, delayMs + 1000);

      return () => {
        clearTimeout(nextFooterId);
      };
    }
    const nextId = setTimeout(() => {
      setIndex((i) => (i + 1) % textArray.length);
    }, delayMs + 1000);

    return () => {
      clearTimeout(nextId);
    };
  }, [index, footerIndex]);

  return (
    <>
      <img
        src={NeoLandingPage}
        className="fixed top-0 left-0 w-screen h-screen object-cover bg-black opacity-95 pointer-events-none "
      />
      <NavigationHeaderMenu />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1
          className="text-3xl justify-self-center align-self-center
         text-green-300"
        >
          <Typewriter key={text} text={text} delay={100} />
        </h1>

        <NavLink
          to="/homepage"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20 text-xl border-green-300 border-4 px-2.5 py-2.5 rounded-2xl  "
        >
          Enter
        </NavLink>
      </div>
      {index === textArray.length - 1 ? (
        <p className="absolute bottom-10 left-0 right-0 text-center text-3xl text-green-300">
          <Typewriter key={footer} text={footer} delay={100} />
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default LandingPage;
