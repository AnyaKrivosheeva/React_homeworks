//1. Определи два типа: `Admin` и `User`, где у `Admin` есть поле `privileges` (массив строк), 
// а у `User` — поля `name` (строка) и `age` (число). 
// Создай пересечение этих типов в типе `AdminUser` и определи объект на основе этого типа;

type Admin = { privileges: string[] };
type User = { name: string; age: number; };

type AdminUser = Admin & User;

const person1: AdminUser = {
    name: "Bob",
    age: 40,
    privileges: ["Доступ в админку",],
}

console.log(person1);
// { name: 'Bob', age: 40, privileges: [ 'Доступ в админку' ] }





// 2. Создайте тип `Color` как объединение литеральных значений: `"red" | "green" | "blue"`. 
// Затем создайте функцию `setColor`, которая возвращает строку, в зависимости от переданного цвета;

type Color = "red" | "green" | "blue";

function setColor(color: Color): string {
    return `Current color - ${color}.`;
}

console.log(setColor("red"));  // Current color - red.
console.log(setColor("blue")); // Current color - blue.
//  setColor("yellow");  - IDE сразу выводит ошибку



// 3. Создай два интерфейса: `Car` и `ElectricCar`. Поля придумайте сами. 
// Пусть `ElectricCar` расширяет `Car` и добавляет поле `batteryCapacity`.
//  Создайте объект электромобиля, типизируя его полученным интерфейсом.

interface Car {
    brand: string;
    model: string;
}

interface ElectricCar extends Car {
    batteryCapacity: number;
}

const elCar1: ElectricCar = {
    brand: "Tesla",
    model: "X",
    batteryCapacity: 100,
}

console.log(elCar1);  // { brand: 'Tesla', model: 'X', batteryCapacity: 100 }