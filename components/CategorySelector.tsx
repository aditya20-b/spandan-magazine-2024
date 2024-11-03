import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EventCategories } from "@/app/types"
import { events } from "@/utils/constants";

interface CategorySelectorProps {
  category: EventCategories;
  onSelect: (event: string) => void;
  selectedEvent: string;
}

export function CategorySelector({
  category,
  onSelect,
  selectedEvent,
}: CategorySelectorProps) {
  const [activeSubCategory, setActiveSubCategory] = useState("");

  useEffect(() => {
    const firstSubCategory = Object.keys(events[category])[0];
    setActiveSubCategory(firstSubCategory);
  }, [category]);

  const DesktopSelector = () => (
    <div className="hidden md:block">
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {Object.keys(events[category]).map((subCategory) => (
          <Button
            key={subCategory}
            variant={activeSubCategory === subCategory ? "secondary" : "outline"}
            onClick={() => setActiveSubCategory(subCategory)}
            className={
              activeSubCategory === subCategory
                ? "bg-red-900/50 text-red-50 border border-white hover:bg-orange-700"
                : "bg-red-700/30 hover:bg-red-700/50 text-red-50 border-none"
            }
          >
            {subCategory}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events[category][activeSubCategory]?.map((event) => (
          <Button
            key={event}
            variant={selectedEvent === event ? "secondary" : "outline"}
            className="h-auto py-4 text-left justify-start"
            onClick={() => onSelect(event)}
          >
            {event}
          </Button>
        ))}
      </div>
    </div>
  );

  const MobileSelector = () => (
    <div className="md:hidden">
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(events[category]).map(([subCategory, eventList]) => (
          <AccordionItem key={subCategory} value={subCategory} className="border-white/20">
            <AccordionTrigger className="text-red-50 hover:text-red-200">
              {subCategory}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {eventList.map((event) => (
                  <Button
                    key={event}
                    variant="outline"
                    onClick={() => onSelect(event)}
                    className={`w-full ${selectedEvent === event ? 'bg-red-700/50' : ''}`}
                  >
                    {event}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="w-full">
      <DesktopSelector />
      <MobileSelector />
    </div>
  );
}