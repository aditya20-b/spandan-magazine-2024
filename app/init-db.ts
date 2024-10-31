// app/init-db.ts
import { initializeDb } from '@/lib/db'

export async function initDb() {
  await initializeDb()
  console.log('Database initialized')
}