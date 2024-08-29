"use client";


import Services from "./services";
import FAQS from "./faq";
import { useState, useRef } from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "./snippets/stars-background-snippet";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const servicesRef = useRef<HTMLDivElement>(null);

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="w-full max-w-[100%] md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          A small effort <br /> for a big change
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Calculate, Analyze and Reduce <br/> your carbon emission today!
        </p>
        <a
          href={"/"} target="_blank"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white"
        >
          Go to our Tool
        </a>
 
        <ShootingStarsAndStarsBackgroundDemo/>
        <Services /> 
        <FAQS />

      </div>
    </div>
  );
}
