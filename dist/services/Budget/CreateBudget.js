"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBudgetServices = void 0;
var calculateBudget_1 = require("./calculateBudget");
var index_1 = require("../../utils/index");
var CreateBudgetServices = /** @class */ (function () {
    function CreateBudgetServices() {
    }
    CreateBudgetServices.prototype.execute = function (days, customerType, hotels) {
        var budgetForHotels = [];
        hotels === null || hotels === void 0 ? void 0 : hotels.forEach(function (hotel) {
            budgetForHotels.push((0, calculateBudget_1.getBudget)(hotel, customerType, days));
        });
        return budgetForHotels;
    };
    //
    CreateBudgetServices.prototype.find = function (hotels) {
        var lowestPrice = (0, index_1.getByLowerPrice)(hotels);
        var lowestHotelsPrices = hotels.filter(function (_a) {
            var price = _a.price;
            return price === lowestPrice;
        });
        var budgets = lowestHotelsPrices.map(function (_a) {
            var price = _a.price;
            return price;
        });
        var isDuplicated = new Set(budgets).size !== budgets.length;
        if (isDuplicated) {
            var higherRating_1 = (0, index_1.getByHigherRating)(hotels);
            var hotel = hotels.filter(function (_a) {
                var rating = _a.rating;
                return rating === higherRating_1;
            })[0];
            return hotel.name;
        }
        var name = lowestHotelsPrices[0].name;
        return name;
    };
    return CreateBudgetServices;
}());
exports.CreateBudgetServices = CreateBudgetServices;
