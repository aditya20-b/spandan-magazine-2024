'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { debounce } from 'lodash'

type Standing = {
  id?: number
  sport: string
  teamName: string
  wins: number
  losses: number
  points: number
}

type MatchResult = {
  id?: string
  day: string
  sport: string
  team1: string
  team2: string
  score1: number
  score2: number
}

const sportsWithScores = ['Basketball', 'Cricket', 'Football', 'Futsal']
const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']

export default function AdminPage() {
  const [standings, setStandings] = useState<Standing[]>([])
  const [matchResults, setMatchResults] = useState<MatchResult[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSport, setSelectedSport] = useState(sportsWithScores[0])
  const [selectedDay, setSelectedDay] = useState(days[0])
  const [changedStandings, setChangedStandings] = useState<Standing[]>([])
  const [changedMatchResults, setChangedMatchResults] = useState<MatchResult[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const standingsResponse = await fetch('/api/standings')
        const standingsData = await standingsResponse.json()
        if (standingsData.success && Array.isArray(standingsData.data)) {
          setStandings(standingsData.data)
        } else {
          throw new Error(standingsData.error || 'Failed to fetch standings data')
        }

        const resultsResponse = await fetch('/api/results')
        const resultsData = await resultsResponse.json()
        if (resultsData.success && Array.isArray(resultsData.data)) {
          setMatchResults(resultsData.data)
        } else {
          throw new Error(resultsData.error || 'Failed to fetch match results data')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to fetch data. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const updateChangedStandings = useCallback(
    debounce((newStanding: Standing) => {
      setChangedStandings(prevChanged => {
        const existingIndex = prevChanged.findIndex(s => s.id === newStanding.id)
        if (existingIndex !== -1) {
          prevChanged[existingIndex] = newStanding
          return [...prevChanged]
        }
        return [...prevChanged, newStanding]
      })
    }, 500),
    []
  )

  const handleStandingUpdate = (index: number, field: string, value: string) => {
    setStandings(prevStandings => {
      const newStandings = [...prevStandings]
      newStandings[index] = { 
        ...newStandings[index], 
        [field]: field === 'teamName' || field === 'sport' ? value : parseInt(value) || 0 
      }
      updateChangedStandings(newStandings[index])
      return newStandings
    })
  }

  const updateChangedMatchResults = useCallback(
    debounce((newResult: MatchResult) => {
      setChangedMatchResults(prevChanged => {
        const existingIndex = prevChanged.findIndex(r => 
          r.id === newResult.id ||
          (r.day === newResult.day && 
          r.sport === newResult.sport && 
          r.team1 === newResult.team1 && 
          r.team2 === newResult.team2)
        )
        if (existingIndex !== -1) {
          prevChanged[existingIndex] = newResult
          return [...prevChanged]
        }
        return [...prevChanged, newResult]
      })
    }, 500),
    []
  )

  const handleMatchResultUpdate = (result: MatchResult, field: string, value: string) => {
    setMatchResults(prevResults => {
      return prevResults.map(r => {
        if (r.id === result.id) {
          const updatedResult = { 
            ...r, 
            [field]: ['team1', 'team2', 'day', 'sport'].includes(field) ? value : parseInt(value) || 0 
          }
          updateChangedMatchResults(updatedResult)
          return updatedResult
        }
        return r
      })
    })
  }

  const addNewMatch = () => {
    const newMatch: MatchResult = { 
      id: `new-${Date.now()}`,
      day: selectedDay, 
      sport: selectedSport, 
      team1: '', 
      team2: '', 
      score1: 0, 
      score2: 0 
    }
    setMatchResults(prevResults => [...prevResults, newMatch])
    setChangedMatchResults(prevChanged => [...prevChanged, newMatch])
  }

  const deleteMatch = (result: MatchResult) => {
    setMatchResults(prevResults => prevResults.filter(r => r.id !== result.id))
    setChangedMatchResults(prevChanged => [...prevChanged, { ...result, _delete: true }])
  }

  const addNewStanding = () => {
    const newStanding: Standing = { 
      id: Date.now(),
      sport: selectedSport, 
      teamName: '', 
      wins: 0, 
      losses: 0, 
      points: 0 
    }
    setStandings(prevStandings => [...prevStandings, newStanding])
    setChangedStandings(prevChanged => [...prevChanged, newStanding])
  }

  const deleteStanding = (standing: Standing) => {
    setStandings(prevStandings => prevStandings.filter(s => s.id !== standing.id))
    setChangedStandings(prevChanged => [...prevChanged, { ...standing, _delete: true }])
  }

  const handleSave = async () => {
    setIsLoading(true)
    setError(null)
    try {
      if (changedStandings.length > 0) {
        const standingsResponse = await fetch('/api/standings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(changedStandings)
        })
        const standingsData = await standingsResponse.json()
        if (!standingsData.success) {
          throw new Error(standingsData.error || 'Failed to save standings')
        }
      }

      if (changedMatchResults.length > 0) {
        const resultsResponse = await fetch('/api/results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(changedMatchResults)
        })
        const resultsData = await resultsResponse.json()
        if (!resultsData.success) {
          throw new Error(resultsData.error || 'Failed to save match results')
        }
      }

      setChangedStandings([])
      setChangedMatchResults([])
      alert('Data saved successfully!')
    } catch (error) {
      console.error('Error saving data:', error)
      setError('Failed to save data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Tabs defaultValue="standings">
        <TabsList>
          <TabsTrigger value="standings">Standings</TabsTrigger>
          <TabsTrigger value="matches">Match Results</TabsTrigger>
        </TabsList>
        <TabsContent value="standings">
          <div className="flex space-x-4 mb-4">
            <Select onValueChange={setSelectedSport} defaultValue={selectedSport}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Sport" />
              </SelectTrigger>
              <SelectContent>
                {sportsWithScores.map(sport => (
                  <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableCaption>Standings for {selectedSport}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Team Name</TableHead>
                <TableHead>Wins</TableHead>
                <TableHead>Losses</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.filter(team => team.sport === selectedSport).map((team) => (
                <TableRow key={team.id}>
                  <TableCell>
                    <Input
                      value={team.teamName}
                      onChange={(e) => handleStandingUpdate(standings.indexOf(team), 'teamName', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={team.wins}
                      onChange={(e) => handleStandingUpdate(standings.indexOf(team), 'wins', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={team.losses}
                      onChange={(e) => handleStandingUpdate(standings.indexOf(team), 'losses', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={team.points}
                      onChange={(e) => handleStandingUpdate(standings.indexOf(team), 'points', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => deleteStanding(team)} variant="destructive">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={addNewStanding} className="mt-4">
            Add New Team
          </Button>
        </TabsContent>
        <TabsContent value="matches">
          <div className="flex space-x-4 mb-4">
            <Select onValueChange={setSelectedSport} defaultValue={selectedSport}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Sport" />
              </SelectTrigger>
              <SelectContent>
                {sportsWithScores.map(sport => (
                  <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedDay} defaultValue={selectedDay}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Day" />
              </SelectTrigger>
              <SelectContent>
                {days.map(day => (
                  <SelectItem key={day} value={day}>{day}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableCaption>Match Results for {selectedSport} on {selectedDay}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Team 1</TableHead>
                <TableHead>Team 2</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matchResults.filter(result => result.day === selectedDay && result.sport === selectedSport).map((result) => (
                <TableRow key={result.id}>
                  <TableCell>
                    <Input
                      value={result.team1}
                      onChange={(e) => handleMatchResultUpdate(result, 'team1', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={result.team2}
                      onChange={(e) => handleMatchResultUpdate(result, 'team2', e.target.value)}
                    />
                  </TableCell>
                  <TableCell className="flex space-x-2">
                    <Input
                      type="number"
                      value={result.score1}
                      onChange={(e) => handleMatchResultUpdate(result, 'score1', e.target.value)}
                      className="w-20"
                    />
                    <span className="flex items-center">-</span>
                    <Input
                      type="number"
                      value={result.score2}
                      onChange={(e) => handleMatchResultUpdate(result, 'score2', e.target.value)}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => deleteMatch(result)} variant="destructive">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={addNewMatch} className="mt-4">Add New Match</Button>
        </TabsContent>
      </Tabs>
      <Button onClick={handleSave} className="mt-4">Save All Changes</Button>
    </div>
  )
}