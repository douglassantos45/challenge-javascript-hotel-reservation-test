import { HotelServices, HotelProps } from "../services/HotelServices";
import {
  getByLowerPrice,
  getByHigherRating,
  getByDuplicated,
} from "../utils/index";

export class BudgetController {
  public hotels = [];

  createBudget(hotelsDB: HotelProps[]) {
    this.hotels = [];
    hotelsDB.forEach((hotel) => {
      this.hotels.push(new HotelServices(hotel));
    });
  }

  adviseCheapestHotel(customerType: string, days: string[]) {
    const budgetsForHotel = this.hotels.map((hotel) => {
      return {
        name: hotel.name,
        price: hotel.applyingBudget(customerType.toLocaleLowerCase(), days),
        rating: hotel.rating,
      };
    });

    if (getByDuplicated(budgetsForHotel)) {
      const higherRating = getByHigherRating(budgetsForHotel);
      const [hotel] = budgetsForHotel.filter(
        ({ rating }) => rating === higherRating
      );
      return hotel.name;
    }

    const lowerPrice = getByLowerPrice(budgetsForHotel);
    const [hotel] = budgetsForHotel.filter(({ price }) => price === lowerPrice);

    return hotel.name;
  }
}
