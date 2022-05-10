"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByWeekDay = void 0;
function getByWeekDay(dates) {
    return dates === null || dates === void 0 ? void 0 : dates.map(function (date) {
        var weekDays = String(new Date(date));
        var weekDay = weekDays.split(" ")[0];
        return weekDay.toLowerCase();
    });
}
exports.getByWeekDay = getByWeekDay;
