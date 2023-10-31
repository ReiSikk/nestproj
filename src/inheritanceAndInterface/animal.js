"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
    }
    Animal.prototype.move = function (distance) {
        console.log("the animal just moved this distance: " + distance);
    };
    Animal.prototype.eat = function (nutritionalValue) {
        console.log("the animal ate sth with the nutritionalValue of " + nutritionalValue);
    };
    return Animal;
}());
exports.Animal = Animal;
