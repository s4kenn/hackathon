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
    title: "Monitor your Carbon Emission",
    description:
      "We provide four parameters through which you can calculate your Carbon Emissions",
  },
  
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiGraph className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Analyze and take actions immediately",
    description:
      "We provide a bar graph through which you can analyze where the emissions can be reduced",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "AI based Suggestions to reduce the emissions",
    description:
      "Our Smart AI can help you by giving suggestions on where you can actually reduce the carbon emissions",
  },
];
