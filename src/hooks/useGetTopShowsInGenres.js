import { useQuery } from "@tanstack/react-query";
import { getTopShowsInGenres } from "../services/tmdb";
export const useGetTopShowsInGenres = () => {
  const {
    data: topShowsInGenres,
    isLoading: topShowsInGenresLoading,
    error: topShowsInGenresError,
  } = useQuery({
    queryKey: ["topShowsInGenres"],
    queryFn: getTopShowsInGenres,
  });
  return { topShowsInGenres, topShowsInGenresLoading, topShowsInGenresError };
};
