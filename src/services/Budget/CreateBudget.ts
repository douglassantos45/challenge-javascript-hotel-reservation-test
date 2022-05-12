import { getBudget } from "./calculateBudget";
import { getByLowerPrice, getByHigherRating } from "../../utils/index";

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

export type HotelBudgetProps = {
  name: string;
  rating: number;
  price: number;
};

export class CreateBudgetServices {
  execute(
    days: string[],
    customerType: string,
    hotels: HotelProps[]
  ): HotelBudgetProps[] {
    const budgetForHotels = [];

    hotels?.forEach((hotel) => {
      budgetForHotels.push(getBudget(hotel, customerType, days));
    });

    return budgetForHotels;
  }
  //

  find(hotels: HotelBudgetProps[]) {
    const lowestPrice = getByLowerPrice(hotels);
    const lowestHotelsPrices = hotels.filter(
      ({ price }) => price === lowestPrice
    );
    const budgets = lowestHotelsPrices.map(({ price }) => price);

    const isDuplicated = new Set(budgets).size !== budgets.length;

    if (isDuplicated) {
      const higherRating = getByHigherRating(hotels);
      const [hotel] = hotels.filter(({ rating }) => rating === higherRating);

      return hotel.name;
    }

    const { name } = lowestHotelsPrices[0];

    return name;
  }
}
