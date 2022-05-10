import { getBudget } from "./calculateBudget";

import { getByLowerPrice, getByHigherRating } from "../../utils/index";

export type HotelProps = {
  name: string;
  rating: number;
  daily: {
    customerType: {
      regular: number;
      rewards: number;
    };
  };
  taxSat: number;
  taxSun: number;
};

export type HotelBudgetProps = {
  name: string;
  rating: number;
  price: number;
};

export class CreateBudgetServices {
  execute(
    weekDays: string[],
    customerType: string,
    hotels: HotelProps[]
  ): HotelBudgetProps[] {
    const hotelsBudget = [];

    hotels?.forEach((hotel) => {
      switch (hotel.name) {
        case "Bridgewood":
          hotelsBudget.push(getBudget(hotel, customerType, weekDays));
          break;
        case "Lakewood":
          hotelsBudget.push(getBudget(hotel, customerType, weekDays));
          break;
        case "Ridgewood":
          hotelsBudget.push(getBudget(hotel, customerType, weekDays));
          break;

        default:
          break;
      }
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
