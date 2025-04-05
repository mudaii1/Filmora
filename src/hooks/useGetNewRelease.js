import { useQuery } from "@tanstack/react-query";
import { getNewReleaseMovies } from "../services/tmdb";
export const useGetNewRelease = () => {
  const {
    data: newRelease,
    isLoading: newReleaseLoading,
    error: newReleaseError,
  } = useQuery({
    queryKey: ["newRelease"],
    queryFn: getNewReleaseMovies,
  });
  return { newRelease, newReleaseLoading, newReleaseError };
};
