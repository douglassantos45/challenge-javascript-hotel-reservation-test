export type HotelProps = {
  name: string;
  rating: number;
  weekday: {
    customerType: {
      regular: number;
      rewards: number;
    };
  };
  weekend: {
    customerType: {
      regular: number;
      rewards: number;
    };
  };
};
export function getByHigherRating(hotels: HotelProps[]) {
  return Math.max(...hotels.map(({ rating }) => rating));
}
