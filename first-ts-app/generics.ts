
// 1. Реализуй и типизируй функцию `merge`,
// которая будет объединять два объекта, возвращая объект с объединёнными свойствами обоих объектов.

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person = { name: "Anna" };
const job = { position: "Developer" };

console.log(merge(person, job));  // { name: 'Anna', position: 'Developer' }




// 2. Создай интерфейс `Dictionary`, который будет хранить пары ключ-значение. 
// Напиши функцию для добавления и удаления элементов из `Dictionary`.

interface Dictionary<V> {
    [key: string]: V;
};

function addItem<V>(dictionary: Dictionary<V>, key: string, value: V): void {
    dictionary[key] = value;
}

function deleteItem<V>(dictionary: Dictionary<V>, key: string): void {
    delete dictionary[key];
}

const dictionary: Dictionary<string> = {};

addItem(dictionary, "apple", "яблоко");
addItem(dictionary, "cat", "кот");

console.log(dictionary);  // { apple: 'яблоко', cat: 'кот' }

deleteItem(dictionary, "cat");

console.log(dictionary);  // { apple: 'яблоко' }




// 3. Напиши и типизируй функцию `filterArray`, которая будет фильтровать массив на основе переданного условия. 
// Проверь её работу на массивах разных типов данных.

function filterArray<T>(array: T[], transform: (item: T) => boolean): T[] {
    return array.filter(transform);
}

const arrayStr: string[] = ["яблоко", "банан", "груша"];
const arrayNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayMix: (string | number)[] = [2, "hello", 23, 45, "car"];

console.log(filterArray(arrayStr, (s) => s.length <= 5));  // [ 'банан', 'груша' ]
console.log(filterArray(arrayNum, (n) => n % 2 === 0));  // [ 2, 4, 6, 8, 10 ]
console.log(filterArray(arrayMix, (i) => typeof i === "number"));  // [ 2, 23, 45 ]