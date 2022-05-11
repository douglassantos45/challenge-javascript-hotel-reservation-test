type HotelProps = {
  price: number;
};

export function getByLowerPrice(hotels: HotelProps[]) {
  return Math.min(...hotels.map(({ price }) => price));
}
