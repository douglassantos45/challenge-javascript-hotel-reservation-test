"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBudgetServices = void 0;
var index_1 = require("../../utils/index");
var CreateBudgetServices = /** @class */ (function () {
    function CreateBudgetServices() {
    }
    CreateBudgetServices.prototype.find = function (days, customerTyper, hotels) {
        var weekEnds = ["sat", "sun"];
        var isWeekEnd = false;
        weekEnds.map(function (weekend) {
            if (days.includes(weekend)) {
                return (isWeekEnd = true);
            }
        });
        if (customerTyper === "Regular") {
            var lowestPrice_1 = (0, index_1.regular)(hotels, isWeekEnd);
            if (isWeekEnd) {
                var lowestPrices_1 = hotels.filter(function (_a) {
                    var weekend = _a.weekend;
                    return weekend.customerType.regular === lowestPrice_1;
                });
                return lowestPrices_1[0].name;
            }
            var lowestPrices = hotels.filter(function (_a) {
                var weekday = _a.weekday;
                return weekday.customerType.regular === lowestPrice_1;
            });
            return lowestPrices[0].name;
            //
        }
        else if (customerTyper === "Rewards") {
            var lowestPrice_2 = (0, index_1.rewards)(hotels, isWeekEnd);
            if (isWeekEnd) {
                var lowestPrices_2 = hotels.filter(function (_a) {
                    var weekend = _a.weekend;
                    return weekend.customerType.rewards === lowestPrice_2;
                });
                return lowestPrices_2[0].name;
            }
            var lowestPrices = hotels.filter(function (_a) {
                var weekday = _a.weekday;
                return weekday.customerType.rewards === lowestPrice_2;
            });
            return lowestPrices[0].name;
        }
        /*  const lowestPrice = getByLowerPrice(hotels);
        const lowestPrices = hotels.filter(({ price }) => price === lowestPrice);
        const budgets = lowestPrices.map(({ price }) => price);
    
        const isDuplicate = new Set(budgets).size !== budgets.length;
    
        if (isDuplicate) {
          const higherRating = getByHigherRating(hotels);
          const [hotel] = hotels.filter(({ rating }) => rating === higherRating);
    
          return hotel.name;
        }
        const { name } = lowestPrices[0];
    
        return name; */
    };
    return CreateBudgetServices;
}());
exports.CreateBudgetServices = CreateBudgetServices;
