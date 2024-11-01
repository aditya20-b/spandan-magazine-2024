import { NextRequest } from 'next/server'
import { getStandings, updateStandings, deleteStandings } from '@/lib/db'
import { successResponse, errorResponse } from '@/lib/api-utils'
import { z } from 'zod'

const standingSchema = z.object({
  id: z.union([z.string(), z.number()]),
  sport: z.string().min(1),
  teamName: z.string().min(1),
  wins: z.number().int().nonnegative(),
  losses: z.number().int().nonnegative(),
  points: z.number().int().nonnegative(),
  _delete: z.boolean().optional()
})

const standingsArraySchema = z.array(standingSchema)

export async function GET() {
  try {
    const standings = await getStandings()
    return successResponse(standings)
  } catch (error) {
    console.error('Error fetching standings:', error)
    return errorResponse('Failed to fetch standings', 500)
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const validationResult = standingsArraySchema.safeParse(data)
    if (!validationResult.success) {
      console.log('Invalid data format:', validationResult.error)
      return errorResponse('Invalid data format', 400)
    }

    const standings = validationResult.data.filter(standing => !standing._delete)
    const standingsToDelete = validationResult.data.filter(standing => standing._delete)

    await updateStandings(standings)
    await deleteStandings(standingsToDelete)

    return successResponse({ message: 'Standings updated successfully' })
  } catch (error) {
    console.error('Error updating standings:', error)
    return errorResponse('Failed to update standings', 500)
  }
}