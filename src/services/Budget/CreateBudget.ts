import { regular, rewards } from "../../utils/index";

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

export class CreateBudgetServices {
  find(days: string[], customerTyper: string, hotels: HotelProps[]) {
    const weekEnds = ["sat", "sun"];

    let isWeekEnd = false;

    weekEnds.map((weekend) => {
      if (days.includes(weekend)) {
        return (isWeekEnd = true);
      }
    });

    if (customerTyper === "Regular") {
      const lowestPrice = regular(hotels, isWeekEnd);

      if (isWeekEnd) {
        const lowestPrices = hotels.filter(
          ({ weekend }) => weekend.customerType.regular === lowestPrice
        );

        return lowestPrices[0].name;
      }

      const lowestPrices = hotels.filter(
        ({ weekday }) => weekday.customerType.regular === lowestPrice
      );
      return lowestPrices[0].name;
      //
    } else if (customerTyper === "Rewards") {
      const lowestPrice = rewards(hotels, isWeekEnd);

      if (isWeekEnd) {
        const lowestPrices = hotels.filter(
          ({ weekend }) => weekend.customerType.rewards === lowestPrice
        );

        return lowestPrices[0].name;
      }

      const lowestPrices = hotels.filter(
        ({ weekday }) => weekday.customerType.rewards === lowestPrice
      );

      return lowestPrices[0].name;
    }

    /*  const lowestPrice = getByLowerPrice(hotels);
    const lowestPrices = hotels.filter(({ price }) => price === lowestPrice);
    const budgets = lowestPrices.map(({ price }) => price);

    const isDuplicate = new Set(budgets).size !== budgets.length;

    if (isDuplicate) {
      const higherRating = getByHigherRating(hotels);
      const [hotel] = hotels.filter(({ rating }) => rating === higherRating);

      return hotel.name;
    }
    const { name } = lowestPrices[0];

    return name; */
  }
}
