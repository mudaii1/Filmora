import { useGetHomePageMovies } from "../hooks/useGetHomePageMovies";
import { FaPlay } from "react-icons/fa";
import MovieCategories from "../ui/MovieCategories";
import { useGetGenres } from "../hooks/useGetGenres";
import BackgroundGrid from "../ui/BackgroundGrid";
import CompitableDevices from "../ui/CompitableDevices";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { API_IMAGE_BASE_URL, API_SMALL_SIZE } from "../utils/constant";
import { Link } from "react-router-dom";
import Loader from "../ui/Loader";
import Error from "../ui/Error";

function Home() {
  const { homePageMovies, homePageMoviesLoading, homePageMoviesError } =
    useGetHomePageMovies();
  const { moviesGenres, moviesGenresLoading, moviesGenresError } =
    useGetGenres();

  if (homePageMoviesLoading || moviesGenresLoading) return <Loader />;

  if (homePageMoviesError || moviesGenresError) {
    return <Error error={homePageMoviesError || moviesGenresError} />;
  }

  const backgroundMovies = [...homePageMovies].slice(0, -8);

  return (
    <div className="min-h-screen">
      <BackgroundGrid movies={backgroundMovies} />
      <div className="container mx-auto max-w-dvw lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="z-10 flex flex-col items-center px-4">
          <div className="mt-10">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="w-60 rounded-full opacity-60 lg:w-96"
            />
          </div>
          <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-bold text-white md:text-5xl">
              The Best Streaming Experience
            </h2>
            <p className="text-sm text-white opacity-60 md:text-lg">
              Filmora is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere.
            </p>
            <button className="bg-primary mt-16 flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-6 py-4.5 text-sm text-white capitalize md:text-lg">
              <FaPlay />
              Start watching now
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <MovieCategories
            title="Explore our wide variety of categories"
            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          >
            {moviesGenres.map((category) => (
              <Link
                key={category.id}
                to={`/movies/${category.name}?categoryId=${category.id}`}
                className="rounded-xl bg-white/5 p-6"
              >
                <div className="group relative grid transform cursor-pointer grid-cols-2 grid-rows-2 gap-1 overflow-hidden rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105">
                  <div className="absolute inset-0 z-50 flex w-full items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <h3 className="text-center font-bold text-white/70 md:text-2xl">
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
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="font-semibold text-white/70">
                    {category.name}
                  </h3>
                  <HiOutlineArrowSmallRight className="cursor-pointer rounded-xl bg-white/10 p-2 text-4xl text-white/70 transition-colors hover:bg-white/20" />
                </div>
              </Link>
            ))}
          </MovieCategories>
        </div>
        <CompitableDevices />
      </div>
    </div>
  );
}

export default Home;
