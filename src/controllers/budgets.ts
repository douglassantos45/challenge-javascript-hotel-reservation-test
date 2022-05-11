import { CreateBudgetServices, HotelProps } from "../services/index";

export type HotelBudgetProps = {
  name: string;
  rating: number;
  price: number;
};

export class BudgetController {
  adviseCheapestHotel(hotels: HotelBudgetProps[]) {
    const createBudgetServices = new CreateBudgetServices();
    const hotel = createBudgetServices.find(hotels);

    return hotel;
  }

  applyingBudget(days: string[], customerType: string, hotels: HotelProps[]) {
    const createBudgetServices = new CreateBudgetServices();
    const budgets = createBudgetServices.execute(days, customerType, hotels);

    return budgets;
  }
}
