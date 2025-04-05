import { SlLike } from "react-icons/sl";
import { API_IMAGE_BASE_URL, API_ORIGINAL_SIZE } from "../utils/constant";
import { FaPlay, FaPlus } from "react-icons/fa";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

function MovieFeatureCard({ movie, path }) {
  const {
    name,
    backdrop_path,
    overview,
    poster_path,
    vote_average,
    original_title,
    original_name,
    id,
  } = movie;
  return (
    <Link to={`${path}/${original_title || original_name}/${id}`}>
      <div className="relative h-[calc(100vh-130px)] px-4">
        <img
          src={`${API_IMAGE_BASE_URL}/${API_ORIGINAL_SIZE}/${backdrop_path || poster_path}`}
          alt={name}
          className="h-full w-full rounded-xl object-cover"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end space-y-3 p-8 text-center md:justify-center">
          <h1 className="text-2xl font-bold text-white md:text-4xl">{name}</h1>
          <div className="text-2xl">
            <StarRating rating={vote_average} />
          </div>
          <p className="hidden max-w-3xl text-gray-200/80 md:block">
            {overview}
          </p>
          <div className="mt-4 flex flex-col items-center gap-2 md:flex-row">
            <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500/80 p-2 px-6 py-3.5 text-white transition-all duration-300 hover:bg-red-500">
              <FaPlay /> Play Now
            </button>
            <div className="flex items-center gap-2.5">
              <FaPlus className="cursor-pointer rounded-lg bg-black/30 p-3 text-5xl transition-all duration-300 hover:bg-black/70" />
              <SlLike className="cursor-pointer rounded-lg bg-black/30 p-3 text-5xl transition-all duration-300 hover:bg-black/70" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieFeatureCard;
