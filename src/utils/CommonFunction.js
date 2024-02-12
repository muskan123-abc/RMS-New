import { StarGrey, YellowStar } from "../components/common/Icons";

export const formatNumber = (num) => {
  if (num >= 1e12) {
    return num / 1e12 + "T";
  } else if (num >= 1e9) {
    return num / 1e9 + "B";
  } else if (num >= 1e6) {
    return num / 1e6 + "M";
  } else if (num >= 1e3) {
    return num / 1e3 + "K";
  } else {
    return num.toString();
  }
};

export const ratingStars = (rating) => {
  const stars = [];
  const roundedRating = Math.floor(rating); // Get the integer part of the rating
  // const isHalfStar = rating % 1 !== 0; // Check if the rating has a decimal part
  // Render full stars based on the integer part of the rating here
  for (let i = 0; i < roundedRating; i++) {
    stars.push(<YellowStar key={i} />);
  }
  // Render empty stars for the remaining space
  for (let i = stars.length; i < 5; i++) {
    stars.push(<StarGrey key={i} />);
  }
  return stars;
};
