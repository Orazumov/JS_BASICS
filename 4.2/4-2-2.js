'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, 
// который принимает параметры name и price, сохраните их как свойства объекта. 
// Также объекты типа Product должны иметь метод make25PercentDiscount, который будет 
// уменьшать цену в объекте на 25%.

class Product1 {
    constructor (name, price) {
    this.name = name;
    this.price = price;
    }
    
    makeDiscount = function(discount) {
        this.price = this.price - (this.price / 100 * discount);
    };
    make25PercentDiscount = function() {
        this.price = this.price - (this.price / 100 * 25);
    };
}

const products1 = [
    new Product1('Капуста', 20),
    new Product1('Кабачок', 2),
    new Product1('Манго', 10),
    new Product1('Нектарин', 3),
    new Product1('Персик', 5),
    new Product1('Хурма', 4),
    new Product1('Цукини', 8),
    new Product1('Баклажан', 9),
    new Product1('Редька', 6),
    new Product1('Огурец, помидор', 2)
]

 let j = 1;
console.log('Продукты без скидки:')
for (let product of products1) {
    console.log(`Продукт номер ${i} - ${product.name} цена ${product.price}`)
    j++;
}

products1[0].makeDiscount(10);
products1[2].makeDiscount(45);
products1[3].makeDiscount(41);
products1[4].makeDiscount(89);
products1[9].makeDiscount(90);

 j = 1;
console.log('Продукты со скидкой:')
for (let product of products1) {
    console.log(`Продукт номер ${i} - ${product.name} цена ${product.price}`)
    j++;
}
