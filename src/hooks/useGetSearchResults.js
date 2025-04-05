import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../services/tmdb";

export const useGetSearchResults = (query) => {
  const {
    data: searchResults,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearchResults(query),
  });

  return { searchResults, isLoading, error };
};
