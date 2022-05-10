"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rewards = exports.regular = void 0;
function regular(hotels, weekend) {
    if (weekend)
        return Math.min.apply(Math, hotels.map(function (_a) {
            var weekend = _a.weekend;
            return weekend.customerType.regular;
        }));
    return Math.min.apply(Math, hotels.map(function (_a) {
        var weekday = _a.weekday;
        return weekday.customerType.regular;
    }));
}
exports.regular = regular;
function rewards(hotels, weekend) {
    if (weekend)
        return Math.min.apply(Math, hotels.map(function (_a) {
            var weekend = _a.weekend;
            return weekend.customerType.rewards;
        }));
    return Math.min.apply(Math, hotels.map(function (_a) {
        var weekday = _a.weekday;
        return weekday.customerType.rewards;
    }));
}
exports.rewards = rewards;
