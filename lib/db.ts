// lib/db.ts
import sqlite3 from "sqlite3";
import { open, type Database } from "sqlite";
import type { Standing, MatchResult } from "@/app/types";
const path = require("path");


let db: Database | null = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: path.resolve(__dirname, "spandans.db"),
      driver: sqlite3.Database,
    });
  }
  return db;
}

export async function initializeDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS standings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sport TEXT,
      teamName TEXT,
      wins INTEGER,
      losses INTEGER,
      points INTEGER,
      UNIQUE(sport, teamName)
    );

    CREATE TABLE IF NOT EXISTS match_results (
      day TEXT,
      sport TEXT,
      team1 TEXT,
      team2 TEXT,
      score1 INTEGER,
      score2 INTEGER,
      PRIMARY KEY (day, sport, team1, team2)
    );
  `);
  console.log("Database initialized");
}

export async function ensureDbInitialized() {
  const db = await openDb();
  const tables = await db.all(
    "SELECT name FROM sqlite_master WHERE type='table'"
  );
  if (
    !tables.some((table: { name: string }) => table.name === "standings") ||
    !tables.some((table: { name: string }) => table.name === "match_results")
  ) {
    await initializeDb();
  }
}

export async function getStandings(): Promise<Standing[]> {
  const db = await openDb();
  return db.all("SELECT * FROM standings");
}

export async function updateStandings(standings: Standing[]) {
  const db = await openDb();
  await db.run("BEGIN TRANSACTION");
  try {
    const stmt = await db.prepare(
      "INSERT OR REPLACE INTO standings (id, sport, teamName, wins, losses, points) VALUES (?, ?, ?, ?, ?, ?)"
    );
    for (const team of standings) {
      await stmt.run(
        team.id || null,
        team.sport,
        team.teamName,
        team.wins,
        team.losses,
        team.points
      );
    }
    await stmt.finalize();
    await db.run("COMMIT");
  } catch (error) {
    await db.run("ROLLBACK");
    throw error;
  }
}

export async function getMatchResults(): Promise<MatchResult[]> {
  const db = await openDb();
  return db.all("SELECT * FROM match_results");
}

export async function updateMatchResults(results: MatchResult[]) {
  const db = await openDb();
  await db.run("BEGIN TRANSACTION");
  try {
    const stmt = await db.prepare(
      "INSERT OR REPLACE INTO match_results (day, sport, team1, team2, score1, score2) VALUES (?, ?, ?, ?, ?, ?)"
    );
    for (const match of results) {
      await stmt.run(
        match.day,
        match.sport,
        match.team1,
        match.team2,
        match.score1,
        match.score2
      );
    }
    await stmt.finalize();
    await db.run("COMMIT");
  } catch (error) {
    await db.run("ROLLBACK");
    throw error;
  }
}

export async function deleteStandings(standingsToDelete: Standing[]) {
  const db = await openDb();
  await db.run("BEGIN TRANSACTION");
  try {
    const stmt = await db.prepare(
      "DELETE FROM standings WHERE sport = ? AND teamName = ?"
    );
    for (const standing of standingsToDelete) {
      await stmt.run(standing.sport, standing.teamName);
    }
    await stmt.finalize();
    await db.run("COMMIT");
  } catch (error) {
    await db.run("ROLLBACK");
    throw error;
  }
}

export async function deleteMatchResults(resultsToDelete: MatchResult[]) {
  const db = await openDb();
  await db.run("BEGIN TRANSACTION");
  try {
    const stmt = await db.prepare(
      "DELETE FROM match_results WHERE day = ? AND sport = ? AND team1 = ? AND team2 = ?"
    );
    for (const result of resultsToDelete) {
      await stmt.run(result.day, result.sport, result.team1, result.team2);
    }
    await stmt.finalize();
    await db.run("COMMIT");
  } catch (error) {
    await db.run("ROLLBACK");
    throw error;
  }
}
