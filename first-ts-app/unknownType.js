var data;

function processValue(value) {
    if (typeof value === "string") {
        console.log("Строка:", value);
    }
    else if (typeof value === "number") {
        console.log("Число:", value);
    }
    else if (Array.isArray(value)) {
        console.log("Массив, длина:", value.length);
    }
    else if (typeof value === "object" && value !== null) {
        console.log("Объект:", Object.keys(value));
    }
    else {
        console.log("Неизвестный тип:", value);
    }
}

data = "Привет";
processValue(data);  // Строка: Привет

data = 25;
processValue(data);  // Число: 25

data = [1, 2, 3];
processValue(data);  // Массив, длина: 3

data = { name: "Аня", age: 27 };
processValue(data);  // Объект: [ 'name', 'age' ]

data = true;
processValue(data);  // Неизвестный тип: true
