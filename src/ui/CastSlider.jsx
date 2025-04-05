import "slick-carousel/slick/slick.css";
import "./MovieCategories.css";
import Slider from "react-slick";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { API_IMAGE_BASE_URL, API_POSTER_SIZE } from "../utils/constant";

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-17.5 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-gray-100/10 p-3 text-xl text-white transition-colors hover:bg-gray-400/20 md:-top-10 md:block 2xl:-top-10"
  >
    <HiOutlineArrowSmallLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-2.5 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-gray-100/10 p-3 text-xl text-white transition-colors hover:bg-gray-400/20 md:-top-10 md:block 2xl:-top-10"
  >
    <HiOutlineArrowSmallRight />
  </button>
);

function CastSlider({ cast }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto w-full md:max-w-[27rem] lg:max-w-[38rem] xl:max-w-[45rem] 2xl:max-w-[60rem]">
      <div className="px-4">
        <Slider {...settings}>
          {cast?.map((person) => (
            <div key={person.id} className="px-2">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={`${person.profile_path ? `${API_IMAGE_BASE_URL}/${API_POSTER_SIZE}/${person.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`}`}
                  alt={person.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 bottom-0 left-0 p-3">
                    <h3 className="truncate text-sm font-semibold text-white">
                      {person.name}
                    </h3>
                    <p className="truncate text-xs text-gray-200">
                      {person.character}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CastSlider;
