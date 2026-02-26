// 1. Создай enum `ProductCategory`, представляющий категории товаров: "Electronics", "Books", "Clothing". 
// Напиши функцию `getCategoryDiscount`, которая принимает `ProductCategory` 
// и возвращает скидку в зависимости от категории (например, 10% на книги, 5% на электронику, 0% на одежду);
var ProductCategory;
(function (ProductCategory) {
    ProductCategory[ProductCategory["Electronics"] = 0] = "Electronics";
    ProductCategory[ProductCategory["Books"] = 1] = "Books";
    ProductCategory[ProductCategory["Clothing"] = 2] = "Clothing";
})(ProductCategory || (ProductCategory = {}));
function getCategoryDiscount(category) {
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
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["Easy"] = "Easy";
    DifficultyLevel["Normal"] = "Normal";
    DifficultyLevel["Hard"] = "Hard";
})(DifficultyLevel || (DifficultyLevel = {}));
function getTimeLimit(level) {
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
var ShippingStatus;
(function (ShippingStatus) {
    ShippingStatus["Pending"] = "Pending";
    ShippingStatus["Shipped"] = "Shipped";
    ShippingStatus["Delivered"] = "Delivered";
    ShippingStatus["Returned"] = "Returned";
})(ShippingStatus || (ShippingStatus = {}));
function getStatusMessage(status) {
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
console.log(getStatusMessage(ShippingStatus.Delivered)); // Shipping status: Delivered
function getStatusMessage2(status) {
    return "Shipping status: ".concat(status);
}
console.log(getStatusMessage2(ShippingStatus.Returned));
