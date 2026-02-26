
// 1. Напиши функцию `printDetails`, которая принимает `Person | Organization`.
//  У `Person` есть свойства `name` и `age`, а у `Organization` — свойства `name` и `employees`.
//  Используя операторы `in` и `typeof`, определи тип объекта и выведи соответствующую информацию о нём.

type Person = {
    name: string;
    age: number;
}

type Organization = {
    name: string;
    employees: string[];
}

function printDetails(object: Person | Organization): void {
    if ("age" in object) {
        console.log(`Person: ${object.name}, Age: ${object.age}`);
    } else {
        console.log(`Organization: ${object.name}, Employees: ${object.employees.length}`);
    }
}

const person: Person = {
    name: "Anna",
    age: 27
}

const organization: Organization = {
    name: "Gazprom",
    employees: ["A", "B", "c"]
}

printDetails(person);  // Person: Anna, Age: 27
printDetails(organization); // Organization: Gazprom, Employees: 3



// 2. Реализуй функцию `processInput`, которая принимает `string | number | null`.
//  Если значение — это `string`, выведи его в верхнем регистре.
//  Если `number` — умножьте на 10. Если `null`, выведи сообщение о пустом значении.

function processInput(value: string | number | null) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(value * 10);
    } else {
        console.log("Значение пусто")
    }
}

processInput("привет");   // ПРИВЕТ
processInput(10);  // 100
processInput(null);  // Значение пусто




// 3. Создай интерфейсы `Car` и `Bicycle` с разными методами, и напиши предикат типа для каждого из них. 
// Затем реализуй функцию `identifyVehicle`, которая принимает `Car | Bicycle` и вызывает методы,
//  соответствующие определённому типу объекта.

interface Car {
    drive: () => void;
}

interface Bicycle {
    pedal: () => void;
}

function isCar(vehicle: Car | Bicycle): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
}

function identifyVehicle(vehicle: Car | Bicycle): void {
    if (isCar(vehicle)) {
        vehicle.drive();
    } else {
        vehicle.pedal();
    }
}

const car: Car = {
    drive() {
        console.log("Машина едет");
    }
}

const bicycle: Bicycle = {
    pedal() {
        console.log("Велосипед крутит педали");
    }
}

identifyVehicle(car);  // Машина едет
identifyVehicle(bicycle);  // Велосипед крутит педали