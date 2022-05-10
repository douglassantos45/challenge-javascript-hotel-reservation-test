"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetController = void 0;
var index_1 = require("../services/index");
var BudgetController = /** @class */ (function () {
    function BudgetController() {
    }
    BudgetController.prototype.adviseCheapestHotel = function (hotels) {
        var createBudgetServices = new index_1.CreateBudgetServices();
        var hotel = createBudgetServices.find(hotels);
        return hotel;
    };
    BudgetController.prototype.applyingBudget = function (weekDays, customerType, hotels) {
        var createBudgetServices = new index_1.CreateBudgetServices();
        var budgets = createBudgetServices.execute(weekDays, customerType, hotels);
        return budgets;
    };
    return BudgetController;
}());
exports.BudgetController = BudgetController;
