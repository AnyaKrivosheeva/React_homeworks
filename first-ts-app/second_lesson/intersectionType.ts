
type BasicProduct = {
    title: string;
    price: number;
};

type DiscountProduct = {
    discount: number;
};


type FeaturedProduct = BasicProduct & DiscountProduct;


const product1: FeaturedProduct = {
    title: 'Молоко',
    price: 100,
    discount: 0.1,
}



function showInfo(product: FeaturedProduct): void {
    const finalPrice = product.price * (1 - product.discount);

    console.log(`Товар: ${product.title}`);
    console.log(`Цена без скидки: ${product.price}`);
    console.log(`Скидка: ${product.discount * 100}%`);
    console.log(`Цена со скидкой: ${finalPrice}`);
};

showInfo(product1);