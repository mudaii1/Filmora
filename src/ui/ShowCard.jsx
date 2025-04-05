import { Link } from "react-router-dom";
import {
  API_IMAGE_BASE_URL,
  API_ORIGINAL_SIZE,
  API_SMALL_SIZE,
} from "../utils/constant";

function ShowCard({ show }) {
  const { id, name, poster_path, backdrop_path } = show;
  return (
    <Link to={`/shows/${name}/${id}`}>
      <div className="group group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-lg">
        <img
          src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${poster_path || backdrop_path}`}
          alt={name}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 translate-y-full bg-black transition-all duration-300 group-hover:translate-y-0">
          <img
            src={`${API_IMAGE_BASE_URL}/${API_ORIGINAL_SIZE}/${backdrop_path}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-100 transition-all duration-300 group-hover:opacity-20"></div>
        <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <h3 className="text-center text-base font-bold md:text-xl">{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ShowCard;
