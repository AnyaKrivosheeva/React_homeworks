// 1. Реализуй и типизируй функцию `merge`,
// которая будет объединять два объекта, возвращая объект с объединёнными свойствами обоих объектов.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var person = { name: "Anna" };
var job = { position: "Developer" };
console.log(merge(person, job)); // { name: 'Anna', position: 'Developer' }
;
function addItem(dictionary, key, value) {
    dictionary[key] = value;
}
function deleteItem(dictionary, key) {
    delete dictionary[key];
}
var dictionary = {};
addItem(dictionary, "apple", "яблоко");
addItem(dictionary, "cat", "кот");
console.log(dictionary); // { apple: 'яблоко', cat: 'кот' }
deleteItem(dictionary, "cat");
console.log(dictionary); // { apple: 'яблоко' }
// 3. Напиши и типизируй функцию `filterArray`, которая будет фильтровать массив на основе переданного условия. 
// Проверь её работу на массивах разных типов данных.
function filterArray(array, transform) {
    return array.filter(transform);
}
var arrayStr = ["яблоко", "банан", "груша"];
var arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayMix = [2, "hello", 23, 45, "car"];
console.log(filterArray(arrayStr, function (s) { return s.length <= 5; }));
console.log(filterArray(arrayNum, function (n) { return n % 2 === 0; }));
console.log(filterArray(arrayMix, function (i) { return typeof i === "number"; }));
