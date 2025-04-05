import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
function StarRating({ rating, voteCount, background = false, size }) {
  // Convert rating from 10 to 5 scale
  const starRating = rating / 2;

  // Create array of 5 elements for stars
  const stars = [];

  // Calculate filled and half stars
  const filledStars = Math.floor(starRating);
  const hasHalfStar = starRating % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <TiStarFullOutline
        key={`star-${i}`}
        className={`text-red-500 ${size}`}
      />,
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <TiStarHalfOutline key="half-star" className={`text-red-500 ${size}`} />,
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <TiStarOutline
        key={`empty-star-${i}`}
        className={`text-red-500 ${size}`}
      />,
    );
  }

  return (
    <div
      className={`flex w-full flex-wrap items-center justify-center gap-1 rounded-md p-2 sm:rounded-full ${
        background && "bg-background-primary"
      }`}
    >
      {stars}
      {voteCount && (
        <span className="ml-1 text-xs text-gray-200">{voteCount}K</span>
      )}
    </div>
  );
}

export default StarRating;
