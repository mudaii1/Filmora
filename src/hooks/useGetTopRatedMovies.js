import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../services/tmdb";

export const useGetTopRatedMovies = () => {
  const {
    data: topRatedMovies,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesError,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });
  return { topRatedMovies, topRatedMoviesLoading, topRatedMoviesError };
};
