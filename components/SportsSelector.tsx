import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sportCategories } from "@/utils/constants";

interface SportsSelectorProps {
  onSelect: (sport: string) => void;
  selectedSport: string;
}

export function SportsSelector({ onSelect, selectedSport }: SportsSelectorProps) {
  const [activeCategory, setActiveCategory] = useState("Team Sports");

  const DesktopSelector = () => (
    <div className="hidden md:block">
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {Object.keys(sportCategories).map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "secondary" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "bg-red-900/50 text-red-50 border border-white hover:bg-orange-700"
                : "bg-red-700/30 hover:bg-red-700/50 text-red-50 border-none"
            }
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sportCategories[activeCategory].withGender.map((sport) => (
          <div key={sport} className="flex flex-col gap-2">
            <Button
              variant={selectedSport === `${sport} (Men)` ? "secondary" : "outline"}
              className="h-auto py-2 text-left justify-start"
              onClick={() => onSelect(`${sport} (Men)`)}
            >
              {sport} (Men)
            </Button>
            <Button
              variant={selectedSport === `${sport} (Women)` ? "secondary" : "outline"}
              className="h-auto py-2 text-left justify-start"
              onClick={() => onSelect(`${sport} (Women)`)}
            >
              {sport} (Women)
            </Button>
          </div>
        ))}
        {sportCategories[activeCategory].other.map((sport) => (
          <Button
            key={sport}
            variant={selectedSport === sport ? "secondary" : "outline"}
            className="h-auto py-2 text-left justify-start"
            onClick={() => onSelect(sport)}
          >
            {sport}
          </Button>
        ))}
      </div>
    </div>
  );

  const MobileSelector = () => (
    <div className="md:hidden">
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(sportCategories).map(([category, sports]) => (
          <AccordionItem key={category} value={category} className="border-white/20">
            <AccordionTrigger className="text-red-50 hover:text-red-200">
              {category}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {sports.withGender.map((sport) => (
                  <div key={sport} className="bg-red-900/30 rounded-lg p-2">
                    <div className="text-sm font-medium text-red-200 mb-2">{sport}</div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onSelect(`${sport} (Men)`)}
                        className={`flex-1 ${selectedSport === `${sport} (Men)` ? 'bg-red-700/50' : ''}`}
                      >
                        Men
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onSelect(`${sport} (Women)`)}
                        className={`flex-1 ${selectedSport === `${sport} (Women)` ? 'bg-red-700/50' : ''}`}
                      >
                        Women
                      </Button>
                    </div>
                  </div>
                ))}
                {sports.other.map((sport) => (
                  <Button
                    key={sport}
                    variant="outline"
                    onClick={() => onSelect(sport)}
                    className={`w-full ${selectedSport === sport ? 'bg-red-700/50' : ''}`}
                  >
                    {sport}
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