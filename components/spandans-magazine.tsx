"use client";

import { useState, useEffect } from "react";
import { Moon, Menu, Loader2 } from "lucide-react";
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
import { EventCategories, ScoreData } from "@/app/types";

import { events, dayResults, eventDetails, mockData } from "@/app/mock";

const categories = ["Literary and Debate", "Culturals", "Sports", "Proshows"];
const sportsWithScores = ["Basketball", "Cricket", "Football", "Futsal"];
const backgroundImage = "/spooky.png";

export function SpandansMagazineComponent() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategories>(
    categories[0] as EventCategories
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    Object.keys(events[categories[0] as EventCategories])[0]
  );
  const [selectedEvent, setSelectedEvent] = useState("");
  const [scoreData, setScoreData] = useState<ScoreData>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState("Day 1");

  useEffect(() => {
    const fetchScoreData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setScoreData(mockData);
      } catch (error) {
        console.error("Error fetching score data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScoreData();
  }, []);

  useEffect(() => {
    const subCategories = Object.keys(events[selectedCategory]);
    setSelectedSubCategory(subCategories[0]);
    setSelectedEvent("");
  }, [selectedCategory]);

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

        {sportsWithScores.includes(selectedEvent) ? (
          <Tabs defaultValue="standings">
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
                  {scoreData[selectedEvent]?.map((team, index) => (
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
                <div className="flex justify-center space-x-2">
                  <div className="flex justify-center space-x-2">
                    {Object.keys(dayResults).map((day) => (
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
                    {dayResults[selectedDay][selectedEvent]?.map(
                      (result, index) => (
                        <TableRow key={index}>
                          <TableCell>{result.team1}</TableCell>
                          <TableCell>{result.team2}</TableCell>
                          <TableCell>
                            {result.score1} - {result.score2}
                          </TableCell>
                        </TableRow>
                      )
                    )}
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
                  <SheetTitle className="text-black">Menu</SheetTitle>
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
            <div className="mb-6 flex flex-wrap gap-2 justify-center">
              {Object.keys(events[selectedCategory]).map((subCategory) => (
                <Button
                  key={subCategory}
                  variant={
                    selectedSubCategory === subCategory
                      ? "secondary"
                      : "outline"
                  }
                  onClick={() => setSelectedSubCategory(subCategory)}
                >
                  {subCategory}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events[selectedCategory][selectedSubCategory]?.map((event) => (
                <Button
                  key={event}
                  variant={selectedEvent === event ? "secondary" : "outline"}
                  className="h-auto py-4 text-left justify-start"
                  onClick={() => setSelectedEvent(event)}
                >
                  {event}
                </Button>
              )) || <p>No events available for this category.</p>}
            </div>

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
