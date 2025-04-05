import { useQuery } from "@tanstack/react-query";
import { getMovieReviews } from "../services/tmdb";
import { useParams } from "react-router-dom";
export const useGetMovieReviews = () => {
  const { movieId } = useParams();

  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieReviews", movieId],
    queryFn: () => getMovieReviews(movieId),
  });

  return { reviews, isLoading, error };
};
