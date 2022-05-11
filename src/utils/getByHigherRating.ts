type HotelProps = {
  rating: number;
};

export function getByHigherRating(hotels: HotelProps[]) {
  return Math.max(...hotels.map(({ rating }) => rating));
}
