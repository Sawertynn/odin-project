"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTheOldest = findTheOldest;
function findTheOldest(people) {
    if (people.length == 0) {
        return null;
    }
    var year = new Date().getFullYear();
    var ages = people.map(function (person) {
        var _a;
        var death = (_a = person.yearOfDeath) !== null && _a !== void 0 ? _a : year;
        return death - person.yearOfBirth;
    });
    var maxAge = Math.max.apply(Math, ages);
    var index = ages.indexOf(maxAge);
    return people[index];
}
