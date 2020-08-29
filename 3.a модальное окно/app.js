// 1. получить объект модального окна с классом .wrap
const window_obj = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна
const span_tag = document.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна
const button_obj = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
    
button_obj.addEventListener('click', clickHandler);


function clickHandler() {
    if (window_obj.classList.contains('hidden')) {
        window_obj.classList.remove('hidden');
    }
    else {
        window_obj.classList.add('hidden');
    }
    
};

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden

span_tag.addEventListener('click', clickHandler);



