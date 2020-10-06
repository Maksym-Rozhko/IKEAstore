const getResourse = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};

// getResourse('database/dataBase.json').then((data) => console.log(data)); получение данных
//https://jsonplaceholder.typicode.com/todos/1 free API

const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data,                //  body: JSON.stringify(data) для обработки только в формате json.
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
}

