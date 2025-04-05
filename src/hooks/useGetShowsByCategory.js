import { useSearchParams } from "react-router-dom";
import { getShowsByCategory } from "../services/tmdb";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetShowsByCategory = (categoryName, page) => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const queryClient = useQueryClient();
  const {
    data: shows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shows", categoryName, page],
    queryFn: () => getShowsByCategory(categoryId, page),
  });

  queryClient.prefetchQuery({
    queryKey: ["shows", categoryName, Number(page) + 1],
    queryFn: () => getShowsByCategory(categoryId, Number(page) + 1),
  });
  return { shows, isLoading, error };
};
