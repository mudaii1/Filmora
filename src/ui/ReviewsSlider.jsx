import "slick-carousel/slick/slick.css";
import "./MovieCategories.css";
import Slider from "react-slick";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import {
  API_IMAGE_BASE_URL,
  API_ORIGINAL_SIZE,
  API_SMALL_SIZE,
  API_POSTER_SIZE,
} from "../utils/constant";
import StarRating from "./StarRating";
import { format } from "date-fns";

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute -bottom-5 z-10 hidden cursor-pointer rounded-full bg-gray-100/10 p-3 text-xl text-white transition-colors hover:bg-gray-400/20 md:right-1/2 md:block md:-translate-x-1/2"
  >
    <HiOutlineArrowSmallLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute -bottom-5 z-10 hidden cursor-pointer rounded-full bg-gray-100/10 p-3 text-xl text-white transition-colors hover:bg-gray-400/20 md:left-1/2 md:block md:translate-x-1/2"
  >
    <HiOutlineArrowSmallRight />
  </button>
);

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,

  responsive: [
    {
      breakpoint: 1024, // lg
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function ReviewsSlider({ reviews }) {
  return (
    <div className="relative mx-auto mb-10 w-full md:mb-0 md:max-h-[42rem] md:max-w-[27rem] lg:max-w-[38rem] xl:max-w-[45rem] 2xl:max-w-[60rem]">
      <div className="px-4">
        <Slider {...settings}>
          {reviews?.map((review) => (
            <div key={review.id} className="md:pb-10">
              <div className="flex flex-col flex-wrap justify-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">
                    {review.author_details.name || review.author}
                  </h3>
                  <p className="text-sm text-nowrap text-gray-500">
                    {format(new Date(review.created_at), "yyyy-MM-dd")}
                  </p>
                </div>
                <div className="w-fit rounded-full border-2 border-gray-300/20 bg-gray-100/10 px-2 py-1">
                  <StarRating
                    rating={review.author_details.rating}
                    size="text-xl"
                  />
                </div>
              </div>
              <p className="mt-5 text-sm text-gray-500">
                {review.content.slice(0, 400)}
                {review.content.length > 400 && "..."}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewsSlider;
