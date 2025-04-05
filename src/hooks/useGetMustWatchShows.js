import { useQuery } from "@tanstack/react-query";
import { getMustWatchTVShows } from "../services/tmdb";

export const useGetMustWatchShows = () => {
  const {
    data: mustWatchShows,
    isLoading: mustWatchShowsLoading,
    error: mustWatchShowsError,
  } = useQuery({
    queryKey: ["mustWatchShows"],
    queryFn: getMustWatchTVShows,
  });
  return { mustWatchShows, mustWatchShowsLoading, mustWatchShowsError };
};
