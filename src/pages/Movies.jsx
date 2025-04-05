import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useGetGenres } from "../hooks/useGetGenres";
import CategorySlider from "../ui/CategorySlider";
import MoviesSlider from "../ui/MoviesSlider";
import { API_IMAGE_BASE_URL, API_SMALL_SIZE } from "../utils/constant";
import { useGetTopInGenres } from "../hooks/useGetTopInGenres";
import { useGetTrendingMovies } from "../hooks/useGetTrendingMovies";
import { PiClockFill } from "react-icons/pi";
import { formatTime } from "../utils/helper";
import { useGetNewRelease } from "../hooks/useGetNewRelease";
import { format } from "date-fns";
import { useGetMustWatchMovies } from "../hooks/useGetMustWatchMovies";
import StarRating from "../ui/StarRating";

import { Link } from "react-router-dom";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
function Movies() {
  // Movies
  const { moviesGenres, moviesGenresLoading, moviesGenresError } =
    useGetGenres();

  const { topInGenres, topInGenresLoading, topInGenresError } =
    useGetTopInGenres();

  const { trendingMovies, trendingMoviesLoading, trendingMoviesError } =
    useGetTrendingMovies();

  const { newRelease, newReleaseLoading, newReleaseError } = useGetNewRelease();

  const { mustWatchMovies, mustWatchMoviesLoading, mustWatchMoviesError } =
    useGetMustWatchMovies();
  if (
    moviesGenresLoading ||
    topInGenresLoading ||
    newReleaseLoading ||
    trendingMoviesLoading ||
    mustWatchMoviesLoading
  )
    return <Loader />;

  if (
    moviesGenresError ||
    topInGenresError ||
    newReleaseError ||
    trendingMoviesError ||
    mustWatchMoviesError
  ) {
    return <Error error={moviesGenresError} />;
  }
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-dvw md:mb-40 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <MoviesSlider elements={moviesGenres[0].movies} path={"/movies"} />
        <div className="relative rounded-xl border-1 border-gray-700/40 pt-10 md:p-12.5">
          <span className="absolute top-0 left-10 -translate-y-1/2 rounded-full bg-red-500 px-4 py-2 text-lg">
            Movies
          </span>
          <CategorySlider title="Our Genres">
            {moviesGenres.map((category) => (
              <Link
                key={category.id}
                to={`/movies/${category.name}?categoryId=${category.id}`}
                className="rounded-xl bg-white/5 p-2 md:p-6"
              >
                <div className="group relative grid transform cursor-pointer grid-cols-2 grid-rows-2 gap-1 overflow-hidden rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105">
                  <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-center text-xl font-bold text-white/70 md:text-2xl">
                      {category.name}
                    </h3>
                  </div>
                  {category.movies.slice(0, 4).map((movie) => (
                    <div className="aspect-[2/3]" key={movie.id}>
                      <img
                        src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${movie.poster_path || movie.backdrop_path}`}
                        alt={movie.title}
                        className="h-full w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-black/40"></div>
                </div>
                <div className="mt-2 flex items-center justify-between md:mt-6">
                  <h3 className="font-semibold text-white/70">
                    {category.name}
                  </h3>
                  <HiOutlineArrowSmallRight className="hidden cursor-pointer rounded-xl bg-white/10 p-2 text-4xl text-white/70 transition-colors hover:bg-white/20 sm:block" />
                </div>
              </Link>
            ))}
          </CategorySlider>

          <CategorySlider title="Popular Top 10 In Genres">
            {topInGenres.map((category) => (
              <Link
                key={category.id}
                to={`/movies/${category.name}?categoryId=${category.id}`}
                className="rounded-xl bg-white/5 p-2 md:p-6"
              >
                <div className="group relative grid transform cursor-pointer grid-cols-2 grid-rows-2 gap-1 overflow-hidden rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105">
                  <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-center text-xl font-bold text-white/70 md:text-2xl">
                      {category.name}
                    </h3>
                  </div>
                  {category.movies.slice(0, 4).map((movie) => (
                    <div className="aspect-[2/3]" key={movie.id}>
                      <img
                        src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${movie.poster_path || movie.backdrop_path}`}
                        alt={movie.title}
                        className="h-full w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-black/40"></div>
                </div>
                <div className="mt-2 flex items-center justify-center sm:justify-between md:mt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="block w-fit rounded-md bg-red-500 p-2.5 text-sm text-white/70">
                      Top 10 in
                    </span>
                    <h3 className="text-center text-sm font-semibold text-white/70 md:text-base">
                      {category.name}
                    </h3>
                  </div>
                  <HiOutlineArrowSmallRight className="hidden cursor-pointer rounded-xl bg-white/10 p-2 text-4xl text-white/70 transition-colors hover:bg-white/20 sm:block" />
                </div>
              </Link>
            ))}
          </CategorySlider>

          <CategorySlider title="Trending Now">
            {trendingMovies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.title}/${movie.id}`}
                className="rounded-xl bg-white/5 p-2 md:p-6"
              >
                <div className="group relative transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105">
                  <div className="aspect-[2/3]" key={movie.id}>
                    <img
                      src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${movie.poster_path || movie.backdrop_path}`}
                      alt={movie.title}
                      className="h-full w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <h3 className="text-center text-xl font-bold text-white/70 md:text-2xl">
                        {movie.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-black/40"></div>
                </div>
                <div className="mt-2 flex items-center justify-center text-white/70 md:mt-6">
                  <div className="bg-background-primary flex flex-col items-center gap-2 rounded-md p-3 md:flex-row md:rounded-full md:p-2">
                    <PiClockFill className="text-lg md:text-2xl" />
                    <span className="text-xs md:text-sm">
                      {formatTime(movie.runtime)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </CategorySlider>

          <CategorySlider title="New Releases">
            {newRelease.map((movie) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.title}/${movie.id}`}
                className="rounded-xl bg-white/5 p-2 md:p-6"
              >
                <div className="group relative transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105">
                  <div className="aspect-[2/3]" key={movie.id}>
                    <img
                      src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${movie.poster_path || movie.backdrop_path}`}
                      alt={movie.title}
                      className="h-full w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <h3 className="text-center text-xl font-bold text-white/70 md:text-2xl">
                        {movie.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-black/40"></div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 rounded-md p-3 md:mt-5 md:rounded-full">
                  <span className="block text-center text-xs text-white/70">
                    Released at{" "}
                    {format(new Date(movie.release_date), "dd MMMM yyyy")}
                  </span>
                </div>
              </Link>
            ))}
          </CategorySlider>

          <CategorySlider title="Must - Watch Movies">
            {mustWatchMovies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.title}/${movie.id}`}
                className="rounded-xl bg-white/5 p-2 md:p-6"
              >
                <div className="group relative transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105">
                  <div className="aspect-[2/3]" key={movie.id}>
                    <img
                      src={`${API_IMAGE_BASE_URL}/${API_SMALL_SIZE}/${movie.poster_path || movie.backdrop_path}`}
                      alt={movie.title}
                      className="h-full w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <h3 className="hidden text-center text-xl font-bold text-white/70 transition-all duration-300 group-hover:block md:text-2xl">
                        {movie.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-black/40"></div>
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2 md:mt-5 md:justify-between">
                  <div className="bg-background-primary flex w-full flex-col items-center justify-center gap-2 rounded-md p-2 text-white/70 sm:flex-row sm:rounded-full">
                    <PiClockFill className="text-lg md:text-2xl" />
                    <span className="text-xs md:text-sm">
                      {formatTime(movie.runtime)}
                    </span>
                  </div>
                  <StarRating
                    rating={movie.vote_average}
                    voteCount={movie.vote_count}
                    background={true}
                  />
                </div>
              </Link>
            ))}
          </CategorySlider>
        </div>
      </div>
    </div>
  );
}

export default Movies;
