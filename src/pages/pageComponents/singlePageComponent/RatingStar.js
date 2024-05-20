import React from 'react';

const RatingStar = ({ rating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const ratingNum = index + 0.5;
        return (
          <span key={index}>
            {rating >= index + 1 ? (
              <i className="fa-solid fa-star"></i>
            ) : rating >= ratingNum ? (
              <i className="fa-solid fa-star-half-stroke"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default RatingStar;
