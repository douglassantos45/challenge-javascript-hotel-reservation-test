"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByLowerPrice = void 0;
function getByLowerPrice(hotels) {
    return Math.min.apply(Math, hotels.map(function (_a) {
        var price = _a.price;
        return price;
    }));
}
exports.getByLowerPrice = getByLowerPrice;
