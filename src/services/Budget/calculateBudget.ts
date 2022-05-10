import { HotelProps } from "./CreateBudget";

function calculateBudget(
  weekDays: string[],
  daily: number,
  taxSat: number,
  taxSun: number
) {
  let budget = 0;
  let calcTax = 0;

  weekDays.forEach((weekDay) => {
    switch (weekDay) {
      case "sat":
        calcTax += taxSat;
        break;
      case "sun":
        calcTax += taxSun;
        break;
      default:
        budget += daily;
        break;
    }
  });

  return budget + calcTax;
}

export function getBudget(
  hotel: HotelProps,
  customerType: string,
  weekDays: string[]
) {
  let daily = hotel.daily.customerType[customerType.toLowerCase()];
  let taxSat = hotel.taxSat;
  let taxSun = hotel.taxSun;
  let budget = calculateBudget(weekDays, daily, taxSat, taxSun);

  return {
    name: hotel.name,
    rating: hotel.rating,
    price: budget,
  };
}
