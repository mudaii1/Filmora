import { PiClockLight } from "react-icons/pi";
import { API_IMAGE_BASE_URL, API_ORIGINAL_SIZE } from "../utils/constant";
import { FaRegCirclePlay } from "react-icons/fa6";

function EpisodeCard({ episode }) {
  const { name, episode_number, overview, runtime, still_path } = episode;
  return (
    <div className="flex flex-col items-center gap-5 py-10 md:flex-row">
      <span className="text-2xl text-gray-400 md:text-3xl">
        {episode_number.toString().padStart(2, "0")}
      </span>
      <div className="relative min-h-[118px] min-w-[172px]">
        <img
          src={`${API_IMAGE_BASE_URL}/${API_ORIGINAL_SIZE}/${still_path}`}
          alt={name}
          className="h-[118px] w-[172px] rounded-xl object-cover"
        />
        <div className="group absolute inset-0 flex w-full cursor-pointer items-center justify-center rounded-xl bg-black/50">
          <FaRegCirclePlay className="text-4xl text-gray-400 group-hover:text-red-500" />
        </div>
      </div>
      <div className="flex grow flex-col gap-3 text-center md:text-left">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <h5 className="text-xl font-bold">{name}</h5>
          <div className="flex items-center gap-2 rounded-xl bg-gray-300/10 px-4 py-2">
            <PiClockLight className="text-2xl" />
            <span className="text-nowrap text-gray-400">{runtime} min</span>
          </div>
        </div>
        <p className="text-gray-400">{overview}</p>
      </div>
    </div>
  );
}
export default EpisodeCard;
