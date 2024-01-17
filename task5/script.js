// Задание 5.

    const res = document.querySelector('.j-result');
    const btn = document.querySelector('.j-btn');
    
    btn.addEventListener('click', () => {
    
        let userInput = document.querySelector('#userId').value;
    
      // Делаем запрос
      fetch(`https://jsonplaceholder.typicode.com/users/${userInput}/todos`)
        .then((response) => {return response.json();})
        .then((data) => {
            let taskList = '';
    
            // Для каждой задачи формируем элемент списка
            data.forEach(item => {
                if (item.hasOwnProperty("title")) {
                    item.completed ? taskStyle = ` class="completed"` : taskStyle = ""
                    const task = `<li${taskStyle}>${item.title}</li>`;
                    taskList = taskList + task;
                };
            });
    
            // Выводим итоговый результат (найден  -  список задач, не найден  - сообщение об отсутствии пользователя)
            if (data.length === 0) {
                taskList = `Пользователь с ID = ${userInput} не найден`
            } else {
                taskList = '<ol>' + taskList + '</ol>';
            };
            res.innerHTML = taskList;
        })
        .catch(() => { 
            console.log('error');
        });
    });
    