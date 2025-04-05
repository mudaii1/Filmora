import { useParams } from "react-router-dom";
import { getTVShowCredits } from "../services/tmdb";
import { useQuery } from "@tanstack/react-query";
export function useGetShowCredits() {
  const { showId } = useParams();

  const {
    data: credits,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["show-credits", showId],
    queryFn: () => getTVShowCredits(showId),
  });
  return { credits, isLoading, error };
}
