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
      "Digital Art",
    ],
    Dance: [
      "Theme Group Dance",
      "Non-theme Group Dance: Western",
      "Non-theme Group Dance: Eastern",
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
    image: "/Formal_Debate.webp?height=300&width=400",
  },
  "TJ Jaishankar Memorial Quiz": {
    writeup:
      "Test your knowledge and quick thinking in our TJ Jaishankar Memorial Quiz.",
    image: "/Major_Quiz.webp?height=300&width=400",
  },
  "Not a Mediquiz": {
    writeup:
      "A quiz that blends the basics of medicine with general knowledge. Think you've got what it takes to tackle both worlds?",
    image: "/Not_A_Mediquiz.webp?height=300&width=400",
  },
  "JAM": {
    writeup:
      "Think on your feet and speak your mind in our Just A Minute competition.",
    image: "/JAM.webp?height=300&width=400",
  },
  "Turncoat": {
    writeup:
      "Switch sides at a moment’s notice in this intense solo debating event. Can you argue against yourself convincingly?",
    image: "/turncoat.webp?height=300&width=400",
  },
  "Shipwreck": {
    writeup:
      "Convince others to save you from a sinking ship as you role-play iconic characters in this imaginative event.",
    image: "/shipwreck.webp?height=300&width=400",
  },
  "Dumb Charades": {
    writeup:
      "Communicate without words in this fun and challenging game that will test your acting skills.",
    image: "/Dumb_Charades.webp?height=300&width=400",
  },
  "Pot Pourri": {
    writeup:
      "A dynamic mix of literary challenges that will push your creativity and wit to new levels.",
    image: "/Potpourri.webp?height=300&width=400",
  },
  "Sports Quiz": {
    writeup:
      "For sports buffs: test your knowledge of games, players, and records in this high-energy quiz.",
    image: "/sports_quiz.webp?height=300&width=400",
  },
  "Fandom Quiz": {
    writeup:
      "Dive into the world of fandoms and see how well you know popular universes and characters.",
    image: "/fandom_quiz.webp?height=300&width=400",
  },
  "Cryptic Crossword": {
    writeup:
      "Solve cryptic clues and fill in the grid in this brain-teasing crossword challenge.",
    image: "/cryptic_crossword.webp?height=300&width=400",
  },
  "Scrabble": {
    writeup:
      "Compete with words in this classic game of strategy and vocabulary.",
    image: "/scrabble.webp?height=300&width=400",
  },
  "Malarkey": {
    writeup:
      "Bluff, fib, and talk your way to victory in this game of deceit and humor.",
    image: "/malarkey.webp?height=300&width=400",
  },
  "Flash Fiction": {
    writeup:
      "Craft a story in a flash. Put your creativity and brevity to the test in this fast-paced writing event.",
    image: "/flash_fiction.webp?height=300&width=400",
  },
  "Creative Writing": {
    writeup:
      "Let your imagination soar as you weave words into stories, poems, or essays in this creative writing competition.",
    image: "/creative_writing.webp?height=300&width=400",
  },
  "Poetry Writing": {
    writeup:
      "Express yourself through verse in this competition for budding poets.",
    image: "/poetry.webp?height=300&width=400",
  },
  "6 Word Stories": {
    writeup:
      "Challenge yourself to tell a complete story in just six words. Can you be concise and compelling?",
    image: "/flash_fiction.webp?height=300&width=400",
  },
  "Solo Singing: Eastern": {
    writeup:
      "Display your mellifluous voice to enchant the crowd, lest they mistake your sonorous singing for that of a Koyal's call.",
    image: "/solosinging_eastern.webp?height=300&width=400",
  },
  "Alaap: Indian Band": {
    writeup:
      "Showcase the rich tapestry of Indian music, from ghazals of the North to Carnatic melodies of the South.",
    image: "/alaap.webp?height=300&width=400",
  },
  "Tinnitus: Western Band": {
    writeup:
      "Join us for an eclectic experience with high-energy rock anthems and powerful riffs from bands across the nation.",
    image: "/tinnitus.webp?height=300&width=400",
  },
  "Dernier Cri: Fashion Show": {
    writeup:
      "Poise, power, and perfection on display in Spandan’s ultimate ramp walk show. Show off your glitz and glamour!",
    image: "/dernier_cri.webp?height=300&width=400",
  },
  "Adaptunes": {
    writeup:
      "Ever-switching steps, but always on beat. Show off your improv game in this ultimate battle of spontaneity.",
    image: "/adaptunes.webp?height=300&width=400",
  },
  "Euphony: Western Acoustics Band": {
    writeup:
      "No amps, connectors, or pedals here. Just you and your instrument, to enthrall your audience.",
    image: "/euphony.webp?height=300&width=400",
  },
  "Aquatics": {
    writeup:
      "Dive into the pool for an exciting competition of speed, skill, and endurance in our aquatics events.",
    image: "/Aquatics.webp?height=300&width=400",
  },
  "Athletics": {
    writeup:
      "Push your limits and showcase your speed, strength, and endurance across various track and field events.",
    image: "/Athletics.webp?height=300&width=400",
  },
  "Dance Battle": {
    writeup:
      "Face off in an electrifying dance showdown. Bring your best moves and battle it out on the dance floor.",
    image: "/dance_battle.webp?height=300&width=400",
  },
  "Digital Art": {
    writeup:
      "Unleash your creativity in the digital realm and craft stunning artworks that push artistic boundaries.",
    image: "/digital_art.webp?height=300&width=400",
  },
  "Duet Dance": {
    writeup:
      "Dance as a duo and captivate the audience with synchronized moves and seamless teamwork.",
    image: "/duet_dance.webp?height=300&width=400",
  },
  "Face Painting": {
    writeup:
      "Transform faces into colorful canvases with intricate designs and vivid creativity.",
    image: "/face_painting.webp?height=300&width=400",
  },
  "Group Dance": {
    writeup:
      "Showcase teamwork and creativity as your group takes the stage with a mesmerizing dance performance.",
    image: "/group_dance.webp?height=300&width=400",
  },
  "Mehendi": {
    writeup:
      "Express tradition and beauty with intricate mehendi designs that captivate the eye.",
    image: "/mehendi.webp?height=300&width=400",
  },
  "Mime": {
    writeup:
      "Communicate without words in this artful performance that relies solely on gestures and expressions.",
    image: "/mime.webp?height=300&width=400",
  },
  "Non-theme Group Dance: Eastern": {
    writeup:
      "Celebrate Eastern dance styles with a group performance that’s all about rhythm and grace.",
    image: "/nontheme_group_dance_eastern.webp?height=300&width=400",
  },
  "Non-theme Group Dance: Western": {
    writeup:
      "Take the stage with a powerful Western dance routine that brings energy and style to the forefront.",
    image: "/nontheme_group_dance_western.webp?height=300&width=400",
  },
  "Origami": {
    writeup:
      "Show off your skills in the delicate art of paper folding and create beautiful origami designs.",
    image: "/origami.webp?height=300&width=400",
  },
  "Painting": {
    writeup:
      "Let your creativity flow as you bring your imagination to life on canvas.",
    image: "/painting.webp?height=300&width=400",
  },
  "Play": {
    writeup:
      "Step into a world of drama and storytelling as actors bring characters and scenes to life.",
    image: "/play.webp?height=300&width=400",
  },
  "Pot Painting": {
    writeup:
      "Transform simple pots into artistic creations with paint and imagination.",
    image: "/pot_painting.webp?height=300&width=400",
  },
  "Sketching": {
    writeup:
      "Capture the essence of your subject with just a pencil and paper in this sketching competition.",
    image: "/sketch.webp?height=300&width=400",
  },
    "Solo Dance: Western": {
    writeup:
      "Showcase your talent as you take the stage solo with a powerful Western dance performance.",
    image: "/solodance_western.webp?height=300&width=400",
  },
  "Solo Instrumental": {
    writeup:
      "Captivate the audience with your musical skill in this solo instrumental performance.",
    image: "/solo_instrumental.webp?height=300&width=400",
  },
  "Solo Singing: Western": {
    writeup:
      "Enchant the crowd with your voice as you perform a soulful Western song.",
    image: "/solosinging_western.webp?height=300&width=400",
  },
  "Theme Group Dance": {
    writeup:
      "Express a story or theme through dance in this dynamic group performance.",
    image: "/theme_group_dance.webp?height=300&width=400",
  },
  "T-shirt Painting": {
    writeup:
      "Design and paint a t-shirt with your creative ideas and artistic flair.",
    image: "/tshirt_painting.webp?height=300&width=400",
  },
  "Variety": {
    writeup:
      "Unleash your creativity in this free-form event where anything goes! Show off your unique talents.",
    image: "/variety.webp?height=300&width=400",
  },
"Collage": {
    writeup:
      "Unleash your creativity and bring together a mix of materials to create a visually stunning collage.",
    image: "/collage.webp?height=300&width=400",
  },
"Skit": {
    writeup:
      "Take the stage with your team in a short, engaging performance that combines humor, drama, and creativity.",
    image: "/skit.webp?height=300&width=400", 
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
