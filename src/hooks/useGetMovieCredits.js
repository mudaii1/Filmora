import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/tmdb";
import { useQuery } from "@tanstack/react-query";
export function useGetMovieCredits() {
  const { movieId } = useParams();

  const {
    data: credits,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie-credits", movieId],
    queryFn: () => getMovieCredits(movieId),
  });
  return { credits, isLoading, error };
}
