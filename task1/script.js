// Задание 1.

// --------- XML -------------

const xmlList = `
<list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;

const parser = new DOMParser();

/* Получение данных */

// Парсинг XML
const xmlDoc = parser.parseFromString(xmlList, "text/xml");

const list = Array.from(xmlDoc.querySelectorAll("student")).map(studentNode => {
    const nameNode = studentNode.querySelector("name");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");
    const ageNode = studentNode.querySelector("age");
    const profNode = studentNode.querySelector("prof");
    const lang = nameNode.getAttribute('lang');

    const result = {
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: lang,
    };

    return result;
});

console.log('list', list);

