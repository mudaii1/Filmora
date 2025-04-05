import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { useGetSeasonDetails } from "../hooks/useGetSeasonDetails";
import EpisodeCard from "./EpisdoeCard";
import Loader from "./Loader";
function SeasonEpisodes({ season }) {
  const [isOpen, setIsOpen] = useState(false);
  const { season_number, episode_count } = season;
  const { seasonDetails, isLoading, error } =
    useGetSeasonDetails(season_number);
  const { episodes } = seasonDetails || {};
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div
      key={season.id}
      className="bg-background-primary flex flex-col rounded-xl px-5 py-3 md:px-12.5 md:py-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold md:text-lg">
            Season {season_number.toString().padStart(2, "0")}
          </h4>
          <p className="text-xs text-gray-400 md:text-base">
            {episode_count} episodes
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer rounded-full bg-gray-300/10 p-2 text-gray-400 hover:text-gray-300"
        >
          {isOpen ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 divide-y divide-gray-300/10">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SeasonEpisodes;
