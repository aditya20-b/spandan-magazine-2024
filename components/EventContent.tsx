import { useMemo } from 'react';
import { Loader2, Trophy, Medal, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Standing, MatchResult, Positions } from "@/app/types";
import { eventDetails, days } from "@/utils/constants";

interface EventContentProps {
  selectedEvent: string;
  isLoading: boolean;
  error: string | null;
  standings: Standing[];
  matchResults: MatchResult[];
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

const teamBasedEvents = [
  "Football",
  "Cricket",
  "Throwball",
  "Futsal (Men)",
  "Futsal (Women)",
  "Basketball (Men)",
  "Basketball (Women)",
  "Hockey (Men)",
  "Hockey (Women)",
  "Volleyball (Men)",
  "Volleyball (Women)"
];

export function EventContent({
  selectedEvent,
  isLoading,
  error,
  standings,
  matchResults,
  selectedDay,
  setSelectedDay,
}: EventContentProps) {
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
    results: [],
  };

  const ResultIcon = ({ position }: { position: Positions }) => {
    switch (position) {
      case Positions.FIRST:
        return <Trophy className="h-6 w-6 text-yellow-400" />;
      case Positions.SECOND:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case Positions.THIRD:
        return <Award className="h-6 w-6 text-yellow-600" />;
      default:
        return <Star className="h-6 w-6 text-purple-400" />;
    }
  };

  const positionText = (position: Positions) => {
    switch (position) {
      case Positions.FIRST:
        return "1st Place";
      case Positions.SECOND:
        return "2nd Place";
      case Positions.THIRD:
        return "3rd Place";
      case Positions.CONSOLATION:
        return "Special Mention";
    }
  };

  const renderEventResults = () => (
    <div className="bg-red-900/30 p-6 rounded-lg">
      <h4 className="text-xl font-semibold mb-4">Event Results</h4>
      {details.results && details.results.length > 0 ? (
        <div className="space-y-4">
          {details.results.map((result, index) => (
            <div key={index} className="flex items-center space-x-4 bg-red-900/20 p-4 rounded-lg">
              <ResultIcon position={result.position} />
              <div>
                <p className="font-semibold text-lg">{positionText(result.position)}</p>
                <p>{result.teamName || result.college}</p>
                {result.teamName && <p className="text-sm text-red-300">{result.college}</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Results and winners will be announced here after the event.</p>
      )}
    </div>
  );

  const filteredStandings = useMemo(() => {
    return standings
      .filter(standing => standing.sport === selectedEvent)
      .sort((a, b) => {
        if (b.wins !== a.wins) {
          return b.wins - a.wins; // Sort by wins descending
        } else if (b.points !== a.points) {
          return b.points - a.points; // If wins are equal, sort by points descending
        } else {
          return a.losses - b.losses; // If points are also equal, sort by losses ascending
        }
      });
  }, [standings, selectedEvent]);

  const filteredMatchResults = matchResults.filter(result => result.sport === selectedEvent);

  const isTeamEvent = teamBasedEvents.includes(selectedEvent);

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

      {isTeamEvent ? (
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
                  <TableHead>Rank</TableHead>
                  <TableHead>Team Name</TableHead>
                  <TableHead>Wins</TableHead>
                  <TableHead>Losses</TableHead>
                  <TableHead>Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStandings.map((team, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
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
                  {filteredMatchResults
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
        renderEventResults()
      )}
    </div>
  );
}