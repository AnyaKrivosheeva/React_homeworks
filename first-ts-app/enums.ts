
// 1. Создай enum `ProductCategory`, представляющий категории товаров: "Electronics", "Books", "Clothing". 
// Напиши функцию `getCategoryDiscount`, которая принимает `ProductCategory` 
// и возвращает скидку в зависимости от категории (например, 10% на книги, 5% на электронику, 0% на одежду);

enum ProductCategory {
    Electronics,
    Books,
    Clothing
}


function getCategoryDiscount(category: ProductCategory): number {
    switch (category) {
        case ProductCategory.Electronics:
            return 0.05;
        case ProductCategory.Books:
            return 0.1;
        case ProductCategory.Clothing:
            return 0;
        default:
            return 0;
    }
}

console.log(getCategoryDiscount(ProductCategory.Books)); // 0.1



// 2. Создай enum `DifficultyLevel` с несколькими уровнями сложности. 
// Напиши функцию `getTimeLimit`, которая принимает `DifficultyLevel` 
// и возвращает максимальное время (в минутах) для выполнения задачи на каждом уровне сложности;

enum DifficultyLevel {
    Easy = "Easy",
    Normal = "Normal",
    Hard = "Hard"
}

function getTimeLimit(level: DifficultyLevel): number {
    switch (level) {
        case DifficultyLevel.Easy:
            return 10;
        case DifficultyLevel.Normal:
            return 7;
        case DifficultyLevel.Hard:
            return 3;
        default:
            throw new Error("Unknown difficulty level");
    }
}

console.log(getTimeLimit(DifficultyLevel.Normal)); // 7



// 3. Создай enum `ShippingStatus`, представляющий состояния доставки: "Pending", "Shipped", "Delivered", "Returned".
//  Напиши функцию `getStatusMessage`, которая принимает `ShippingStatus` и возвращает сообщение в зависимости от состояния.

enum ShippingStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Returned = "Returned"
}

function getStatusMessage(status: ShippingStatus): string {
    switch (status) {
        case ShippingStatus.Pending:
            return "Shipping status: Pending";
        case ShippingStatus.Shipped:
            return "Shipping status: Shipped";
        case ShippingStatus.Delivered:
            return "Shipping status: Delivered";
        case ShippingStatus.Returned:
            return "Shipping status: Returned";
        default:
            throw new Error("Unknown shipping status");
    }
}

console.log(getStatusMessage(ShippingStatus.Delivered));  // Shipping status: Delivered


// тк enum строковый можно сократить запись
function getStatusMessage2(status: ShippingStatus): string {
    return `Shipping status: ${status}`;
}

console.log(getStatusMessage2(ShippingStatus.Returned)); // Shipping status: Returned
