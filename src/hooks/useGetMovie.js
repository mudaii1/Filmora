import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";

export const useGetMovie = () => {
  const { movieTitle, movieId } = useParams();
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", movieTitle, movieId],
    queryFn: () => getMovieDetails(movieId),
  });
  return { movie, isLoading, error };
};
