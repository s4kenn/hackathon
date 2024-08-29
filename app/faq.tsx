import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-6xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-3xl md:text-7xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>

        <AccordionItem value="item-4">
            <AccordionTrigger>
            What are carbon emissions?
            
            </AccordionTrigger>
            <AccordionContent>
            Carbon dioxide emissions are those stemming from the burning of fossil fuels and the manufacture of cement. They include carbon dioxide produced during consumption of solid, liquid, and gas fuels and gas flaring.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-1">
            <AccordionTrigger>What are the sources of carbon emissions?
            </AccordionTrigger>
            <AccordionContent>
            Carbon emissions can come from natural sources like decomposition, respiration, and ocean release, or from human activities like burning fossil fuels, deforestation, transportation, and cement production.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can we offset carbon emissions?
            </AccordionTrigger>
            <AccordionContent>
            One way to offset carbon emissions is to buy and cancel (retire) carbon credits. You can also invest in companies or investment funds that buy carbon credits to offset their emissions or for profit
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What Causes The Most Carbon Emissions? 
            </AccordionTrigger>
            <AccordionContent>
            Globally, the primary sources of greenhouse gas emissions are electricity and heat (31%), agriculture (11%), transportation (15%), forestry (6%) and manufacturing (12%)1. Energy production accounts for 73% of all emissions
            </AccordionContent>
          </AccordionItem>

          

          <AccordionItem value="item-5">
            <AccordionTrigger>What does carbon emissions affect the most?
            </AccordionTrigger>
            <AccordionContent>
            As greenhouse gas emissions blanket the Earth, they trap the sun's heat. This leads to global warming and climate change. The world is now warming faster than at any point in recorded history.
            </AccordionContent>
          </AccordionItem>

          
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
