import { useQuery } from "@tanstack/react-query";
import { getTrendingTVShows } from "../services/tmdb";
export const useGetTrendingShows = () => {
  const {
    data: trendingShows = {},
    isLoading: trendingShowsLoading,
    error: trendingShowsError,
  } = useQuery({
    queryKey: ["trendingShows"],
    queryFn: getTrendingTVShows,
  });
  return { trendingShows, trendingShowsLoading, trendingShowsError };
};
