type HotelProps = {
  price: number;
};

export function getByDuplicated(budgetsForHotel: HotelProps[]) {
  const isDuplicatedPrices =
    new Set(budgetsForHotel.map(({ price }) => price)).size !=
    budgetsForHotel.length;

  return isDuplicatedPrices;
}
