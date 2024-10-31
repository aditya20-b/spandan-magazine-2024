// lib/db.ts
import { Pool } from "pg";
import type { Standing, MatchResult } from "@/app/types";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Set your Neon.tech PostgreSQL URL here
});

async function query(text: string, params?: unknown[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } finally {
    client.release();
  }
}

// Initialize Database Schema
export async function initializeDb() {
  await query(`
    CREATE TABLE IF NOT EXISTS standings (
      id SERIAL PRIMARY KEY,
      sport TEXT NOT NULL,
      teamName TEXT NOT NULL,
      wins INTEGER DEFAULT 0,
      losses INTEGER DEFAULT 0,
      points INTEGER DEFAULT 0,
      UNIQUE(sport, teamName)
    );

    CREATE TABLE IF NOT EXISTS match_results (
      day TEXT NOT NULL,
      sport TEXT NOT NULL,
      team1 TEXT NOT NULL,
      team2 TEXT NOT NULL,
      score1 INTEGER DEFAULT 0,
      score2 INTEGER DEFAULT 0,
      PRIMARY KEY (day, sport, team1, team2)
    );
  `);
  console.log("Database initialized");
}

// Ensure Database is Initialized
export async function ensureDbInitialized() {
  const tables = await query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
  );
  const tableNames = tables.map((table: { table_name: string }) => table.table_name);
  if (!tableNames.includes("standings") || !tableNames.includes("match_results")) {
    await initializeDb();
  }
}

// Fetch Standings
export async function getStandings(): Promise<Standing[]> {
  const rows = await query("SELECT * FROM standings");
  return rows.map(row => ({
    id: row.id,
    sport: row.sport,
    teamName: row.teamname, // map teamname to teamName
    wins: row.wins,
    losses: row.losses,
    points: row.points,
  }));
}


// Update Standings
export async function updateStandings(standings: Standing[]) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const stmt = "INSERT INTO standings (id, sport, teamName, wins, losses, points) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (sport, teamName) DO UPDATE SET wins = EXCLUDED.wins, losses = EXCLUDED.losses, points = EXCLUDED.points";
    for (const team of standings) {
      await client.query(stmt, [
        team.id || null,
        team.sport,
        team.teamName,
        team.wins,
        team.losses,
        team.points,
      ]);
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

// Fetch Match Results
export async function getMatchResults(): Promise<MatchResult[]> {
  return await query("SELECT * FROM match_results");
}

// Update Match Results
export async function updateMatchResults(results: MatchResult[]) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const stmt = "INSERT INTO match_results (day, sport, team1, team2, score1, score2) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (day, sport, team1, team2) DO UPDATE SET score1 = EXCLUDED.score1, score2 = EXCLUDED.score2";
    for (const match of results) {
      await client.query(stmt, [
        match.day,
        match.sport,
        match.team1,
        match.team2,
        match.score1,
        match.score2,
      ]);
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

// Delete Standings
export async function deleteStandings(standingsToDelete: Standing[]) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const stmt = "DELETE FROM standings WHERE sport = $1 AND teamName = $2";
    for (const standing of standingsToDelete) {
      await client.query(stmt, [standing.sport, standing.teamName]);
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

// Delete Match Results
export async function deleteMatchResults(resultsToDelete: MatchResult[]) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const stmt = "DELETE FROM match_results WHERE day = $1 AND sport = $2 AND team1 = $3 AND team2 = $4";
    for (const result of resultsToDelete) {
      await client.query(stmt, [result.day, result.sport, result.team1, result.team2]);
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}
