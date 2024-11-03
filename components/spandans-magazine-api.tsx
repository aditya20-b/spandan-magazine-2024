'use client'

import { useState, useEffect, useCallback } from "react";
import { Moon, Menu, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EventCategories, Standing, MatchResult } from "@/app/types";

import { events, eventDetails } from "@/app/mock";

const categories = ["Literary and Debate", "Culturals", "Sports", "Proshows"];
const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
const backgroundImage = "/spooky.png";

interface SportCategory {
  withGender: string[];
  other: string[];
}

const sportCategories: Record<string, SportCategory> = {
  "Team Sports": {
    withGender: ["Futsal", "Basketball", "Hockey", "Volleyball"],
    other: ["Football", "Cricket", "Throwball"]
  },
  "Racquet Sports": {
    withGender: ["Badminton", "Table Tennis"],
    other: []
  },
  "Individual Sports": {
    withGender: ["Athletics", "Aquatics"],
    other: []
  }
};

interface CategorySelectorProps {
  category: EventCategories;
  onSelect: (event: string) => void;
  selectedEvent: string;
}

function CategorySelector({ category, onSelect, selectedEvent }: CategorySelectorProps) {
  const [activeSubCategory, setActiveSubCategory] = useState("");

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
        )) || <p>No events available for this category.</p>}
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

interface SportsSelectorProps {
  onSelect: (sport: string) => void;
  selectedSport: string;
}

function SportsSelector({ onSelect, selectedSport }: SportsSelectorProps) {
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

export function SpandansMagazineComponent() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategories>(
    categories[0] as EventCategories
  );
  const [selectedEvent, setSelectedEvent] = useState("");
  const [standings, setStandings] = useState<Standing[]>([]);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'standings' | 'results'>('standings');

  const fetchSportData = useCallback(async (sport: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const standingsResponse = await fetch("/api/standings");
      const standingsData = await standingsResponse.json();
      if (standingsData.success && Array.isArray(standingsData.data)) {
        setStandings(standingsData.data.filter((standing: Standing) => standing.sport === sport));
      } else {
        throw new Error(standingsData.error || "Failed to fetch standings data");
      }

      const resultsResponse = await fetch("/api/results");
      const resultsData = await resultsResponse.json();
      if (resultsData.success && Array.isArray(resultsData.data)) {
        setMatchResults(resultsData.data.filter((result: MatchResult) => result.sport === sport));
      } else {
        throw new Error(resultsData.error || "Failed to fetch match results data");
      }
    } catch (error) {
      console.error("Error fetching sport data:", error);
      setError("Failed to fetch sport data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setSelectedEvent("");
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedEvent && (selectedEvent.includes("(Men)") || selectedEvent.includes("(Women)") || ["Football", "Cricket", "Throwball"].includes(selectedEvent))) {
      fetchSportData(selectedEvent);
    }
  }, [selectedEvent, fetchSportData]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as EventCategories);
  };

  const renderEventContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      );
    }

    if (error) {
      return <div className="text-red-500 text-center">{error}</div>;
    }

    const details = eventDetails[selectedEvent] || {
      writeup: "Event details coming soon...",
      image: "/spooky.png",
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={details.image}
            alt={selectedEvent}
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{selectedEvent}</h3>
            <p>{details.writeup}</p>
          </div>
        </div>

        {selectedEvent && (selectedEvent.includes("(Men)") || selectedEvent.includes("(Women)") || ["Football", "Cricket", "Throwball"].includes(selectedEvent)) ? (
          <Tabs defaultValue="standings" onValueChange={(value) => setActiveTab(value as 'standings' | 'results')}>
            <TabsList>
              <TabsTrigger value="standings">Standings</TabsTrigger>
              <TabsTrigger value="results">Day-wise Results</TabsTrigger>
            </TabsList>
            <TabsContent value="standings">
              <Table>
                <TableCaption>{selectedEvent} Standings</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team Name</TableHead>
                    <TableHead>Wins</TableHead>
                    <TableHead>Losses</TableHead>
                    <TableHead>Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {standings.map((team, index) => (
                    <TableRow key={index}>
                      <TableCell>{team.teamName}</TableCell>
                      <TableCell>{team.wins}</TableCell>
                      <TableCell>{team.losses}</TableCell>
                      <TableCell>{team.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="results">
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {days.map((day) => (
                    <Button
                      key={day}
                      variant={selectedDay === day ? "secondary" : "ghost"}
                      onClick={() => setSelectedDay(day)}
                      className={`${
                        selectedDay === day
                          ? "bg-red-900/50 text-red-50 border border-white"
                          : "bg-red-700/30 hover:bg-red-700/50 text-red-50 border-none"
                      }`}
                    >
                      {day}
                    </Button>
                  ))}
                
                </div>
                <Table>
                  <TableCaption>
                    {selectedEvent} Results - {selectedDay}
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Team 1</TableHead>
                      <TableHead>Team 2</TableHead>
                      <TableHead>Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {matchResults
                      .filter((result) => result.day === selectedDay)
                      .map((result, index) => (
                        <TableRow key={index}>
                          <TableCell>{result.team1}</TableCell>
                          <TableCell>{result.team2}</TableCell>
                          <TableCell>
                            {result.score1} - {result.score2}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="bg-red-900/30 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Event Results</h4>
            <p>Results and winners will be announced here after the event.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed text-red-50 flex flex-col"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="fixed inset-0 bg-cover bg-center z-0" />

      <div className="relative z-10 flex-grow flex flex-col">
        <header className="bg-black/50 p-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Spandan Magazine
          </h1>
          <nav className="flex justify-between items-center">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button className="md:hidden" variant="default" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#300000] text-red-50">
                <SheetHeader>
                  <SheetTitle className="text-red-50">Menu</SheetTitle>
                  <SheetDescription className="text-red-200">
                    Navigate through different sections of Spandan Magazine
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        handleCategoryChange(category);
                        setIsSidebarOpen(false);
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <div className="hidden md:flex space-x-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "secondary" : "ghost"
                  }
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="ghost" size="icon">
              <Moon className="h-6 w-6" />
            </Button>
          </nav>
        </header>

        <main className="flex-grow p-6">
          <div className="max-w-6xl mx-auto bg-black/70 rounded-lg p-6">
            {selectedCategory === "Sports" ? (
              <SportsSelector 
                onSelect={setSelectedEvent} 
                selectedSport={selectedEvent}
              />
            ) : (
              <CategorySelector
                category={selectedCategory}
                onSelect={setSelectedEvent}
                selectedEvent={selectedEvent}
              />
            )}

            {selectedEvent && (
              <div className="mt-8 p-6 bg-red-900/50 rounded-lg">
                {renderEventContent()}
              </div>
            )}
          </div>
        </main>

        <footer className="bg-black/50 p-4 text-center">
          <p>&copy; 2024 Spandan Magazine. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}