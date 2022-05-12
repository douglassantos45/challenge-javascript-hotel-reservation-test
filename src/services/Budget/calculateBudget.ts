import { HotelProps } from "./CreateBudget";

function calculateBudget(
  days: string[],
  dailyWeekEnd: number,
  dailyWeekDay: number
) {
  let budget = 0;

  days?.forEach((day) => {
    switch (day) {
      case "sat":
        budget += dailyWeekEnd;
        break;
      case "sun":
        budget += dailyWeekEnd;
        break;
      default:
        budget += dailyWeekDay;
        break;
    }
  });

  return budget;
}

export function getBudget(
  hotel: HotelProps,
  customerType: string,
  days: string[]
) {
  const dailyWeekEndOnly =
    hotel.weekend.customerType[customerType.toLowerCase()];
  const dailyweekDaysOnly =
    hotel.weekday.customerType[customerType.toLocaleLowerCase()];

  const budget = calculateBudget(days, dailyWeekEndOnly, dailyweekDaysOnly);

  return {
    name: hotel.name,
    rating: hotel.rating,
    price: budget,
  };
}
