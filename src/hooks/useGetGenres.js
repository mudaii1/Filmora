import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenres } from "../services/tmdb";
export const useGetGenres = () => {
  const {
    data: moviesGenres,
    isLoading: moviesGenresLoading,
    error: moviesGenresError,
  } = useQuery({
    queryKey: ["moviesGenres"],
    queryFn: getMoviesByGenres,
  });
  return { moviesGenres, moviesGenresLoading, moviesGenresError };
};
