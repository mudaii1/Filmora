import { useParams } from "react-router-dom";
import { useGetMoviesByCategory } from "../hooks/useGetMoviesByCategory";
import MovieCard from "../ui/MovieCard";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { useUpdateSearchParams } from "../hooks/useUpdateSearchParams";
import Loader from "../ui/Loader";
import Error from "../ui/Error";

function MoviesByCategory() {
  const { categoryName } = useParams();

  const { searchParams, updateParams } = useUpdateSearchParams();
  const page = searchParams.get("page") || 1;

  const { movies, isLoading, error } = useGetMoviesByCategory(
    categoryName,
    page,
  );

  const handleNextPageChange = () => {
    updateParams({ page: Number(page) + 1 });
  };
  const handlePreviousPageChange = () => {
    updateParams({ page: Number(page) - 1 });
  };

  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="mt-10 mb-20 min-h-screen px-4">
      <div className="container mx-auto max-w-dvw md:mb-40 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <h1 className="text-center text-5xl font-bold">{categoryName}</h1>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-4">
          {page > 1 && (
            <button
              className="cursor-pointer rounded-full bg-gray-400/30 p-3 text-2xl text-white transition-colors hover:bg-gray-400/50"
              onClick={handlePreviousPageChange}
            >
              <HiOutlineArrowSmallLeft />
            </button>
          )}
          <button
            className="cursor-pointer rounded-full bg-gray-400/30 p-3 text-2xl text-white transition-colors hover:bg-gray-400/50"
            onClick={handleNextPageChange}
          >
            <HiOutlineArrowSmallRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoviesByCategory;
