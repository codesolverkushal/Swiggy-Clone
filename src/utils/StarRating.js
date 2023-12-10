import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const isHighRating = rating > 4.1;

  const getStarColor = () => {
    return isHighRating ?  'text-green-500' : 'text-red-500';
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= MAX_STARS; i++) {
      if (i <= filledStars) {
        stars.push(<FaStar key={i} className={getStarColor()} />);
      } else if (hasHalfStar && i === filledStars + 1) {
        stars.push(<FaStarHalfAlt key={i} className={getStarColor()} />);
      } else {
        stars.push(<FaRegStar key={i} className={getStarColor()} />);
      }
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <div className="bg-gray-200 px-4 py-2 rounded-md ml-4">{rating}</div>
    </div>
  );
  
};

export default StarRating;
