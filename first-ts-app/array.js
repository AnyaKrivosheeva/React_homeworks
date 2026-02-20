"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [
    ["Anya", 27],
    ["Ivan", 30]
];
function showUsers(array) {
    array.forEach(function (_a) {
        var name = _a[0], age = _a[1];
        return console.log("\u0418\u043C\u044F: ".concat(name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(age));
    });
}

showUsers(users);

// Имя: Anya, Возраст: 27
// Имя: Ivan, Возраст: 30