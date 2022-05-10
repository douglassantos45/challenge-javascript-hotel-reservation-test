"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBudget = void 0;
function calculateBudget(weekDays, daily, taxSat, taxSun) {
    var budget = 0;
    var calcTax = 0;
    weekDays.forEach(function (weekDay) {
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
function getBudget(hotel, customerType, weekDays) {
    var daily = hotel.daily.customerType[customerType.toLowerCase()];
    var taxSat = hotel.taxSat;
    var taxSun = hotel.taxSun;
    var budget = calculateBudget(weekDays, daily, taxSat, taxSun);
    return {
        name: hotel.name,
        rating: hotel.rating,
        price: budget,
    };
}
exports.getBudget = getBudget;
