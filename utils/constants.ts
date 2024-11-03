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
    image: "/spooky.png?height=300&width=400",
  },
  "TJ Jaishankar Memorial Quiz": {
    writeup:
      "Test your knowledge and quick thinking in our TJ Jaishankar Memorial Quiz.",
    image: "/spooky.png?height=300&width=400",
  },
  "Not a Mediquiz": {
    writeup:
      "A quiz that blends the basics of medicine with general knowledge. Think you've got what it takes to tackle both worlds?",
    image: "/spooky.png?height=300&width=400",
  },
  "JAM": {
    writeup:
      "Think on your feet and speak your mind in our Just A Minute competition.",
    image: "/spooky.png?height=300&width=400",
  },
  "Turncoat": {
    writeup:
      "Switch sides at a moment’s notice in this intense solo debating event. Can you argue against yourself convincingly?",
    image: "/spooky.png?height=300&width=400",
  },
  "Shipwreck": {
    writeup:
      "Convince others to save you from a sinking ship as you role-play iconic characters in this imaginative event.",
    image: "/spooky.png?height=300&width=400",
  },
  "Dumb Charades": {
    writeup:
      "Communicate without words in this fun and challenging game that will test your acting skills.",
    image: "/spooky.png?height=300&width=400",
  },
  "Pot Pourri": {
    writeup:
      "A dynamic mix of literary challenges that will push your creativity and wit to new levels.",
    image: "/spooky.png?height=300&width=400",
  },
  "Sports Quiz": {
    writeup:
      "For sports buffs: test your knowledge of games, players, and records in this high-energy quiz.",
    image: "/spooky.png?height=300&width=400",
  },
  "Fandom Quiz": {
    writeup:
      "Dive into the world of fandoms and see how well you know popular universes and characters.",
    image: "/spooky.png?height=300&width=400",
  },
  "Cryptic Crossword": {
    writeup:
      "Solve cryptic clues and fill in the grid in this brain-teasing crossword challenge.",
    image: "/spooky.png?height=300&width=400",
  },
  "Scrabble": {
    writeup:
      "Compete with words in this classic game of strategy and vocabulary.",
    image: "/spooky.png?height=300&width=400",
  },
  "Malarkey": {
    writeup:
      "Bluff, fib, and talk your way to victory in this game of deceit and humor.",
    image: "/spooky.png?height=300&width=400",
  },
  "Flash Fiction": {
    writeup:
      "Craft a story in a flash. Put your creativity and brevity to the test in this fast-paced writing event.",
    image: "/spooky.png?height=300&width=400",
  },
  "Creative Writing": {
    writeup:
      "Let your imagination soar as you weave words into stories, poems, or essays in this creative writing competition.",
    image: "/spooky.png?height=300&width=400",
  },
  "Poetry Writing": {
    writeup:
      "Express yourself through verse in this competition for budding poets.",
    image: "/spooky.png?height=300&width=400",
  },
  "6 Word Stories": {
    writeup:
      "Challenge yourself to tell a complete story in just six words. Can you be concise and compelling?",
    image: "/spooky.png?height=300&width=400",
  },
  // Culturals events descriptions from the provided document
  "Solo Singing: Eastern": {
    writeup:
      "Display your mellifluous voice to enchant the crowd, lest they mistake your sonorous singing for that of a Koyal's call.",
    image: "/spooky.png?height=300&width=400",
  },
  "Alaap: Indian Band": {
    writeup:
      "Showcase the rich tapestry of Indian music, from ghazals of the North to Carnatic melodies of the South.",
    image: "/spooky.png?height=300&width=400",
  },
  "Tinnitus: Western Band": {
    writeup:
      "Join us for an eclectic experience with high-energy rock anthems and powerful riffs from bands across the nation.",
    image: "/spooky.png?height=300&width=400",
  },
  "Dernier Cri: Fashion Show": {
    writeup:
      "Poise, power, and perfection on display in Spandan’s ultimate ramp walk show. Show off your glitz and glamour!",
    image: "/spooky.png?height=300&width=400",
  },
  "Adaptunes": {
    writeup:
      "Ever-switching steps, but always on beat. Show off your improv game in this ultimate battle of spontaneity.",
    image: "/spooky.png?height=300&width=400",
  },
  "Euphony: Western Acoustics Band": {
    writeup:
      "No amps, connectors, or pedals here. Just you and your instrument, to enthrall your audience.",
    image: "/spooky.png?height=300&width=400",
  },
  // Sports events with engaging descriptions
  "Basketball (Men)": {
    writeup: "Get ready for some serious hoops! Fast breaks, slam dunks, and fierce competition make this a can’t-miss event.",
    image: "/spooky.png?height=300&width=400",
  },
  "Basketball (Women)": {
    writeup: "Watch the intensity and skill as teams battle it out on the court, fighting for every point.",
    image: "/spooky.png?height=300&width=400",
  },
  "Cricket": {
    writeup: "From blistering sixes to precise bowling, witness the excitement and strategy of this cricket tournament unfold.",
    image: "/spooky.png?height=300&width=400",
  },
  "Football": {
    writeup: "Feel the energy and skill as teams compete in this thrilling game of football, where every goal brings the crowd to its feet!",
    image: "/spooky.png?height=300&width=400",
  },
  "Futsal": {
    writeup: "Fast-paced, skill-packed, and loaded with quick goals! Futsal brings the excitement of football indoors with a twist.",
    image: "/spooky.png?height=300&width=400",
  },
  "Hockey": {
    writeup: "Speed, precision, and teamwork come together in this intense battle on the hockey field.",
    image: "/spooky.png?height=300&width=400",
  },
  "Throwball": {
    writeup: "An exciting mix of power and precision! Watch teams compete in this high-energy game of throwball.",
    image: "/spooky.png?height=300&width=400",
  },
  "Volleyball": {
    writeup: "Bump, set, spike! Join us as teams serve up intense rallies and dramatic saves in this volleyball showdown.",
    image: "/spooky.png?height=300&width=400",
  },
  "Table Tennis": {
    writeup: "Experience the lightning-fast reflexes and incredible control as players compete in our table tennis tournament.",
    image: "/spooky.png?height=300&width=400",
  },
  "Tennis": {
    writeup: "Forehands, backhands, and powerful serves—join us for thrilling rallies and fierce competition on the tennis court.",
    image: "/spooky.png?height=300&width=400",
  },
  "Badminton": {
    writeup: "Swift footwork and precise shots define this exciting game of badminton. Get ready for a match filled with energy!",
    image: "/spooky.png?height=300&width=400",
  },
  "Chess": {
    writeup: "A battle of minds! Every move counts in this game of strategy and skill as players go head-to-head on the chessboard.",
    image: "/spooky.png?height=300&width=400",
  },
  "Carrom": {
    writeup: "Aim, flick, and pocket! This classic game of carrom tests your accuracy and control in every round.",
    image: "/spooky.png?height=300&width=400",
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
