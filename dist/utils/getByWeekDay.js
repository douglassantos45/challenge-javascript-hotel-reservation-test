"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByWeekDay = void 0;
function getByWeekDay(dates) {
    return dates === null || dates === void 0 ? void 0 : dates.map(function (date) {
        var days = String(new Date(date));
        var day = days.split(" ")[0];
        return day.toLowerCase();
    });
}
exports.getByWeekDay = getByWeekDay;
