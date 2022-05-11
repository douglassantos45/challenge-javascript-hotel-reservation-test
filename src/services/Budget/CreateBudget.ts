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
    const hotelsBudget = [];

    hotels?.forEach((hotel) => {
      hotelsBudget.push(getBudget(hotel, customerType, days));
    });

    return hotelsBudget;
  }

  find(hotels: HotelBudgetProps[]) {
    const lowestPrice = getByLowerPrice(hotels);
    const lowestPrices = hotels.filter(({ price }) => price === lowestPrice);
    const budgets = lowestPrices.map(({ price }) => price);

    const isDuplicate = new Set(budgets).size !== budgets.length;

    if (isDuplicate) {
      const higherRating = getByHigherRating(hotels);
      const [hotel] = hotels.filter(({ rating }) => rating === higherRating);

      return hotel.name;
    }

    const { name } = lowestPrices[0];

    return name;
  }
}
