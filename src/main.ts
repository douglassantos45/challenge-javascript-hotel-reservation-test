import { BudgetController } from "./controllers/budgets.controller";
import { getByWeekDay } from "../src/utils/getByWeekDay";

import hotels from "./database/hotels";

const budgetsController = new BudgetController();

export function getCheapestHotel(input) {
  try {
    const [customerType, inputDate] = input.split(":");
    const dates = inputDate.split(",");

    const days = getByWeekDay(dates);

    budgetsController.createBudget(hotels);
    const hotel = budgetsController.adviseCheapestHotel(customerType, days);

    return hotel;
  } catch (err) {
    throw new Error(err.message);
  }
}
