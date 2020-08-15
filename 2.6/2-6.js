'use strict';

//Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке. 
//Затем программа должна выдать примерно такое сообщение:
//"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
//"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
//"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
//То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.

let number = prompt('Какое количество денег вы хотели бы положить на счет?');

function ending(number) {

    
 if (number.length == 1) {
    switch (true) {
        case +number == 1 : 
        return 'ль';
        break;
        case +number <= 4 && number >= 2:
        return 'ля';
        break;
        case +number > 4 || number == 0:
        return 'лей';
        break;        
    }
  }
  else if (number.length > 1) {

    let end_number = number.charAt(number.length - 1);
    switch (true) {
        case +end_number == 1 : 
        return 'ль';
        break;
        case +end_number >= 2 && +end_number <= 4:
        return 'ля';
        break;
        case +end_number > 4  || +end_number == 0:
        return 'лей';
        break;        
    }
 
  }
}

alert(`Ваша сумма в ${number} руб${ending(number)} успешно зачислена.`)