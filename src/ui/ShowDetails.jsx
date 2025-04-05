import MovieFeatureCard from "./MovieFeatureCard";
import { CiCalendarDate } from "react-icons/ci";
import { IoLanguageSharp } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import StarRating from "./StarRating";
import { GrAppsRounded } from "react-icons/gr";
import { API_IMAGE_BASE_URL, API_ORIGINAL_SIZE } from "../utils/constant";
import { useGetShow } from "../hooks/useGetShow";
import SeasonEpisodes from "./SeasonEpisodes";
import { useGetShowReviews } from "../hooks/useGetShowReviews";
import { useGetShowCredits } from "../hooks/useGetShowCredits";
import CastSlider from "./CastSlider";
import { PiPlusBold } from "react-icons/pi";
import ReviewsSlider from "./ReviewsSlider";
import CategorySlider from "./CategorySlider";
import { useGetSimilarShows } from "../hooks/useGetSimilarShows";
import Loader from "./Loader";
import ShowCard from "./ShowCard";
import Error from "./Error";

function ShowDetails() {
  const { show, isLoading, error } = useGetShow();

  const {
    overview,
    vote_average,
    first_air_date,
    genres,
    spoken_languages,
    seasons,
    original_name,
    id,
  } = show || {};
  const {
    reviews,
    isLoading: reviewsLoading,
    error: reviewsError,
  } = useGetShowReviews();
  const {
    data: similarShows,
    isLoading: similarShowsLoading,
    error: similarShowsError,
  } = useGetSimilarShows(id);
  const filteredSeasons = seasons?.filter(
    (season) => season.episode_count !== 0,
  );

  const {
    credits,
    isLoading: creditsLoading,
    error: creditsError,
  } = useGetShowCredits();

  const director = credits?.crew.find(
    (person) => person.job === "Director" || person.job === "Producer",
  );

  if (isLoading || creditsLoading || reviewsLoading || similarShowsLoading)
    return <Loader />;
  if (error || creditsError || reviewsError || similarShowsError)
    return (
      <Error
        error={error || creditsError || reviewsError || similarShowsError}
      />
    );
  return (
    <div className="min-h-screen">
      <div className="container mx-auto mb-10 max-w-dvw md:mb-40 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <MovieFeatureCard movie={show} path={`/shows`} />
        <div className="mt-26 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-5 px-4 md:grid-cols-[2fr_1fr]">
          <div className="order-1 row-span-1 rounded-xl bg-white/5 p-6 sm:p-10">
            <h3 className="mb-10 text-lg font-bold md:text-2xl">
              Seasons and Episodes
            </h3>
            <div className="flex flex-col gap-4">
              {filteredSeasons.map((season) => (
                <SeasonEpisodes key={season.id} season={season} />
              ))}
            </div>
          </div>
          <div className="order-2 row-span-1 rounded-xl bg-white/5 p-6 sm:p-10 md:order-3">
            <h3 className="text-2xl font-bold">Description</h3>
            <p className="mt-4 text-gray-400">{overview}</p>
          </div>
          <div className="order-3 row-span-4 h-fit space-y-6 rounded-xl bg-white/5 p-6 sm:p-10 md:order-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CiCalendarDate className="text-2xl text-gray-400" />
                <p className="text-gray-400 capitalize">Released Year</p>
              </div>
              <span className="text-white">{first_air_date.split("-")[0]}</span>
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
                  src={
                    director?.profile_path
                      ? `${API_IMAGE_BASE_URL}/${API_ORIGINAL_SIZE}/${director.profile_path}`
                      : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                  }
                  alt={director?.name}
                  className="h-[300px] w-[200px] rounded-lg"
                />
                <p className="text-white">{director?.name}</p>
              </div>
            </div>
          </div>
          <div className="order-4 row-span-1 space-y-8 rounded-xl bg-white/5 p-6 sm:p-10">
            <p className="text-gray-400 capitalize">Cast</p>
            <CastSlider cast={credits?.cast} />
          </div>
          {reviews?.results.length > 0 && (
            <div className="order-5 row-span-1 space-y-4 rounded-xl bg-white/5 p-6 sm:p-10">
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
          <div className="order-6 row-span-1 space-y-8 overflow-hidden rounded-xl bg-white/5 p-6 sm:p-10">
            <CategorySlider title="Similar Shows">
              {similarShows?.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </CategorySlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
