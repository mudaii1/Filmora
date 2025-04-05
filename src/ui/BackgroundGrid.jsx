import { memo } from "react";
import { API_IMAGE_BASE_URL, API_SMALL_SIZE } from "../utils/constant";

const BackgroundGrid = memo(function BackgroundGrid({ movies }) {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-y-hidden">
      <div className="grid grid-cols-5 grid-rows-4 md:flex md:flex-wrap">
        {movies.map((movie, i) => (
          <div key={i} className="h-50 w-40">
            <img
              src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-cover select-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
    </div>
  );
});

export default BackgroundGrid;
