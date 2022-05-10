const BudgetController = require("../dist/controllers/index");
const utils = require("../dist/utils/index");

const hotels = require("./database/hotels");

const adviseCheapestHotel = BudgetController.adviseCheapestHotel;

const getByWeekDay = utils.getByWeekDay;

function getCheapesttHotel(input) {
  try {
    const [customerType, inputDate] = input.split(":");
    const dates = inputDate.split(",");

    const days = getByWeekDay(dates);
    const hotel = adviseCheapestHotel(days, customerType, hotels);

    return hotel;
  } catch (err) {
    /* console.log(err); */
    return "Ops! There was an error getting the cheapest hotel.";
  }
}

exports.getCheapesttHotel = getCheapesttHotel;
