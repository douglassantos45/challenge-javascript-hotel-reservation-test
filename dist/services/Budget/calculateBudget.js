"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBudget = void 0;
function calculateBudget(days, dailyWeekEnd, dailyWeekDay) {
    var budget = 0;
    days.forEach(function (day) {
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
function getBudget(hotel, customerType, days) {
    var dailyWeekEnd = hotel.weekend.customerType[customerType.toLowerCase()];
    var dailyWeekDay = hotel.weekday.customerType[customerType.toLocaleLowerCase()];
    var budget = calculateBudget(days, dailyWeekEnd, dailyWeekDay);
    return {
        name: hotel.name,
        rating: hotel.rating,
        price: budget,
    };
}
exports.getBudget = getBudget;
