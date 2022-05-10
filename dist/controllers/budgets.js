"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetController = void 0;
var index_1 = require("../services/index");
var BudgetController = /** @class */ (function () {
    function BudgetController() {
    }
    BudgetController.prototype.adviseCheapestHotel = function (days, customerType, hotels) {
        var createBudgetServices = new index_1.CreateBudgetServices();
        var hotel = createBudgetServices.find(days, customerType, hotels);
        return hotel;
    };
    return BudgetController;
}());
exports.BudgetController = BudgetController;
