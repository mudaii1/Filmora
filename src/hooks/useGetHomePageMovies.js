import { useQuery } from "@tanstack/react-query";
import { getHomePageMovies } from "../services/tmdb";

export const useGetHomePageMovies = () => {
  const {
    data: homePageMovies,
    isLoading: homePageMoviesLoading,
    error: homePageMoviesError,
  } = useQuery({
    queryKey: ["homePageMovies"],
    queryFn: getHomePageMovies,
  });
  return { homePageMovies, homePageMoviesLoading, homePageMoviesError };
};
