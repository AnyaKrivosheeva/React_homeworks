// мокапы для базы данных и серверных функций

let COMMENTS_DB = [
    { id: 1, text: "Первый комментарий" },
    { id: 2, text: "Второй комментарий" },
];

export async function fetchComments() {
    // имитация сетевого запроса
    return new Promise(res => setTimeout(() => res([...COMMENTS_DB]), 500));
};

export async function saveToDB(text) {
    // имитация отправки данных в бд
    return new Promise(res => {
        setTimeout(() => {
            COMMENTS_DB.push({ id: COMMENTS_DB.length + 1, text });
            res();
        }, 500);
    });
};