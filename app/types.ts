type EventCategories =
  | "Literary and Debate"
  | "Culturals"
  | "Sports"
  | "Proshows";

type ScoreData = {
  [key: string]: {
    teamName: string;
    wins: number;
    losses: number;
    points: number;
  }[];
};

type EventDetails = {
  [key: string]: {
    writeup: string;
    image: string;
  };
};

export type Standing = {
  id?: number | string;
  sport: string;
  teamName: string;
  wins: number;
  losses: number;
  points: number;
};

export type MatchResult = {
  id?: number;
  day: string;
  sport: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
};


type SportCategory = {
  withGender: string[];
  other: string[];
}

export type { EventCategories, ScoreData, EventDetails, SportCategory };