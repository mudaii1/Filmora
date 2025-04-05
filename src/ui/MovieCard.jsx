import { Link } from "react-router-dom";
import { API_IMAGE_BASE_URL, API_SMALL_SIZE } from "../utils/constant";

function MovieCard({ movie }) {
  const { id, title, poster_path, backdrop_path } = movie;
  return (
    <Link to={`/movies/${title}/${id}`}>
      <div className="group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-lg">
        <div>
          <img
            src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${poster_path || backdrop_path}`}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-100 transition-all duration-300 group-hover:opacity-20"></div>
          <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-center text-base font-bold md:text-xl">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
