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
  "TJ Jaishankar Memorial Quiz": {
    writeup:
      "Test your knowledge and quick thinking in our TJ Jaishankar Memorial Quiz.",
    image: "/spooky.png",
  },
  "Not a Mediquiz": {
    writeup:
      "A quiz that blends the basics of medicine with general knowledge. Think you've got what it takes to tackle both worlds?",
    image: "/placeholder.svg?height=300&width=400",
  },
  "JAM": {
    writeup:
      "Think on your feet and speak your mind in our Just A Minute competition.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Turncoat": {
    writeup:
      "Switch sides at a moment’s notice in this intense solo debating event. Can you argue against yourself convincingly?",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Shipwreck": {
    writeup:
      "Convince others to save you from a sinking ship as you role-play iconic characters in this imaginative event.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Dumb Charades": {
    writeup:
      "Communicate without words in this fun and challenging game that will test your acting skills.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Pot Pourri": {
    writeup:
      "A dynamic mix of literary challenges that will push your creativity and wit to new levels.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Sports Quiz": {
    writeup:
      "For sports buffs: test your knowledge of games, players, and records in this high-energy quiz.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Fandom Quiz": {
    writeup:
      "Dive into the world of fandoms and see how well you know popular universes and characters.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Cryptic Crossword": {
    writeup:
      "Solve cryptic clues and fill in the grid in this brain-teasing crossword challenge.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Scrabble": {
    writeup:
      "Compete with words in this classic game of strategy and vocabulary.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Malarkey": {
    writeup:
      "Bluff, fib, and talk your way to victory in this game of deceit and humor.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Flash Fiction": {
    writeup:
      "Craft a story in a flash. Put your creativity and brevity to the test in this fast-paced writing event.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Creative Writing": {
    writeup:
      "Let your imagination soar as you weave words into stories, poems, or essays in this creative writing competition.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Poetry Writing": {
    writeup:
      "Express yourself through verse in this competition for budding poets.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "6 Word Stories": {
    writeup:
      "Challenge yourself to tell a complete story in just six words. Can you be concise and compelling?",
    image: "/placeholder.svg?height=300&width=400",
  },
  // Culturals events descriptions from the provided document
  "Solo Singing: Eastern": {
    writeup:
      "Display your mellifluous voice to enchant the crowd, lest they mistake your sonorous singing for that of a Koyal's call.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Alaap: Indian Band": {
    writeup:
      "Showcase the rich tapestry of Indian music, from ghazals of the North to Carnatic melodies of the South.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Tinnitus: Western Band": {
    writeup:
      "Join us for an eclectic experience with high-energy rock anthems and powerful riffs from bands across the nation.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Dernier Cri: Fashion Show": {
    writeup:
      "Poise, power, and perfection on display in Spandan’s ultimate ramp walk show. Show off your glitz and glamour!",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Adaptunes": {
    writeup:
      "Ever-switching steps, but always on beat. Show off your improv game in this ultimate battle of spontaneity.",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Euphony: Western Acoustics Band": {
    writeup:
      "No amps, connectors, or pedals here. Just you and your instrument, to enthrall your audience.",
    image: "/placeholder.svg?height=300&width=400",
  },
  // Sports events with blank writeups
  "Basketball (Men)": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Basketball (Women)": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Cricket": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Football": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Futsal": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Hockey": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Throwball": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Volleyball": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Table Tennis": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Tennis": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Badminton": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Chess": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
  "Carrom": {
    writeup: "",
    image: "/placeholder.svg?height=300&width=400",
  },
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
