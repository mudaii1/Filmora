import { useQuery } from "@tanstack/react-query";
import { getTVShowReviews } from "../services/tmdb";
import { useParams } from "react-router-dom";
export const useGetShowReviews = () => {
  const { showId } = useParams();

  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["showReviews", showId],
    queryFn: () => getTVShowReviews(showId),
  });

  return { reviews, isLoading, error };
};
