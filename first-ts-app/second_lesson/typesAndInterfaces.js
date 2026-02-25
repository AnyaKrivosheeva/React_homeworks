//1. Определи два типа: `Admin` и `User`, где у `Admin` есть поле `privileges` (массив строк), 
// а у `User` — поля `name` (строка) и `age` (число). 
// Создай пересечение этих типов в типе `AdminUser` и определи объект на основе этого типа;
var person1 = {
    name: "Bob",
    age: 40,
    privileges: ["Доступ в админку",],
};
console.log(person1);

function setColor(color) {
    return "Current color - ".concat(color, ".");
}
console.log(setColor("red")); // Current color - red.
console.log(setColor("blue")); // Current color - blue.


var elCar1 = {
    brand: "Tesla",
    model: "X",
    batteryCapacity: 100,
};
console.log(elCar1);
