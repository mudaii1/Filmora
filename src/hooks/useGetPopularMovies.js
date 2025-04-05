import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/tmdb";

export const useGetPopularMovies = () => {
  const {
    data: popularMovies,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });
  return { popularMovies, popularMoviesLoading, popularMoviesError };
};
