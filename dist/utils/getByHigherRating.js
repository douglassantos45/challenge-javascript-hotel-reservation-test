"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByHigherRating = void 0;
function getByHigherRating(hotels) {
    return Math.max.apply(Math, hotels.map(function (_a) {
        var rating = _a.rating;
        return rating;
    }));
}
exports.getByHigherRating = getByHigherRating;
