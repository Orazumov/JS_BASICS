'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
// Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью 
// конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted 
// со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
    this.edit = function(text) {
        this.text = text;
    };
}

function AttachedPost(author, text, date, highlighted = false) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
    this.makeTextHighlighted = function() {
        this.highlighted = true;
    }

}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

let post1 = new Post('Oleg', 'Строение Земли: земная кора, мантия, ядро', '23.08.2020');
let post2 = new Post('Andryusha', 'Папа, расскажи небылицу', '23.08.2020');
let post3 = new Post('Nastya', 'Аладушки готовы уже давно', '23.08.2020');

console.log(`${post1.author} ${post1.text} ${post1.date}`);
console.log(`${post2.author} ${post2.text} ${post2.date}`);
console.log(`${post3.author} ${post3.text} ${post3.date}`);

post3.edit('Идите кушать');

console.log(`${post1.author} ${post1.text} ${post1.date}`);
console.log(`${post2.author} ${post2.text} ${post2.date}`);
console.log(`${post3.author} ${post3.text} ${post3.date}`);

let post4 = new AttachedPost('Nastya', 'Сливовый джем полностью готов', '23.08.2020');
console.log(`${post4.author} ${post4.text} ${post4.date} ${post4.highlighted}`);

post4.makeTextHighlighted();
post4.edit('Попробуйте пенку');

console.log(`${post4.author} ${post4.text} ${post4.date} ${post4.highlighted}`);
