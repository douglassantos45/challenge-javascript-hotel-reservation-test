import { HotelProps } from "./CreateBudget";

function calculateBudget(
  days: string[],
  dailyWeekEnd: number,
  dailyWeekDay: number
) {
  let budget = 0;

  days.forEach((day) => {
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
  let dailyWeekEnd = hotel.weekend.customerType[customerType.toLowerCase()];
  let dailyWeekDay =
    hotel.weekday.customerType[customerType.toLocaleLowerCase()];

  let budget = calculateBudget(days, dailyWeekEnd, dailyWeekDay);

  return {
    name: hotel.name,
    rating: hotel.rating,
    price: budget,
  };
}
