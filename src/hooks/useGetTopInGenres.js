import { useQuery } from "@tanstack/react-query";
import { getTopInGenres } from "../services/tmdb";
export const useGetTopInGenres = () => {
  const {
    data: topInGenres,
    isLoading: topInGenresLoading,
    error: topInGenresError,
  } = useQuery({
    queryKey: ["topInGenres"],
    queryFn: getTopInGenres,
  });
  return { topInGenres, topInGenresLoading, topInGenresError };
};
