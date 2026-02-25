var product1 = {
    title: 'Молоко',
    price: 100,
    discount: 0.1,
};
function showInfo(product) {
    var finalPrice = product.price * (1 - product.discount);
    console.log("\u0422\u043E\u0432\u0430\u0440: ".concat(product.title));
    console.log("\u0426\u0435\u043D\u0430 \u0431\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438: ".concat(product.price));
    console.log("\u0421\u043A\u0438\u0434\u043A\u0430: ".concat(product.discount * 100, "%"));
    console.log("\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439: ".concat(finalPrice));
}
;
showInfo(product1);

// Товар: Молоко
// Цена без скидки: 100
// Скидка: 10%
// Цена со скидкой: 90
