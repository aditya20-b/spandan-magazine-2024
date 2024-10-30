// app/api/results/route.ts
import { NextRequest } from 'next/server'
import { getMatchResults, updateMatchResults, deleteMatchResults } from '@/lib/db'
import { successResponse, errorResponse } from '@/lib/api-utils'
import { z } from 'zod'

const matchResultSchema = z.object({
  day: z.string().min(1),
  sport: z.string().min(1),
  team1: z.string().min(1),
  team2: z.string().min(1),
  score1: z.number().int().nonnegative(),
  score2: z.number().int().nonnegative(),
  _delete: z.boolean().optional()
})

const matchResultsArraySchema = z.array(matchResultSchema)

export async function GET() {
  try {
    const results = await getMatchResults()
    return successResponse(results)
  } catch (error) {
    console.error('Error fetching match results:', error)
    return errorResponse('Failed to fetch match results', 500)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const validationResult = matchResultsArraySchema.safeParse(data)
    if (!validationResult.success) {
      return errorResponse('Invalid data format', 400)
    }

    const matchResults = validationResult.data.filter(result => !result._delete)
    const resultsToDelete = validationResult.data.filter(result => result._delete)

    await updateMatchResults(matchResults)
    await deleteMatchResults(resultsToDelete)

    return successResponse({ message: 'Match results updated successfully' })
  } catch (error) {
    console.error('Error updating match results:', error)
    return errorResponse('Failed to update match results', 500)
  }
}