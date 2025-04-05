import { useQuery } from "@tanstack/react-query";
import { getSimilarMovies } from "../services/tmdb";

export const useGetSimilarMovies = (movieId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["similarMovies", movieId],
    queryFn: () => getSimilarMovies(movieId),
  });
  return { data, isLoading, error };
};
