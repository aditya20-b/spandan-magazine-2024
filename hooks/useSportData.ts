import { useState, useCallback } from 'react';
import { Standing, MatchResult } from '@/app/types';

export function useSportData() {
  const [standings, setStandings] = useState<Standing[]>([]);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSportData = useCallback(async (sport: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const standingsResponse = await fetch("/api/standings");
      const standingsData = await standingsResponse.json();
      if (standingsData.success && Array.isArray(standingsData.data)) {
        setStandings(standingsData.data.filter((standing: Standing) => standing.sport === sport));
      } else {
        throw new Error(standingsData.error || "Failed to fetch standings data");
      }

      const resultsResponse = await fetch("/api/results");
      const resultsData = await resultsResponse.json();
      if (resultsData.success && Array.isArray(resultsData.data)) {
        setMatchResults(resultsData.data.filter((result: MatchResult) => result.sport === sport));
      } else {
        throw new Error(resultsData.error || "Failed to fetch match results data");
      }
    } catch (error) {
      console.error("Error fetching sport data:", error);
      setError("Failed to fetch sport data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { standings, matchResults, isLoading, error, fetchSportData };
}