// 1. Напиши функцию `printDetails`, которая принимает `Person | Organization`.
//  У `Person` есть свойства `name` и `age`, а у `Organization` — свойства `name` и `employees`.
//  Используя операторы `in` и `typeof`, определи тип объекта и выведи соответствующую информацию о нём.
function printDetails(object) {
    if ("age" in object) {
        console.log("Person: ".concat(object.name, ", Age: ").concat(object.age));
    }
    else {
        console.log("Organization: ".concat(object.name, ", Employees: ").concat(object.employees.length));
    }
}
var person = {
    name: "Anna",
    age: 27
};
var organization = {
    name: "Gazprom",
    employees: ["A", "B", "c"]
};
printDetails(person); // Person: Anna, Age: 27
printDetails(organization); // Organization: Gazprom, Employees: 3
// 2. Реализуй функцию `processInput`, которая принимает `string | number | null`.
//  Если значение — это `string`, выведи его в верхнем регистре.
//  Если `number` — умножьте на 10. Если `null`, выведи сообщение о пустом значении.
function processInput(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value * 10);
    }
    else {
        console.log("Значение пусто");
    }
}
processInput("привет"); // ПРИВЕТ
processInput(10); // 100
processInput(null); // Значение пусто
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
function identifyVehicle(vehicle) {
    if (isCar(vehicle)) {
        vehicle.drive();
    }
    else {
        vehicle.pedal();
    }
}
var car = {
    drive: function () {
        console.log("Машина едет");
    }
};
var bicycle = {
    pedal: function () {
        console.log("Велосипед крутит педали");
    }
};
identifyVehicle(car);
identifyVehicle(bicycle);
