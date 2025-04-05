import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../services/tmdb";
export const useGetTrendingMovies = () => {
  const {
    data: trendingMovies = {},
    isLoading: trendingMoviesLoading,
    error: trendingMoviesError,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });
  return { trendingMovies, trendingMoviesLoading, trendingMoviesError };
};
