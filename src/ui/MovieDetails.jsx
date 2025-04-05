import { useGetMovie } from "../hooks/useGetMovie";
import MovieFeatureCard from "./MovieFeatureCard";
import { CiCalendarDate } from "react-icons/ci";
import { IoLanguageSharp } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import StarRating from "./StarRating";
import { GrAppsRounded } from "react-icons/gr";
import { useGetMovieCredits } from "../hooks/useGetMovieCredits";
import { API_IMAGE_BASE_URL, API_ORIGINAL_SIZE } from "../utils/constant";
import CastSlider from "./CastSlider";
import { PiPlusBold } from "react-icons/pi";
import ReviewsSlider from "./ReviewsSlider";
import { useGetMovieReviews } from "../hooks/useGetMovieReviews";
import Loader from "./Loader";
import { useGetSimilarMovies } from "../hooks/useGetSimilarMovies";
import CategorySlider from "./CategorySlider";
import MovieCard from "./MovieCard";
import Error from "./Error";

function MovieDetails() {
  const { movie, isLoading, error } = useGetMovie();
  const {
    reviews,
    isLoading: reviewsLoading,
    error: reviewsError,
  } = useGetMovieReviews();
  const { overview, vote_average, release_date, genres, spoken_languages, id } =
    movie || {};
  const {
    credits,
    isLoading: creditsLoading,
    error: creditsError,
  } = useGetMovieCredits();

  const {
    data: similarMovies,
    isLoading: similarMoviesLoading,
    error: similarMoviesError,
  } = useGetSimilarMovies(id);

  const director = credits?.crew.find((person) => person.job === "Director");

  if (isLoading || creditsLoading || reviewsLoading || similarMoviesLoading)
    return <Loader />;
  if (error || creditsError || reviewsError || similarMoviesError)
    return (
      <Error
        error={error || creditsError || reviewsError || similarMoviesError}
      />
    );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto mb-10 max-w-dvw md:mb-40 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <MovieFeatureCard movie={movie} path={"/movies"} />
        <div className="mt-26 grid grid-cols-1 grid-rows-[auto_auto_auto] gap-5 px-4 md:grid-cols-[2fr_1fr]">
          <div className="order-1 row-span-1 rounded-xl bg-white/5 p-6 sm:p-10">
            <h3 className="text-2xl font-bold">Description</h3>
            <p className="mt-4 text-gray-400">{overview}</p>
          </div>
          <div
            className={`order-2 space-y-6 rounded-xl bg-white/5 p-6 sm:p-10 ${
              similarMovies?.length > 0 ? "row-span-3" : "row-span-2"
            }`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CiCalendarDate className="text-2xl text-gray-400" />
                <p className="text-gray-400 capitalize">Released Year</p>
              </div>
              <span className="text-white">{release_date.split("-")[0]}</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <IoLanguageSharp className="text-2xl text-gray-400" />
                <p className="text-gray-400 capitalize">Avaiable languages</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {spoken_languages.map((language) => (
                  <span
                    key={language.iso_639_1}
                    className="rounded-lg border-1 border-gray-400 px-2 py-1 text-sm text-white"
                  >
                    {language.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <IoIosStarOutline className="text-2xl text-gray-400" />
                <p className="text-gray-400 capitalize">Ratings</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex w-fit items-center">
                  <StarRating rating={vote_average} size="text-2xl" />
                  <span className="text-gray-400">
                    {Number(vote_average / 2).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <GrAppsRounded className="text-2xl text-gray-400" />
                <p className="text-gray-400 capitalize">Genres</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-lg border-1 border-gray-400 px-2 py-1 text-sm text-white"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-gray-400 capitalize">Director</p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start md:flex-col">
                <img
                  src={`${director.profile_path ? `${API_IMAGE_BASE_URL}/${API_ORIGINAL_SIZE}/${director.profile_path}` : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}`}
                  alt={director.name}
                  className="h-[300px] w-[200px] rounded-lg"
                />
                <p className="text-white">{director.name}</p>
              </div>
            </div>
          </div>
          <div className="order-3 row-span-1 space-y-8 rounded-xl bg-white/5 p-6 sm:p-10">
            <p className="text-gray-400 capitalize">Cast</p>
            <CastSlider cast={credits?.cast} />
          </div>
          {reviews?.results.length > 0 && (
            <div className="order-4 row-span-1 space-y-4 rounded-xl bg-white/5 p-6 sm:p-10">
              <div className="flex items-center justify-between">
                <p className="text-gray-400 capitalize">Reviews</p>
                <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-white/5 px-4 py-2 transition-colors hover:bg-white/10">
                  <PiPlusBold className="text-xl" />
                  <p className="text-sm capitalize">Add Review</p>
                </button>
              </div>
              <ReviewsSlider reviews={reviews?.results} />
            </div>
          )}
          {similarMovies?.length > 0 && (
            <div className="order-5 row-span-1 space-y-8 overflow-hidden rounded-xl bg-white/5 p-6 sm:p-10">
              <CategorySlider title="Similar Movies">
                {similarMovies?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </CategorySlider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
