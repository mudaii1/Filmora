import { useQuery } from "@tanstack/react-query";
import { getShowsGenres } from "../services/tmdb";
import { useSearchParams } from "react-router-dom";
export const useGetShowsGenres = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const {
    data: showsGenres,
    isLoading: showsGenresLoading,
    error: showsGenresError,
  } = useQuery({
    queryKey: ["showsGenres", page],
    queryFn: () => getShowsGenres(page),
  });
  return { showsGenres, showsGenresLoading, showsGenresError };
};
