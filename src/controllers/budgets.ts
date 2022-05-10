import {
  CreateBudgetServices,
  HotelProps as HotelBudgetProps,
} from "../services/index";

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

export class BudgetController {
  adviseCheapestHotel(
    days: string[],
    customerType: string,
    hotels: HotelProps[]
  ) {
    const createBudgetServices = new CreateBudgetServices();
    const hotel = createBudgetServices.find(days, customerType, hotels);

    return hotel;
  }
}
