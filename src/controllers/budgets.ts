import {
  CreateBudgetServices,
  HotelProps as HotelBudgetProps,
} from "../services/index";

export type HotelProps = {
  name: string;
  rating: number;
  price: number;
};

export class BudgetController {
  adviseCheapestHotel(hotels: HotelProps[]) {
    const createBudgetServices = new CreateBudgetServices();
    const hotel = createBudgetServices.find(hotels);

    return hotel;
  }

  applyingBudget(
    weekDays: string[],
    customerType: string,
    hotels: HotelBudgetProps[]
  ) {
    const createBudgetServices = new CreateBudgetServices();
    const budgets = createBudgetServices.execute(
      weekDays,
      customerType,
      hotels
    );

    return budgets;
  }
}
