// Получаем имя пользователя
let userName = localStorage.getItem("userName");

// Получаем текущую дату
let currentData = new Date();  

// Если пользователь зашел в первый раз,
if (userName === null) {

    // Запрос имени пользователя
    userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя", "Имя");

    // запись в LocalStorage, если не Null
    if (userName !== null) saveLocalStorage(userName);

} else {
    // Если пользователь открывает страницу не впервые 

    // Приветствие пользователя (Alert)
    helloUser(userName);

    // перезапись данных о посещении
    saveLocalStorage(userName);
}

// * Запись данных о посещении пользователя в localStorage
function saveLocalStorage(userName) {
    localStorage.setItem("userName", userName);
    localStorage.setItem("dataVisit", new Date());
}

// * приветствие пользователя
// вывести в alert сообщение вида: «Добрый день, *имя пользователя*! 
// Давно не виделись. В последний раз вы были у нас *дата последнего посещения*» 
function helloUser(userName) {
    let message = `Добрый день, ${userName}! `;

    // * Если пользователь уже заходил ранее - читаем дату
    dataVisit = localStorage.getItem("dataVisit");

    // Дата есть
    if (dataVisit !== null) {
        let dataVisitText = dataToText(dataVisit);
        message = message + `

Давно не виделись. 
В последний раз вы были у нас ${dataVisitText}`
    };

    alert(message);
}


function dataToText(inDate) {

    // * Даты нет - вернуть пустую строку
    if (inDate === null) {
        return '';   
    }
    let dataObj = new Date(inDate);

    let day = dataObj.getDate().toString().padStart(2, '0');
    let month = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    let year = dataObj.getFullYear();
    let hours = dataObj.getHours().toString().padStart(2, '0');
    let minutes = dataObj.getMinutes().toString().padStart(2, '0');

    let formattedDate = `${day}.${month}.${year} в ${hours}:${minutes}`;
        
    return formattedDate;

};


