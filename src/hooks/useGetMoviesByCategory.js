import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategory } from "../services/tmdb";
import { useSearchParams } from "react-router-dom";

export const useGetMoviesByCategory = (categoryName, page) => {
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", categoryName, page],
    queryFn: () => getMoviesByCategory(categoryId, page),
  });

  return { movies, isLoading, error };
};
