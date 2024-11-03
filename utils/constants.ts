import { SportCategory, EventCategories, EventDetails } from "@/app/types";

const categories = ["Literary and Debate", "Culturals", "Sports", "Proshows"];
const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
const backgroundImage = "/spooky.png";

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
  "JAM": {
    writeup:
      "Think on your feet and speak your mind in our Just A Minute competition.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "TJ Jaishankar Memorial Quiz": {
    writeup:
      "Test your knowledge and quick thinking in our TJ Jaishankar Memorial Quiz.",
      image: "/spooky.png"
  },
  "Basketball (Men)": {
    writeup:
      "Experience the thrill of fast-paced action on the court in our Basketball tournament.",
    image: "/placeholder.svg?height=300&width=400",
  },

  // Add more event details here...
};
const sportCategories: Record<string, SportCategory> = {
  "Team Sports": {
    withGender: ["Futsal", "Basketball", "Hockey", "Volleyball"],
    other: ["Football", "Cricket", "Throwball"],
  },
  "Racquet Sports": {
    withGender: ["Badminton", "Table Tennis"],
    other: [],
  },
  "Individual Sports": {
    withGender: ["Athletics", "Aquatics"],
    other: [],
  },
};

export { categories, days, events, backgroundImage, eventDetails, sportCategories };