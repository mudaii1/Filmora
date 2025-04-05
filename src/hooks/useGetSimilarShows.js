import { useQuery } from "@tanstack/react-query";
import { getSimilarShows } from "../services/tmdb";

export const useGetSimilarShows = (tvShowId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["similarShows", tvShowId],
    queryFn: () => getSimilarShows(tvShowId),
  });
  return { data, isLoading, error };
};
