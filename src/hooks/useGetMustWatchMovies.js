import { useQuery } from "@tanstack/react-query";
import { getMustWatchMovies } from "../services/tmdb";

export const useGetMustWatchMovies = () => {
  const {
    data: mustWatchMovies,
    isLoading: mustWatchMoviesLoading,
    error: mustWatchMoviesError,
  } = useQuery({
    queryKey: ["mustWatchMovies"],
    queryFn: getMustWatchMovies,
  });
  return { mustWatchMovies, mustWatchMoviesLoading, mustWatchMoviesError };
};
