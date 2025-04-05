import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTVShowDetails } from "../services/tmdb";

export const useGetShow = () => {
  const { showId } = useParams();
  const {
    data: show,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getTVShowDetails(showId),
  });
  return { show, isLoading, error };
};
