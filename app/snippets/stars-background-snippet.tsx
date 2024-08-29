"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h1 className="relative flex-col md:flex-row z-10 text-6xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span>INNOVATE</span>
        <span className="text-white font-thin text-3xl md:text-7xl">x</span>
        <span>INSPIRE</span>
      </h1>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
