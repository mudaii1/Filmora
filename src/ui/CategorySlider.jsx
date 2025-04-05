import "slick-carousel/slick/slick.css";
import "./MovieCategories.css";
import Slider from "react-slick";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import SectionHeader from "./SectionHeader";

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-25 z-10 hidden -translate-y-1/2 cursor-pointer rounded-lg bg-gray-100/10 p-3 text-3xl text-white transition-colors hover:bg-gray-400/20 md:-top-10 md:block 2xl:-top-15"
  >
    <HiOutlineArrowSmallLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-5 z-10 hidden -translate-y-1/2 cursor-pointer rounded-lg bg-gray-100/10 p-3 text-3xl text-white transition-colors hover:bg-gray-400/20 md:-top-10 md:block 2xl:-top-15"
  >
    <HiOutlineArrowSmallRight />
  </button>
);

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  swipeToSlide: true,
  touchThreshold: 10,
  lazyLoad: "ondemand",
  cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
  appendDots: (dots) => (
    <div>
      <ul className="category-dots m-0 rounded-xl border-2 border-gray-300/20 bg-gray-100/10 px-6 py-4">
        {dots}
      </ul>
    </div>
  ),
  customPaging: () => <div className="h-2 w-2" />,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

function CategorySlider({ children, title, description }) {
  return (
    <div className="relative px-4 pb-20 md:pb-40">
      <SectionHeader title={title} description={description} />
      <div className="slider-wrapper">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}

export default CategorySlider;
