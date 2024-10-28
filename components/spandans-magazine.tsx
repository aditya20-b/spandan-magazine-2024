'use client'

import '@/components/spandans-magazie.css'
import { useState, useEffect } from 'react'
import { Moon, Menu, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const categories = ['Literary and Debate', 'Culturals', 'Sports', 'Proshows']

type EventCategories = 'Literary and Debate' | 'Culturals' | 'Sports' | 'Proshows';

const events: Record<EventCategories, Record<string, string[]>> = {
  'Literary and Debate': {
    'Major Events': ['Formal Debate', 'TJ Jaishankar Memorial Quiz', 'Not a Mediquiz', 'JAM'],
    'Minor Events': ['Turncoat', 'Shipwreck', 'Dumb Charades', 'Pot Pourri', 'Sports Quiz', 'Fandom Quiz', 'Cryptic Crossword', 'Scrabble', 'Malarkey'],
    'Online Events': ['Flash Fiction', 'Creative Writing', 'Poetry Writing', '6 Word Stories'],
  },
  'Culturals': {
    'Fine Arts': ['Painting', 'T-shirt Painting', 'Pot Painting', 'Sketching', 'Face Painting', 'Mehendi', 'Collage', 'Origami', 'Online Digital Art'],
    'Dance': ['Theme Group Dance', 'Non-theme Group Dance', 'Solo Dance', 'Duet Dance', 'Adaptunes', 'Group Dance', 'Dance Battle'],
    'Music': ['Solo Singing: Eastern', 'Solo Singing: Western', 'Solo Instrumental', 'Alaap: Indian Band', 'Tinnitus: Western Band', 'Euphony: Western Acoustics Band'],
    'Dramatics': ['Skit', 'Play', 'Adzap', 'Variety', 'Mime'],
    'Fashion': ['Dernier Cri: Fashion Show'],
  },
  'Sports': {
    'Team Sports': ['Basketball', 'Cricket', 'Football', 'Futsal', 'Hockey', 'Throwball', 'Volleyball'],
    'Racquet Sports': ['Table Tennis', 'Tennis', 'Badminton'],
    'Athletics': [],
    'Aquatics': [],
    'Board Games': ['Chess', 'Carrom'],
  },
  'Proshows': {
    'Events': ['Coming Soon'],
  },
}

const sportsWithScores = ['Basketball', 'Cricket', 'Football', 'Futsal']

type ScoreData = {
  [key: string]: {
    teamName: string
    wins: number
    losses: number
    points: number
  }[]
}
export function SpandansMagazineComponent() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategories>(categories[0] as EventCategories)
  const [selectedSubCategory, setSelectedSubCategory] = useState(Object.keys(events[categories[0] as EventCategories])[0])
  // const [selectedCategory, setSelectedCategory] = useState(categories[0])
  // const [selectedSubCategory, setSelectedSubCategory] = useState(Object.keys(events[selectedCategory])[0])
  const [selectedEvent, setSelectedEvent] = useState('')
  const [scoreData, setScoreData] = useState<ScoreData>({})
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchScoreData = async () => {
      setIsLoading(true)
      try {
        const mockData: ScoreData = {
          Basketball: [
            { teamName: 'Team A', wins: 3, losses: 1, points: 7 },
            { teamName: 'Team B', wins: 2, losses: 2, points: 6 },
            { teamName: 'Team C', wins: 1, losses: 3, points: 5 },
          ],
          Cricket: [
            { teamName: 'Team X', wins: 4, losses: 0, points: 8 },
            { teamName: 'Team Y', wins: 2, losses: 2, points: 6 },
            { teamName: 'Team Z', wins: 0, losses: 4, points: 4 },
          ],
          Football: [
            { teamName: 'Team 1', wins: 3, losses: 1, points: 9 },
            { teamName: 'Team 2', wins: 2, losses: 2, points: 6 },
            { teamName: 'Team 3', wins: 1, losses: 3, points: 3 },
          ],
          Futsal: [
            { teamName: 'Team Alpha', wins: 2, losses: 0, points: 6 },
            { teamName: 'Team Beta', wins: 1, losses: 1, points: 3 },
            { teamName: 'Team Gamma', wins: 0, losses: 2, points: 0 },
          ],
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
        setScoreData(mockData)
      } catch (error) {
        console.error('Error fetching score data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchScoreData()
  }, [])

  useEffect(() => {
    const subCategories = Object.keys(events[selectedCategory])
    setSelectedSubCategory(subCategories[0])
    setSelectedEvent('')
  }, [selectedCategory])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category as EventCategories)
  }

  const renderEventContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )
    }

    if (sportsWithScores.includes(selectedEvent)) {
      const eventScores = scoreData[selectedEvent]
      if (!eventScores || eventScores.length === 0) {
        return <p>No scores available for this event.</p>
      }

      return (
        <Table>
          <TableCaption>{selectedEvent} Scores</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Team Name</TableHead>
              <TableHead>Wins</TableHead>
              <TableHead>Losses</TableHead>
              <TableHead>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventScores.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{team.teamName}</TableCell>
                <TableCell>{team.wins}</TableCell>
                <TableCell>{team.losses}</TableCell>
                <TableCell>{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    } else {
      return (
        <div>
          <h3 className="text-xl font-semibold mb-2">{selectedEvent}</h3>
          <p>Event details will be updated here with information about the winners and event description.</p>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-[#300000] text-red-50 flex flex-col">
      <div 
        className="fixed inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}
      />

      <div className="relative z-10 flex-grow flex flex-col">
        <header className="bg-black/50 p-4">
          <h1 className="text-4xl font-bold text-center mb-4">Spandans Magazine</h1>
          <nav className="flex justify-between items-center">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="default" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#300000] text-red-50">
                <SheetHeader>
                  <SheetTitle className="text-black">Menu</SheetTitle>
                  <SheetDescription className="text-red-200">
                    Navigate through different sections of Spandans Magazine
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        handleCategoryChange(category)
                        setIsSidebarOpen(false)
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <div className="hidden md:flex space-x-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "secondary" : "ghost"}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="ghost" size="icon">
              <Moon className="h-6 w-6" />
            </Button>
          </nav>
        </header>

        <main className="flex-grow p-6">
          <div className="max-w-6xl mx-auto bg-black/70 rounded-lg p-6">
            <div className="mb-6 flex flex-wrap gap-2">
              {Object.keys(events[selectedCategory]).map((subCategory) => (
                <Button
                  key={subCategory}
                  variant={selectedSubCategory === subCategory ? "secondary" : "outline"}
                  onClick={() => setSelectedSubCategory(subCategory)}
                >
                  {subCategory}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events[selectedCategory][selectedSubCategory]?.map((event) => (
                <Button
                  key={event}
                  variant={selectedEvent === event ? "secondary" : "outline"}
                  className="h-auto py-4 text-left justify-start"
                  onClick={() => setSelectedEvent(event)}
                >
                  {event}
                </Button>
              )) || <p>No events available for this category.</p>}
            </div>

            {selectedEvent && (
              <div className="mt-8 p-6 bg-red-900/50 rounded-lg">
                {renderEventContent()}
              </div>
            )}
          </div>
        </main>

        <footer className="bg-black/50 p-4 text-center">
          <p>&copy; 2024 Spandans Magazine. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}