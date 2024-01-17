/** Задание 6 по модулю 21.7 */

// Находим input для page и limit
const pageNode = document.querySelector('#page');
const limitNode = document.querySelector('#limit');

// Ищем ноду для вставки результата запроса 
const resultNode = document.querySelector('.j-result');

// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn');

// считываем данные из localStorage и помещаем в инпуты
let page = localStorage.getItem("page")
pageNode.value = page;
let limit = localStorage.getItem("limit")
limitNode.value = limit;

// подгружаем данные
if ((page !== null) && (limit !== null)) getRequest(page, limit); 

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {

    // Переводим в число
    page = parseInt(pageNode.value);
    limit = parseInt(limitNode.value);

    // Проверяем на валидность введенные данные
    let errorInput = checkInput (page, limit);

    if ( !errorInput ) {
        // подгружаем данные
        getRequest(page, limit); 
        // сохраняем в localStorage
        localStorage.setItem("page", page);
        localStorage.setItem("limit", limit);
    } else {
        // отображаем сообщение об ошибке
        resultNode.innerHTML = errorInput;
    };
});

/** функция запроса, обработки и вывода данных
*/
function getRequest(page, limit) {

    // Делаем запрос  https://picsum.photos/v2/list?page=1&limit=10
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}/todos`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayResult(data);
        })
        .catch((error) => {
            console.log('Fetch', error);
            resultNode.innerHTML = 'Ошибка запроса';
        });
}

/**
* Функция обработки полученного результата
* apiData - объект с результатом запроса
*/
function displayResult(apiData) {

    let cards = '';
    console.log('start cards', cards);

    // Для каждого элемента формируем карточку
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
            <img
            src="${item.download_url}"
            class="card-image"
            />
            <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    });

    console.log('end cards', cards);
        
    resultNode.innerHTML = cards;
}



/** функция проверки правильности ввода данных - 
*   возвращает строку ошибки или пустую строку в случае удачи
*/
function checkInput(page, limit) {

    // проверим лимиты и страницы на диапазон
    let pageTrue = isNum(page, 1, 10);
    let limitTrue = isNum(limit, 1, 10);

    // пусто - данные верны
    let result = '';

    // неверные данные
    if (!pageTrue && !limitTrue) {
        result = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else {
        if (!pageTrue) result = 'Номер страницы вне диапазона от 1 до 10';
        if (!limitTrue) result = 'Лимит вне диапазона от 1 до 10';
    };

    return result
}

/** Проверка данных на число и попадание в диапазон 
 *  TRUE - проверка пройдена,  FALSE - нет
 */
function isNum(number, min, max) {

    if (!isNaN(number) && Number.isInteger(number) && number >= min && number <= max) {
        return true;
    }
    return false
}

