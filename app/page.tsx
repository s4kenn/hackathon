"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";


import Services from "./services";
import FAQS from "./faq";
import { useState, useRef } from "react";
import { HeroScrollDemo } from "./snippets/container-scroll-animation-snippet";
import { HeroParallaxDemo } from "./snippets/hero-parallax-snippet";





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
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
     
      <Spotlight className="hidden md:flex md:-top-60 left-80" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-7 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          Your small effort can do <br /> wonders to our society!
        </div>
        <p className="mt-4  md:text-3xl  font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Welcome to Carbon footprint Calculator
        </p>
        <a
          href={"https://hack4thon-backend.netlify.app/"} target="_blank"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white"
        >
          Go to our Tool
        </a>
       
       
        <Services /> 
        <FAQS />
        
      </div>
    </div>
  );
}
