import { SportCategory, EventCategories, EventDetails, Positions } from "@/app/types";

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
    image: "/Formal_Debate.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "Manas + Aashish",
        college: "",
      },
      {
        position: Positions.SECOND,
        teamName: "The Delhi Debaters",
        college: "IIT Delhi",
      },
      {
        position: Positions.THIRD,
        teamName: "The Madras Mooters",
        college: "IIT Madras",
      },
      {
        position: Positions.CONSOLATION,
        teamName: "The KGP Orators",
        college: "IIT Kharagpur",
      }
    ]
  },
  "TJ Jaishankar Memorial Quiz": {
    writeup:
      "Test your knowledge and quick thinking in our TJ Jaishankar Memorial Quiz.",
    image: "/Major_Quiz.webp",
  },
  "Not a Mediquiz": {
    writeup:
      "A quiz that blends the basics of medicine with general knowledge. Think you've got what it takes to tackle both worlds?",
    image: "/Not_A_Mediquiz.webp",
  },
  "JAM": {
    writeup:
      "Think on your feet and speak your mind in our Just A Minute competition.",
    image: "/JAM.webp",
  },
  "Turncoat": {
    writeup:
      "Switch sides at a moment’s notice in this intense solo debating event. Can you argue against yourself convincingly?",
    image: "/turncoat.webp",
  },
  "Shipwreck": {
    writeup:
      "Convince others to save you from a sinking ship as you role-play iconic characters in this imaginative event.",
    image: "/shipwreck.webp",
  },
  "Dumb Charades": {
    writeup:
      "Communicate without words in this fun and challenging game that will test your acting skills.",
    image: "/Dumb_Charades.webp",
  },
  "Pot Pourri": {
    writeup:
      "A dynamic mix of literary challenges that will push your creativity and wit to new levels.",
    image: "/Potpourri.webp",
  },
  "Sports Quiz": {
    writeup:
      "For sports buffs: test your knowledge of games, players, and records in this high-energy quiz.",
    image: "/sports_quiz.webp",
  },
  "Fandom Quiz": {
    writeup:
      "Dive into the world of fandoms and see how well you know popular universes and characters.",
    image: "/fandom_quiz.webp",
  },
  "Cryptic Crossword": {
    writeup:
      "Solve cryptic clues and fill in the grid in this brain-teasing crossword challenge.",
    image: "/cryptic_crossword.webp",
  },
  "Scrabble": {
    writeup:
      "Compete with words in this classic game of strategy and vocabulary.",
    image: "/scrabble.webp",
  },
  "Malarkey": {
    writeup:
      "Bluff, fib, and talk your way to victory in this game of deceit and humor.",
    image: "/malarkey.webp",
  },
  "Flash Fiction": {
    writeup:
      "Craft a story in a flash. Put your creativity and brevity to the test in this fast-paced writing event.",
    image: "/flash_fiction.webp",
  },
  "Creative Writing": {
    writeup:
      "Let your imagination soar as you weave words into stories, poems, or essays in this creative writing competition.",
    image: "/creative_writing.webp",
  },
  "Poetry Writing": {
    writeup:
      "Express yourself through verse in this competition for budding poets.",
    image: "/poetry.webp",
  },
  "6 Word Stories": {
    writeup:
      "Challenge yourself to tell a complete story in just six words. Can you be concise and compelling?",
    image: "/flash_fiction.webp",
  },
  "Solo Singing: Eastern": {
    writeup:
      "Display your mellifluous voice to enchant the crowd, lest they mistake your sonorous singing for that of a Koyal's call.",
    image: "/solosinging_eastern.webp",
  },
  "Alaap: Indian Band": {
    writeup:
      "Showcase the rich tapestry of Indian music, from ghazals of the North to Carnatic melodies of the South.",
    image: "/alaap.webp",
     results: [
      {
        position: Positions.FIRST,
        teamName: "SMVEX",
        college: "",
      },
      {
        position: Positions.SECOND,
        teamName: "PIMS",
        college: "",
      },
      {
        position: Positions.THIRD,
        teamName: "JIPMER",
        college: "",
      },
        ]
  },
  "Tinnitus: Western Band": {
    writeup:
      "Join us for an eclectic experience with high-energy rock anthems and powerful riffs from bands across the nation.",
    image: "/tinnitus.webp",
  },
  "Dernier Cri: Fashion Show": {
    writeup:
      "Poise, power, and perfection on display in Spandan’s ultimate ramp walk show. Show off your glitz and glamour!",
    image: "/dernier_cri.webp",
  },
  "Adaptunes": {
    writeup:
      "Ever-switching steps, but always on beat. Show off your improv game in this ultimate battle of spontaneity.",
    image: "/adaptunes.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "Anurag",
        college: "Satyabhama University",
      },
      {
        position: Positions.SECOND,
        teamName: "Sahana",
        college: "Krishnagiri Medical College",
      },
      {
        position: Positions.THIRD,
        teamName: "Hithapradha",
        college: "PSGIMSR",
      },
        ]
  },
  "Euphony: Western Acoustics Band": {
    writeup:
      "No amps, connectors, or pedals here. Just you and your instrument, to enthrall your audience.",
    image: "/euphony.webp",
  },
  "Basketball (Men)": {
    writeup: "Get ready for some serious hoops! Fast breaks, slam dunks, and fierce competition make this a can’t-miss event.",
    image: "/Basketball.webp",
  },
  "Basketball (Women)": {
    writeup: "Watch the intensity and skill as teams battle it out on the court, fighting for every point.",
    image: "/Basketball.webp",
  },
  "Cricket": {
    writeup: "From blistering sixes to precise bowling, witness the excitement and strategy of this cricket tournament unfold.",
    image: "/Cricket.webp",
  },
  "Football": {
    writeup: "Feel the energy and skill as teams compete in this thrilling game of football, where every goal brings the crowd to its feet!",
    image: "/Football.webp",
  },
  "Futsal (Men)": {
    writeup: "Fast-paced, skill-packed, and loaded with quick goals! Futsal brings the excitement of football indoors with a twist.",
    image: "/futsal.webp",
  },
  "Hockey (Men)": {
    writeup: "Speed, precision, and teamwork come together in this intense battle on the hockey field.",
    image: "/hockey.webp",
  },
  "Futsal (Women)": {
    writeup: "Fast-paced, skill-packed, and loaded with quick goals! Futsal brings the excitement of football indoors with a twist.",
    image: "/futsal.webp",
  },
  "Hockey (Women)": {
    writeup: "Speed, precision, and teamwork come together in this intense battle on the hockey field.",
    image: "/hockey.webp",
  },
  "Volleyball (Men)": {
    writeup: "Bump, set, spike! Join us as teams serve up intense rallies and dramatic saves in this volleyball showdown.",
    image: "/volleyball.webp",
  },
  "Volleyball (Women)": {
    writeup: "Bump, set, spike! Join us as teams serve up intense rallies and dramatic saves in this volleyball showdown.",
    image: "/volleyball.webp",
  },
  "Throwball": {
    writeup: "An exciting mix of power and precision! Watch teams compete in this high-energy game of throwball.",
    image: "/throwball.webp",
  },
  "Table Tennis (Men)": {
    writeup: "Experience the lightning-fast reflexes and incredible control as players compete in our table tennis tournament.",
    image: "/table_tennis.webp",
     results: [
      {
        position: Positions.FIRST,
        teamName: "Singles",
        college: "Charen M (AVMC)",
      },
      {
        position: Positions.SECOND,
        teamName: "Singles",
        college: "Vijayaganapathy (IGMC)",
      },
     {
        position: Positions.FIRST,
        teamName: "Team",
        college: "Vijayaganapathy, Sharan, Poovanban (IGMC)",
      },
      {
        position: Positions.SECOND,
        teamName: "Team",
        college: "Solomon Davis, Charen (AVMC)",
      },
        ]
  },
  "Table Tennis (Women)": {
    writeup: "Experience the lightning-fast reflexes and incredible control as players compete in our table tennis tournament.",
    image: "/table_tennis.webp",
         results: [
      {
        position: Positions.FIRST,
        teamName: "Singles",
        college: "Shakti (PSG)",
      },
      {
        position: Positions.SECOND,
        teamName: "Singles",
        college: "Deepika (Sri Venkateswara)",
      },
     {
        position: Positions.FIRST,
        teamName: "Team",
        college: "Shakthi, Nandini (PSG)",
      },
      {
        position: Positions.SECOND,
        teamName: "Team",
        college: "Deepika, Balamaheshwari (Sri Venkateswara)",
      },
        ]
  },
  "Tennis": {
    writeup: "Forehands, backhands, and powerful serves—join us for thrilling rallies and fierce competition on the tennis court.",
    image: "/Tennis.webp",
  },
  "Badminton (Men)": {
    writeup: "Swift footwork and precise shots define this exciting game of badminton. Get ready for a match filled with energy!",
    image: "/Badminton.webp",
         results: [
     {
        position: Positions.FIRST,
        teamName: "Team",
        college: "JIPMER (Sriram, Mukeesh, Rohit) ",
      },
      {
        position: Positions.SECOND,
        teamName: "Team",
        college: "SVMC (Niranjan, Benjamin )",
      },
        ]
  },
  "Badminton (Women)": {
    writeup: "Swift footwork and precise shots define this exciting game of badminton. Get ready for a match filled with energy!",
    image: "/Badminton.webp",
             results: [
     {
        position: Positions.FIRST,
        teamName: "Team",
        college: "JIPMER (Gayathri, Nethra) ",
      },
      {
        position: Positions.SECOND,
        teamName: "Team",
        college: "CMC (Hannah, Divya Darshini)",
      },
        ]
  },
  "Chess": {
    writeup: "A battle of minds! Every move counts in this game of strategy and skill as players go head-to-head on the chessboard.",
    image: "/chess.png",
    results: [
      {
        position: Positions.FIRST,
        teamName: "Rapid",
        college: "Vignesh Kasi",
      },
      {
        position: Positions.SECOND,
        teamName: "Rapid",
        college: "Akhilesh",
      },
      {
        position: Positions.THIRD,
        teamName: "Rapid",
        college: "Jeevan",
      },
            {
        position: Positions.FIRST,
        teamName: "Blitz",
        college: "Akhilesh",
      },
      {
        position: Positions.SECOND,
        teamName: "Blitz",
        college: "Aswin",
      },
      {
        position: Positions.THIRD,
        teamName: "Blitz",
        college: "Yaswanthan",
      },
    ]
  },
  "Carrom": {
    writeup: "Aim, flick, and pocket! This classic game of carrom tests your accuracy and control in every round.",
    image: "/Carrom.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "Singles",
        college: "Shiv Perumal, JIPMER",
      },
      {
        position: Positions.SECOND,
        teamName: "Singles",
        college: "Lokesh, GMC Krishnagiri",
      },
      {
        position: Positions.THIRD,
        teamName: "Singles",
        college: "Kunalan, Sri Venkateswara University",
      },
      {
        position: Positions.FIRST,
        teamName: "Doubles",
        college: "Fazil and Elanthamizhan, GVMC",
      },
      {
        position: Positions.SECOND,
        teamName: "Doubles",
        college: "Shiv Perumal and Siva Ganesh, JIPMER",
      }
      ]
  },
  "Aquatics (Men)": {
    writeup:
      "Dive into the pool for an exciting competition of speed, skill, and endurance in our aquatics events.",
    image: "/Aquatics.webp",
      results: [
      {
        position: Positions.FIRST,
        teamName: "Backstroke 50M",
        college: "Akash Navin B",
      },
      {
        position: Positions.SECOND,
        teamName: "Backstroke 50M",
        college: "Taksh",
      },
      {
        position: Positions.THIRD,
        teamName: "Backstroke 50M",
        college: "R Darshan Enoch",
      },
      {
        position: Positions.FIRST,
        teamName: "Breaststroke 50M",
        college: "Akash Navin B",
      },
      {
        position: Positions.SECOND,
        teamName: "Breaststroke 50M",
        college: "Advait",
      },
      {
        position: Positions.THIRD,
        teamName: "Breaststroke 50M",
        college: "Taksh",
      },{
        position: Positions.FIRST,
        teamName: "Freestyle 50M",
        college: "Akash Navin B",
      },
      {
        position: Positions.SECOND,
        teamName: "Freestyle 50M",
        college: "Advait",
      },
      {
        position: Positions.THIRD,
        teamName: "Freestyle 50M",
        college: "Deebu Chena R F",
      },
      {
        position: Positions.FIRST,
        teamName: "Freestyle 4*50m Relay",
        college: "KIMS Karad - Advait, Vibhu Patil, Viswajeet, Kunal",
      },
      {
        position: Positions.SECOND,
        teamName: "Freestyle 4*50m Relay",
        college: "SDUMC - Taksh, Bhavya, Harsh, Ajit",
      },
      {
        position: Positions.THIRD,
        teamName: "Freestyle 4*50m Relay",
        college: "JIPMER A - Wafiq, Manoj, Rohen, Sanjay",
      },
      ]
  },
  "Athletics (Men)": {
    writeup:
      "Push your limits and showcase your speed, strength, and endurance across various track and field events.",
    image: "/Athletics.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "100M",
        college: "Hari Kisan",
      },
      {
        position: Positions.SECOND,
        teamName: "100M",
        college: "Sabeesh Arun",
      },
      {
        position: Positions.THIRD,
        teamName: "100M",
        college: "Suriya Prakash",
      },
      {
        position: Positions.FIRST,
        teamName: "200M",
        college: "Hari Kisan",
      },
      {
        position: Positions.SECOND,
        teamName: "200M",
        college: "Rahul Rajnesan",
      },
      {
        position: Positions.THIRD,
        teamName: "200M",
        college: "Melvin",
      },{
        position: Positions.FIRST,
        teamName: "400M",
        college: "Hari Kisan",
      },
      {
        position: Positions.SECOND,
        teamName: "400M",
        college: "Rahul Rajnesan",
      },
      {
        position: Positions.THIRD,
        teamName: "400M",
        college: "Melvin",
      },
      {
        position: Positions.FIRST,
        teamName: "1500M",
        college: "Siddharth P.S",
      },
      {
        position: Positions.SECOND,
        teamName: "1500M",
        college: "Suhas",
      },
      {
        position: Positions.THIRD,
        teamName: "1500M",
        college: "Ashmal Mirshad",
      },
      ]
  },
  "Aquatics (Women)": {
    writeup:
      "Dive into the pool for an exciting competition of speed, skill, and endurance in our aquatics events.",
    image: "/Aquatics.webp",
          results: [
      {
        position: Positions.FIRST,
        teamName: "Backstroke 50M",
        college: "Shreya Nair",
      },
      {
        position: Positions.SECOND,
        teamName: "Backstroke 50M",
        college: "Vinaya B Krishnan",
      },
      {
        position: Positions.THIRD,
        teamName: "Backstroke 50M",
        college: "Indumathi",
      },
      {
        position: Positions.FIRST,
        teamName: "Breaststroke 50M",
        college: "Geetha M",
      },
      {
        position: Positions.SECOND,
        teamName: "Breaststroke 50M",
        college: "Vinaya B Krishnan",
      },
      {
        position: Positions.THIRD,
        teamName: "Breaststroke 50M",
        college: "Shreya Nair",
      },{
        position: Positions.FIRST,
        teamName: "Freestyle 50M",
        college: "Vinaya B Krishnan",
      },
      {
        position: Positions.SECOND,
        teamName: "Freestyle 50M",
        college: "Geetha M",
      },
      {
        position: Positions.THIRD,
        teamName: "Freestyle 50M",
        college: "Indumathi",
      },
      {
        position: Positions.FIRST,
        teamName: "Freestyle 4*50m Relay",
        college: "KIMS Karad - Advait, Vibhu Patil, Viswajeet, Kunal",
      },
      {
        position: Positions.SECOND,
        teamName: "Freestyle 4*50m Relay",
        college: "SDUMC - Taksh, Bhavya, Harsh, Ajit",
      },
      {
        position: Positions.THIRD,
        teamName: "Freestyle 4*50m Relay",
        college: "JIPMER A - Wafiq, Manoj, Rohen, Sanjay",
      },
      ]
  },
  "Athletics (Women)": {
    writeup:
      "Push your limits and showcase your speed, strength, and endurance across various track and field events.",
    image: "/Athletics.webp",
        results: [
      {
        position: Positions.FIRST,
        teamName: "100M",
        college: "Nidheeksha",
      },
      {
        position: Positions.SECOND,
        teamName: "100M",
        college: "Theresa",
      },
      {
        position: Positions.THIRD,
        teamName: "100M",
        college: "Anupama",
      },
      {
        position: Positions.FIRST,
        teamName: "1500M",
        college: "Malavika",
      },
      {
        position: Positions.SECOND,
        teamName: "1500M",
        college: "Akasthiya",
      },
      {
        position: Positions.THIRD,
        teamName: "1500M",
        college: "Sneha",
      },
      ]
  },
  "Dance Battle": {
    writeup:
      "Face off in an electrifying dance showdown. Bring your best moves and battle it out on the dance floor.",
    image: "/dance_battle.webp",
  },
  "Digital Art": {
    writeup:
      "Unleash your creativity in the digital realm and craft stunning artworks that push artistic boundaries.",
    image: "/digital_art.webp",
  },
  "Duet Dance": {
    writeup:
      "Dance as a duo and captivate the audience with synchronized moves and seamless teamwork.",
    image: "/duet_dance.webp",results: [
      {
        position: Positions.FIRST,
        teamName: "Duet Dance Eastern",
        college: "Gayathri and Sejal, JIPMER",
      },
      {
        position: Positions.SECOND,
        teamName: "Duet Dance Eastern",
        college: "Gopika and Malavika, JIPMER",
      },
      {
        position: Positions.FIRST,
        teamName: "Duet Dance Western",
        college: "Tarun and Durganandini, Chengalpattu Medical College",
      },
      {
        position: Positions.SECOND,
        teamName: "Duet Dance Western",
        college: "Rupadarshini and Dhanalakshmi, Krishnagiri Medical college",
      }
    ]
  },
  "Face Painting": {
    writeup:
      "Transform faces into colorful canvases with intricate designs and vivid creativity.",
    image: "/face_painting.webp",
  },
  "Group Dance": {
    writeup:
      "Showcase teamwork and creativity as your group takes the stage with a mesmerizing dance performance.",
    image: "/group_dance.webp",
  },
  "Mehendi": {
    writeup:
      "Express tradition and beauty with intricate mehendi designs that captivate the eye.",
    image: "/mehendi.webp",
  },
  "Mime": {
    writeup:
      "Communicate without words in this artful performance that relies solely on gestures and expressions.",
    image: "/mime.webp",
  },
  "Non-theme Group Dance: Eastern": {
    writeup:
      "Celebrate Eastern dance styles with a group performance that’s all about rhythm and grace.",
    image: "/nontheme_group_dance_eastern.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "St. John's Medical College",
        college: "",
      }
    ]
  },
  "Non-theme Group Dance: Western": {
    writeup:
      "Take the stage with a powerful Western dance routine that brings energy and style to the forefront.",
    image: "/nontheme_group_dance_western.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "AIIMS Bhubaneswar and JIPMER",
        college: "",
      }
    ]
  },
  "Origami": {
    writeup:
      "Show off your skills in the delicate art of paper folding and create beautiful origami designs.",
    image: "/origami.webp",
  },
  "Painting": {
    writeup:
      "Let your creativity flow as you bring your imagination to life on canvas.",
    image: "/painting.webp",
  },
  "Play": {
    writeup:
      "Step into a world of drama and storytelling as actors bring characters and scenes to life.",
    image: "/play.webp",
  },
  "Pot Painting": {
    writeup:
      "Transform simple pots into artistic creations with paint and imagination.",
    image: "/pot_painting.webp",
  },
  "Sketching": {
    writeup:
      "Capture the essence of your subject with just a pencil and paper in this sketching competition.",
    image: "/sketch.webp",
  },
    "Solo Dance": {
    writeup:
      "Showcase your talent as you take the stage solo with a powerful Western dance performance.",
    image: "/solodance_western.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "Solo Dance Western",
        college: "Sumisha, IGMC",
      },
      {
        position: Positions.SECOND,
        teamName: "Solo Dance Western",
        college: "Sahana, Krishnagiri Medical College",
      },
      {
        position: Positions.THIRD,
        teamName: "Solo Dance Western",
        college: "Mehas, MGR University and Tanzeer Ahmed, MGR University",
      },
      {
        position: Positions.FIRST,
        teamName: "Solo Dance Eastern",
        college: "Reshma, JIPMER",
      },
      {
        position: Positions.SECOND,
        teamName: "Solo Dance Eastern",
        college: "Sunanda, Bharatidasan Govt College",
      },
      {
        position: Positions.THIRD,
        teamName: "Solo Dance Eastern",
        college: "Sahana, Krishnagiri Medical College",
      },
      
    ]
    
  },
  "Solo Instrumental": {
    writeup:
      "Captivate the audience with your musical skill in this solo instrumental performance.",
    image: "/solo_instrumental.webp",
  },
  "Solo Singing: Western": {
    writeup:
      "Enchant the crowd with your voice as you perform a soulful Western song.",
    image: "/solosinging_western.webp",
  },
  "Theme Group Dance": {
    writeup:
      "Express a story or theme through dance in this dynamic group performance.",
    image: "/theme_group_dance.webp",
    results: [
      {
        position: Positions.FIRST,
        teamName: "JIPMER",
        college: "",
      }
    ]
  },
  "T-shirt Painting": {
    writeup:
      "Design and paint a t-shirt with your creative ideas and artistic flair.",
    image: "/tshirt_painting.webp",
  },
  "Variety": {
    writeup:
      "Unleash your creativity in this free-form event where anything goes! Show off your unique talents.",
    image: "/variety.webp",
  },
"Collage": {
    writeup:
      "Unleash your creativity and bring together a mix of materials to create a visually stunning collage.",
    image: "/collage.webp",
  },
"Skit": {
    writeup:
      "Take the stage with your team in a short, engaging performance that combines humor, drama, and creativity.",
    image: "/skit.webp", 
  },
};
const sportCategories: Record<string, SportCategory> = {
  "Team Sports": {
    withGender: ["Futsal", "Basketball", "Hockey", "Volleyball"],
    other: ["Football", "Cricket", "Throwball"],
  },
  "Racquet Sports": {
    withGender: ["Badminton", "Table Tennis"],
    other: ["Tennis"],
  },
  "Individual Sports": {
    withGender: ["Athletics", "Aquatics"],
    other: [],
  },
  "Board Games": {
    withGender: [],
    other: ["Chess", "Carrom"],
  },
};

export { categories, days, events, backgroundImage, eventDetails, sportCategories };
