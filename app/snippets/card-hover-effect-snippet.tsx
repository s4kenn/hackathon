import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiChat,
  PiDatabase,
  PiGraph,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Emission Calculator",
    description:
      "Our user-friendly interface makes it easy to calculate your carbon emissions based on your daily activities.",
  },
  
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiGraph className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Emission Analysis",
    description:
      "Our platform analyzes your emissions using four key factors, providing a detailed breakdown of your carbon footprint.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Sustainability Suggestions",
    description:
      "Get personalized suggestions on how to reduce your carbon emissions, powered by an integrated chatbot.",
  },
];
