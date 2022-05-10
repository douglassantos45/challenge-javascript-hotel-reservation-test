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

export function regular(hotels: HotelProps[], weekend: boolean) {
  if (weekend)
    return Math.min(
      ...hotels.map(({ weekend }) => weekend.customerType.regular)
    );

  return Math.min(...hotels.map(({ weekday }) => weekday.customerType.regular));
}

export function rewards(hotels: HotelProps[], weekend: boolean) {
  if (weekend)
    return Math.min(
      ...hotels.map(({ weekend }) => weekend.customerType.rewards)
    );

  return Math.min(...hotels.map(({ weekday }) => weekday.customerType.rewards));
}
