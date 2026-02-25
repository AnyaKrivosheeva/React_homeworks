// 1. Реализуй класс `Employee` с приватными свойствами `name`, `position` и защищённым свойством `salary`.
//  Добавь метод для отображения информации о сотруднике. 
// Затем создай класс-наследник `Manager`, который добавит публичное свойство `department` 
// и метод для отображения информации о зарплате только для менеджеров.

class Employee {
    private name: string;
    private position: string;
    protected salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public showInfo(): void {
        console.log(`${this.name}: position - ${this.position}.`);
    }
}

class Manager extends Employee {
    public department: string;

    constructor(name: string, position: string, salary: number, department: string) {
        super(name, position, salary);

        this.department = department;
    }

    public showSalary(): void {
        console.log(`Salary - ${this.salary}`);
    }
}

const manager = new Manager("Anna", "Developer", 2000, "Frontend");

manager.showInfo();   // Anna: position - Developer.
manager.showSalary();   // Salary - 2000




// 2. Создай абстрактный класс `Employee` с абстрактным методом `calculateSalary()`.
//  Затем реализуй два подкласса `FullTimeEmployee` и `Freelancer`. 
// У каждого из них метод `calculateSalary()` должен работать по-разному: 
// для `FullTimeEmployee` учитывать фиксированную месячную зарплату, а для `Freelancer` — почасовую ставку и количество отработанных часов.


abstract class Employee2 {
    abstract calculateSalary(): number;
}


class FullTimeEmployee extends Employee2 {
    private monthlySalary: number;

    constructor(monthlySalary: number) {
        super();

        this.monthlySalary = monthlySalary;
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class Freelancer extends Employee2 {
    private hourlyRate: number;
    private hoursWorked: number;

    constructor(hourlyRate: number, hoursWorked: number) {
        super();

        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const fulltimeEmployee = new FullTimeEmployee(3000);
console.log(fulltimeEmployee.calculateSalary()); // 3000

const freelancer = new Freelancer(25, 160);
console.log(freelancer.calculateSalary());  // 4000



// 3. Создай интерфейс `Dictionary`, представляющий собой словарь, в котором ключами являются строки, а значениями – любые типы данных. 
// Реализуй класс `MultiLanguageDictionary` с методом для добавления слов и переводов на разных языках. 
// Добавь метод для поиска перевода по языку и слову.

interface Dictionary {
    [key: string]: any;
}

class MultiLanguageDictionary {
    private translations: Dictionary = {};

    addWord(word: string, language: string, translation: string): void {
        if (!this.translations[word]) {
            this.translations[word] = {};
        }

        this.translations[word][language] = translation;
    }

    getTranslation(word: string, language: string): string | undefined {
        return this.translations[word]?.[language];
    }
}

const dict = new MultiLanguageDictionary();

dict.addWord("hello", "en", "hello");
dict.addWord("hello", "ru", "привет");
dict.addWord("hello", "es", "hola");

console.log(dict.getTranslation("hello", "ru")); // привет