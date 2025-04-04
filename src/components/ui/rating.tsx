import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function Rating({ rating, totalReviews }: { rating: number; totalReviews: number }) {
  const maxStars = 5;

  return (
    <div className="flex items-center space-x-2">
      {/* Rating Number */}
      <span className="text-[12px] font-bold text-yellow-500">{rating.toFixed(1)}</span>

      {/* Stars */}
      <div className="flex">
        {[...Array(maxStars)].map((_, i) => {
          const starValue = i + 1;
          return rating >= starValue ? (
            <FaStar key={i} className="text-yellow-500 text-[13px]" />
          ) : rating >= starValue - 0.5 ? (
            <FaStarHalfAlt key={i} className="text-yellow-500 text-[13px]" />
          ) : (
            <FaRegStar key={i} className="text-yellow-500 text-[13px]" />
          );
        })}
      </div>

      {/* Total Reviews */}
      <span className="text-gray-400 text-[10px]">({totalReviews})</span>
    </div>
  );
}
