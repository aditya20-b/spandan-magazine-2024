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

type DayResults = {
  [key: string]: {
    [key: string]: {
      team1: string;
      team2: string;
      score1: number;
      score2: number;
    }[];
  };
};


export type { EventCategories, ScoreData, EventDetails, DayResults };