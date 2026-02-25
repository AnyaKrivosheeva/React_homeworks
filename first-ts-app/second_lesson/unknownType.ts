
let data: unknown;

function processValue(value: unknown): void {
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

    else { console.log("Неизвестный тип:", value); }
};

data = "Привет";
processValue(data);

data = 25;
processValue(data);

data = [1, 2, 3];
processValue(data);

data = { name: "Аня", age: 27 };
processValue(data);

data = true;
processValue(data);
