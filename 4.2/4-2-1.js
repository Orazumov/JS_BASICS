'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, 
// который принимает параметры name и price, сохраните их как свойства объекта. 
// Также объекты типа Product должны иметь метод make25PercentDiscount, который будет 
// уменьшать цену в объекте на 25%.

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.makeDiscount = function(discount) {
        this.price = this.price - (this.price / 100 * discount);
    };
    this.make25PercentDiscount = function() {
        this.price = this.price - (this.price / 100 * 25);
    };
}

const products = [
    new Product('Капуста', 20),
    new Product('Кабачок', 2),
    new Product('Манго', 10),
    new Product('Нектарин', 3),
    new Product('Персик', 5),
    new Product('Хурма', 4),
    new Product('Цукини', 8),
    new Product('Баклажан', 9),
    new Product('Редька', 6),
    new Product('Огурец, помидор', 2)
]

 let i = 1;
console.log('Продукты без скидки:')
for (let product of products) {
    console.log(`Продукт номер ${i} - ${product.name} цена ${product.price}`)
    i++;
}

products[0].makeDiscount(10);
products[2].makeDiscount(45);
products[3].makeDiscount(41);
products[4].makeDiscount(89);
products[9].makeDiscount(90);

 i = 1;
console.log('Продукты со скидкой:')
for (let product of products) {
    console.log(`Продукт номер ${i} - ${product.name} цена ${product.price}`)
    i++;
}
