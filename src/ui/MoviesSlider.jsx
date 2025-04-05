import "slick-carousel/slick/slick.css";
import "./MovieCategories.css";
import Slider from "react-slick";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import MovieFeatureCard from "./MovieFeatureCard";

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute bottom-20 left-15 z-10 hidden -translate-y-1/2 cursor-pointer rounded-lg bg-gray-100/10 p-3 text-3xl text-white transition-colors hover:bg-gray-400/20 md:block"
  >
    <HiOutlineArrowSmallLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-15 bottom-20 z-10 hidden -translate-y-1/2 cursor-pointer rounded-lg bg-gray-100/10 p-3 text-3xl text-white transition-colors hover:bg-gray-400/20 md:block"
  >
    <HiOutlineArrowSmallRight />
  </button>
);

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  swipeToSlide: true,
  touchThreshold: 10,
  lazyLoad: "ondemand",
  cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
  appendDots: (dots) => (
    <div>
      <ul className="movies-dots m-0 rounded-xl border-2 border-gray-300/20 bg-gray-100/10 px-6 py-4">
        {dots}
      </ul>
    </div>
  ),
  customPaging: () => <div className="h-2 w-2" />,
};

function MoviesSlider({ elements, path }) {
  return (
    <div className="relative pb-40">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {elements.map((element) => (
            <MovieFeatureCard key={element.id} movie={element} path={path} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MoviesSlider;
