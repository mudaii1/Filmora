import { useQuery } from "@tanstack/react-query";
import { getTVShowSeasonsDetails } from "../services/tmdb";
import { useParams } from "react-router-dom";

export const useGetSeasonDetails = (seasonNumber) => {
  const { showId } = useParams();

  const {
    data: seasonDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["seasonDetails", seasonNumber, showId],
    queryFn: () => getTVShowSeasonsDetails(showId, seasonNumber),
  });

  return { seasonDetails, isLoading, error };
};
