// 1. У тебя есть интерфейс `Task`, который имеет обязательные поля `title` и `deadline`, 
// а также опциональные поля `priority` и `description`.
//  Напиши функцию `createTask`, которая принимает объект `Task`, но все поля в нем должны быть обязательными;
function createTask(task) {
    console.log(task);
}
var task1 = {
    title: "Помыть посуду",
    deadline: "2026-03-01",
    priority: "high",
    description: "И не забыть про сковородку!!!",
};
createTask(task1);
var products = {
    electronics: [
        { name: "Laptop", price: 1200, stock: 5 },
        { name: "Earphones", price: 200, stock: 10 }
    ],
    clothing: [
        { name: "T-shirt", price: 25, stock: 50 },
        { name: "Coat", price: 1000, stock: 3 }
    ],
    food: [
        { name: "Apple", price: 2, stock: 100 },
        { name: "Milk", price: 1, stock: 80 }
    ]
};
console.log(products.food);
function getBookSummary(book) {
    console.log(book.title, book.author, book.publishedYear);
}
function sanitizeBookData(book) {
    console.log(book);
}
getBookSummary({ title: "1984", author: "George Orwell", publishedYear: 1949 });
// 1984 George Orwell 1949
sanitizeBookData({ title: "Pride and Prejudice", author: "Jane Austen", publishedYear: 1813, genres: ["romantic novel", "satire"] });
function setStatus(status) {
    console.log(status);
}
setStatus("success");
setStatus("error");
