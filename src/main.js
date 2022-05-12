const BudgetController = require("../dist/controllers/index");
const utils = require("../dist/utils/index");

const hotels = require("./database/hotels");

const applyingBudget = BudgetController.applyingBudget;
const adviseCheapestHotel = BudgetController.adviseCheapestHotel;

const getByWeekDay = utils.getByWeekDay;

function getCheapestHotel(input) {
  try {
    const [customerType, inputDate] = input.split(":");
    const dates = inputDate.split(",");

    const days = getByWeekDay(dates);
    const budgetForHotels = applyingBudget(days, customerType, hotels);
    const hotel = adviseCheapestHotel(budgetForHotels);

    return hotel;
  } catch (err) {
    /* console.log(err); */
    return "Ops! There was an error getting the cheapest hotel.";
  }
}

exports.getCheapestHotel = getCheapestHotel;
