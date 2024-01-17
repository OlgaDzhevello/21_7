// Задание 2.
// Дан образец  JSON-строки: {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}

// Ваша задача — создать JS-объект, который при преобразовании в JSON будет возвращать в качестве результата такую же JSON-строку, как в образце. 
// Получившуюся строку вывести в консоль.


// --------- JS -------------

let jsObject = {
    name: "Anton",
    age: 36,
    skills: ["Javascript","HTML","CSS"],
    salary: 80000,
};

// --------- JSON -------------
let jsonString = JSON.stringify(jsObject)

console.log('jsonString', jsonString);
console.log('jsObject', jsObject);

