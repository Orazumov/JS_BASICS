'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
// Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью 
// конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted 
// со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.

class Post1 {
  constructor (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  };
    
    
    edit = function(text) {
        this.text = text;
    };
}


class AttachedPost1 extends Post1 {
    
    constructor (author, text, date, highlighted = false) {
    super(author, text, date);
    this.highlighted = highlighted;
    }
    
    makeTextHighlighted = function() {
        this.highlighted = true;
    }
}

let post5 = new Post1('Oleg', 'Строение Земли: земная кора, мантия, ядро', '23.08.2020');
let post6 = new Post1('Andryusha', 'Папа, расскажи небылицу', '23.08.2020');
let post7 = new Post1('Nastya', 'Аладушки готовы уже давно', '23.08.2020');

console.log(`${post5.author} ${post5.text} ${post5.date}`);
console.log(`${post6.author} ${post6.text} ${post6.date}`);
console.log(`${post7.author} ${post7.text} ${post7.date}`);

post7.edit('Идите кушать');

console.log(`${post5.author} ${post5.text} ${post5.date}`);
console.log(`${post6.author} ${post6.text} ${post6.date}`);
console.log(`${post7.author} ${post7.text} ${post7.date}`);

let post8 = new AttachedPost('Nastya', 'Сливовый джем полностью готов', '23.08.2020');
console.log(`${post8.author} ${post8.text} ${post8.date} ${post8.highlighted}`);

post8.makeTextHighlighted();
post8.edit('Попробуйте пенку');

console.log(`${post8.author} ${post8.text} ${post8.date} ${post8.highlighted}`);
