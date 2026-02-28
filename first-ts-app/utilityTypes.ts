
// 1. У тебя есть интерфейс `Task`, который имеет обязательные поля `title` и `deadline`, 
// а также опциональные поля `priority` и `description`.
//  Напиши функцию `createTask`, которая принимает объект `Task`, но все поля в нем должны быть обязательными;

interface Task {
    title: string;
    deadline: string;
    priority?: string;
    description?: string;
}

function createTask(task: Required<Task>) {
    console.log(task);
}

const task1: Required<Task> = {
    title: "Помыть посуду",
    deadline: "2026-03-01",
    priority: "high",
    description: "И не забыть про сковородку!!!",
}

createTask(task1);
/* {
  title: 'Помыть посуду',
  deadline: '2026-03-01',
  priority: 'high',
  description: 'И не забыть про сковородку!!!'
}
*/



// 2. Создай тип `ProductCategory`, который будет включать три категории продуктов: `electronics`, `clothing`, и `food`. 
// Затем создай тип `ProductInfo`, который содержит поля `name`, `price`, и `stock`.
//  Используя подходящий utility type, создай объект `products`, который будет связывать каждую категорию с массивом продуктов;

type ProductCategory = "electronics" | "clothing" | "food";

type ProductInfo = {
    name: string;
    price: number;
    stock: number;
}

const products: Record<ProductCategory, ProductInfo[]> = {
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
}

console.log(products.food);
/*
[
  { name: 'Apple', price: 2, stock: 100 },
  { name: 'Milk', price: 1, stock: 80 }
]
*/




// 3. Создай интерфейс `Book` с полями `title`, `author`, `isbn`, `publishedYear`, и `genres`. 
// Напиши функцию `getBookSummary`, которая должна принимать объект книги, используя подходящий utility type,
//  чтобы взять только `title`, `author`, и `publishedYear`. 
// Напиши вторую функцию `sanitizeBookData`, которая удаляет поле `isbn` с помощью подходящего utility type;

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genres: string[];
}

function getBookSummary(book: Pick<Book, "title" | "author" | "publishedYear">) {
    console.log(book.title, book.author, book.publishedYear);
}

function sanitizeBookData(book: Omit<Book, "isbn">) {
    console.log(book);
}

getBookSummary({ title: "1984", author: "George Orwell", publishedYear: 1949 });
// 1984 George Orwell 1949

sanitizeBookData({ title: "Pride and Prejudice", author: "Jane Austen", publishedYear: 1813, genres: ["romantic novel", "satire"] });
/*
{
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  publishedYear: 1813,
  genres: [ 'romantic novel', 'satire' ]
}
*/




// 4. Создай тип для статуса запроса API, который может быть `'loading'`, `'success'`, `'error'`. 
// Напиши функцию, которая принимает тип статуса, исключая `'loading'`. 

type StatusAPI = "loading" | "success" | "error";

function setStatus(status: Exclude<StatusAPI, "loading">) {
    console.log(status);
}

setStatus("success"); // success
setStatus("error");  // error

