const BudgetController = require("../dist/controllers/index");
const utils = require("../dist/utils/index");

const hotels = require("./database/hotels");

const applyingBudget = BudgetController.applyingBudget;
const adviseCheapestHotel = BudgetController.adviseCheapestHotel;

const getByWeekDay = utils.getByWeekDay;

function getCheapesttHotel(input) {
  try {
    const [customerType, inputDate] = input.split(":");
    const dates = inputDate.split(",");

    const weekDays = getByWeekDay(dates);
    const budgets = applyingBudget(weekDays, customerType, hotels);
    const hotel = adviseCheapestHotel(budgets);

    return hotel;
  } catch (err) {
    /* console.log(err); */
    return "Ops! There was an error getting the cheapest hotel.";
  }
}

exports.getCheapesttHotel = getCheapesttHotel;
