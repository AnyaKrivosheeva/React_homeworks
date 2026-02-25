// 1. Реализуй класс `Employee` с приватными свойствами `name`, `position` и защищённым свойством `salary`.
//  Добавь метод для отображения информации о сотруднике. 
// Затем создай класс-наследник `Manager`, который добавит публичное свойство `department` 
// и метод для отображения информации о зарплате только для менеджеров.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.showInfo = function () {
        console.log("".concat(this.name, ": position - ").concat(this.position, "."));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, position, salary, department) {
        var _this = _super.call(this, name, position, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.showSalary = function () {
        console.log("Salary - ".concat(this.salary));
    };
    return Manager;
}(Employee));
var manager = new Manager("Anna", "Developer", 2000, "Frontend");
manager.showInfo(); // Anna: position - Developer.
manager.showSalary(); // Salary - 2000



// 2. Создай абстрактный класс `Employee` с абстрактным методом `calculateSalary()`.
//  Затем реализуй два подкласса `FullTimeEmployee` и `Freelancer`. 
// У каждого из них метод `calculateSalary()` должен работать по-разному: 
// для `FullTimeEmployee` учитывать фиксированную месячную зарплату, а для `Freelancer` — почасовую ставку и количество отработанных часов.
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(monthlySalary) {
        var _this = _super.call(this) || this;
        _this.monthlySalary = monthlySalary;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.monthlySalary;
    };
    return FullTimeEmployee;
}(Employee2));
var Freelancer = /** @class */ (function (_super) {
    __extends(Freelancer, _super);
    function Freelancer(hourlyRate, hoursWorked) {
        var _this = _super.call(this) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    Freelancer.prototype.calculateSalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return Freelancer;
}(Employee2));
var fulltimeEmployee = new FullTimeEmployee(3000);
console.log(fulltimeEmployee.calculateSalary()); // 3000
var freelancer = new Freelancer(25, 160);
console.log(freelancer.calculateSalary()); // 4000




var MultiLanguageDictionary = /** @class */ (function () {
    function MultiLanguageDictionary() {
        this.translations = {};
    }
    MultiLanguageDictionary.prototype.addWord = function (word, language, translation) {
        if (!this.translations[word]) {
            this.translations[word] = {};
        }
        this.translations[word][language] = translation;
    };
    MultiLanguageDictionary.prototype.getTranslation = function (word, language) {
        var _a;
        return (_a = this.translations[word]) === null || _a === void 0 ? void 0 : _a[language];
    };
    return MultiLanguageDictionary;
}());
var dict = new MultiLanguageDictionary();
dict.addWord("hello", "en", "hello");
dict.addWord("hello", "ru", "привет");
dict.addWord("hello", "es", "hola");
console.log(dict.getTranslation("hello", "ru")); // привет
