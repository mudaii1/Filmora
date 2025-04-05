import { useQuery } from "@tanstack/react-query";
import { getNewReleaseTVShows } from "../services/tmdb";
export const useGetNewReleaseShows = () => {
  const {
    data: newReleaseShows,
    isLoading: newReleaseShowsLoading,
    error: newReleaseShowsError,
  } = useQuery({
    queryKey: ["newReleaseShows"],
    queryFn: getNewReleaseTVShows,
  });
  return { newReleaseShows, newReleaseShowsLoading, newReleaseShowsError };
};
