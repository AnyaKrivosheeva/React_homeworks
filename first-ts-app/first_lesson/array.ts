
const users: [string, number][] = [
    ["Anya", 27],
    ["Ivan", 30]
];

function showUsers(array: [string, number][]): void {
    array.forEach(([name, age]) => console.log(`Имя: ${name}, Возраст: ${age}`));
}

showUsers(users);


export {};