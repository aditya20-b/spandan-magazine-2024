"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { EventCategories } from "@/app/types";
import { useSportData } from "@/hooks/useSportData";
import { CategorySelector } from "@/components/CategorySelector";
import { SportsSelector } from "@/components/SportsSelector";
import { EventContent } from "@/components/EventContent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { categories, backgroundImage } from "@/utils/constants";

export function SpandansMagazineComponent() {
  // const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<EventCategories>(
    categories[0] as EventCategories
  );
  const [selectedEvent, setSelectedEvent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Day 1");

  const { standings, matchResults, isLoading, error, fetchSportData } = useSportData();

  useEffect(() => {
    setSelectedEvent("");
  }, [selectedCategory]);

  useEffect(() => {
    if (
      selectedEvent &&
      (selectedEvent.includes("(Men)") ||
        selectedEvent.includes("(Women)") ||
        ["Football", "Cricket", "Throwball"].includes(selectedEvent))
    ) {
      fetchSportData(selectedEvent);
    }
  }, [selectedEvent, fetchSportData]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as EventCategories);
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
        <Header
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="flex-grow p-6">
          <div className="max-w-6xl mx-auto bg-black/70 rounded-lg p-6">
            {
              /* TODO: fix this button */
            }
            {/* <Button
              onClick={() => router.push('/')}
              className="mb-4 bg-red-600 hover:bg-red-700 text-white"
            >
              Back to Home
            </Button> */}
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
                <EventContent
                  selectedEvent={selectedEvent}
                  isLoading={isLoading}
                  error={error}
                  standings={standings}
                  matchResults={matchResults}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                />
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}