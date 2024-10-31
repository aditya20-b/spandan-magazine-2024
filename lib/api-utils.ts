import { NextResponse } from 'next/server'

export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
}

export function successResponse<T>(data: T): NextResponse<ApiResponse<T>> {
  return NextResponse.json({ success: true, data })
}

export function errorResponse(message: string, status: number = 400): NextResponse<ApiResponse<null>> {
  return NextResponse.json({ success: false, error: message }, { status })
}