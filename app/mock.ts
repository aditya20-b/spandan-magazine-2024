import type { EventCategories, EventDetails, ScoreData } from "@/app/types";

const events: Record<EventCategories, Record<string, string[]>> = {
  "Literary and Debate": {
    "Major Events": [
      "Formal Debate",
      "TJ Jaishankar Memorial Quiz",
      "Not a Mediquiz",
      "JAM",
    ],
    "Minor Events": [
      "Turncoat",
      "Shipwreck",
      "Dumb Charades",
      "Pot Pourri",
      "Sports Quiz",
      "Fandom Quiz",
      "Cryptic Crossword",
      "Scrabble",
      "Malarkey",
    ],
    "Online Events": [
      "Flash Fiction",
      "Creative Writing",
      "Poetry Writing",
      "6 Word Stories",
    ],
  },
  Culturals: {
    "Fine Arts": [
      "Painting",
      "T-shirt Painting",
      "Pot Painting",
      "Sketching",
      "Face Painting",
      "Mehendi",
      "Collage",
      "Origami",
      "Online Digital Art",
    ],
    Dance: [
      "Theme Group Dance",
      "Non-theme Group Dance",
      "Solo Dance",
      "Duet Dance",
      "Adaptunes",
      "Group Dance",
      "Dance Battle",
    ],
    Music: [
      "Solo Singing: Eastern",
      "Solo Singing: Western",
      "Solo Instrumental",
      "Alaap: Indian Band",
      "Tinnitus: Western Band",
      "Euphony: Western Acoustics Band",
    ],
    Dramatics: ["Skit", "Play", "Adzap", "Variety", "Mime"],
    Fashion: ["Dernier Cri: Fashion Show"],
  },
  Sports: {
    "Team Sports": [
      "Basketball (Men)",
      "Basketball (Women)",
      "Cricket",
      "Football",
      "Futsal",
      "Hockey",
      "Throwball",
      "Volleyball",
    ],
    "Racquet Sports": ["Table Tennis", "Tennis", "Badminton"],
    Athletics: [],
    Aquatics: [],
    "Board Games": ["Chess", "Carrom"],
  },
  Proshows: {
    Events: ["Coming Soon"],
  },
};

const eventDetails: EventDetails = {
  "Formal Debate": {
    writeup:
      "Engage in intellectual discourse and showcase your argumentative skills in our Formal Debate competition.",
    image: "/placeholder.svg?height=300&width=400",
  },

  "Basketball (Men)": {
    writeup:
      "Experience the thrill of fast-paced action on the court in our Basketball tournament.",
    image: "/placeholder.svg?height=300&width=400",
  },

  // Add more event details here...
};

// TODO: Remove old mock data and cleanup
const dayResults: Record<string, Record<string, { team1: string; team2: string; score1: number; score2: number }[]>> = {
  "Day 1": {
    Basketball: [
      { team1: "Team A", team2: "Team B", score1: 78, score2: 72 },
      { team1: "Team C", team2: "Team D", score1: 65, score2: 68 },
    ],

    Football: [
      { team1: "Team X", team2: "Team Y", score1: 2, score2: 1 },
      { team1: "Team Z", team2: "Team W", score1: 0, score2: 0 },
    ],
  },

  "Day 2": {
    Basketball: [
      { team1: "Team A", team2: "Team C", score1: 81, score2: 75 },
      { team1: "Team B", team2: "Team D", score1: 70, score2: 73 },
    ],

    Football: [
      { team1: "Team X", team2: "Team W", score1: 3, score2: 2 },
      { team1: "Team Y", team2: "Team Z", score1: 1, score2: 1 },
    ],
  },

  // Add more days and results here...
};

const mockData: ScoreData = {
  Basketball: [
    { teamName: "Team A", wins: 3, losses: 1, points: 7 },
    { teamName: "Team B", wins: 2, losses: 2, points: 6 },
    { teamName: "Team C", wins: 1, losses: 3, points: 5 },
  ],
  Cricket: [
    { teamName: "Team X", wins: 4, losses: 0, points: 8 },
    { teamName: "Team Y", wins: 2, losses: 2, points: 6 },
    { teamName: "Team Z", wins: 0, losses: 4, points: 4 },
  ],
  Football: [
    { teamName: "Team 1", wins: 3, losses: 1, points: 9 },
    { teamName: "Team 2", wins: 2, losses: 2, points: 6 },
    { teamName: "Team 3", wins: 1, losses: 3, points: 3 },
  ],
  Futsal: [
    { teamName: "Team Alpha", wins: 2, losses: 0, points: 6 },
    { teamName: "Team Beta", wins: 1, losses: 1, points: 3 },
    { teamName: "Team Gamma", wins: 0, losses: 2, points: 0 },
  ],
};


export { events, eventDetails, dayResults, mockData };
