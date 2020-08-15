'use strict';

//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
//переданного значения операции (использовать switch) выполнить одну из арифметических операций
//(использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(arg1, arg2, operation) {

switch (operation) {
    case 'summ':
        return arg1 + arg2;
        break;
    case 'subtraction':
        return arg1 - arg2;
        break;
    case 'multiply':
        return arg1 * arg2;
        break;
    case 'devide':
        return arg1 / arg2;
        break;
    }

}

let array = ['summ', 'subtraction', 'multiply', 'devide']

for (let operation of array) {
    alert(operation)
    let a = +prompt('Введите число а ');
    let b = +prompt('Введите число а ');
    alert(mathOperation(a, b, operation));
}