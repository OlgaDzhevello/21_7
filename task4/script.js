// Задание 4.

// генерация случайного числа
const getRandomInt = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
};

// создаем Promise
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = getRandomInt(1, 100);

            if (number % 2 === 0) {
                resolve({
                    message: "Завершено успешно.",
                    data: number,
                });
            } else {
                reject({
                    message: "Завершено с ошибкой.",
                    data: number,
                });
            }
        }, 3000);
    });
}

// Выполняем promise
myPromise()
    // then 
    .then((result) => {
        console.log(result.message);
        return result.data;
    })
    // catch для обработки ошибки
    .catch((error) => {
        console.log(error.message);
        return error.data;
    })
    // Завершающий then
    .then((data) => {
        console.log('Сгенерированное число — ', data);
    });

