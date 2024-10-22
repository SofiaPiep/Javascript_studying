/*- `create.js` - implement function that creates new file `fresh.txt` with content `I am fresh and young` 
inside of the `files` folder (if file already exists `Error` with message `FS operation failed` must be thrown)*/

import { promises as fs /* переименовываем свойство promises в fs*/ } from 'fs';  // import * as fs from 'fs'; fs.promises.writeFile('file.txt', 'Hello, world!');

import path from 'path';  //модуль для работы с путями

const create = async () => {
    const dirPath = path.join(process.cwd(), 'files');  /* путь к директории 'files'; 
    path.join():
    Используется для объединения нескольких частей пути 
    в один корректный путь, совместимый с любой операционной системой. 
    process.cwd(): Это встроенная функция Node.js, 
    которая возвращает текущую рабочую директорию, в которой выполняется скрипт. 
    'files': Это имя папки, которую мы добавляем к пути. 
    (папка files находится/будет находится внутри текущей рабочей директории).
    dirPath будет содержать полный путь к папке files относительно того места, где был запущен скрипт.
    dirPath = /Users/chaad/Project/files*/
    const filePath = path.join(dirPath, 'fresh.txt');  // Определяем путь к файлу 'fresh.txt'
    const content = 'I am fresh and young';  // Содержимое файла

    try 
    /* синтаксис:
    try 
    {
    // Код, который может вызвать ошибку
} catch (error) {
    // Код для обработки ошибки
}*/ {
        // Создаем папку, если её нет
        await fs.mkdir(dirPath, { recursive: true });

        // Проверяем, существует ли файл
        await fs.access(filePath);
        // Если файл существует, выводится сообщение об ошибке
        throw new Error('FS operation failed');
        /*creating новый объект Error с помощью new Error().
        Конструктор Error принимает опциональный аргумент — строку, 
        которая будет использоваться в качестве сообщения об ошибке (см.ниже).*/
    } catch (error) {
        if (error.code === 'ENOENT') {
            /*ENOENT: код ошибки, "Error NO ENTry" (ошибка: нет входа, "No such file or directory"). 
            Означает, что файл или директория, к которой нужно получить доступ, не существует.*/
            // Если файл не найден, создаем его + есть комманда fs.readFile (https://my-js.org/docs/cheatsheet/fs/)
            await fs.writeFile(filePath, content, 'utf8');
            console.log('Файл успешно создан');
        } else {
            // Если ошибка другая:
            throw error; //прекращение выполнения текущего блока кода и переход в обработчик ошибок, если таковой имеется.
        }
    }
};

// Вызов функции create
(async () => {
    try {
        await create();
    } catch (err) {
        console.error(err.message);
    }
})();

/*!!! Асинхронные функции (синтаксис: async ()) всегда возвращают промис. 
Если вы возвращаете значение из асинхронной функции, это значение будет автоматически обёрнуто в промис.

const myAsyncFunction = async () => {
    return 'Hello, world!';
};
myAsyncFunction().then(console.log); //'Hello, world!'

1. myAsyncFunction возвращает Promise.resolve('Hello, world!')
2. Метод .then() используется для обработки результата, когда промис выполнится успешно. 
Он принимает функцию обратного вызова (callback), которая будет вызвана, когда промис завершится.
3. console.log в качестве аргумента для метода then. 
Это значит, что как только промис выполнится и вернет значение, console.log будет вызван с этим значением.


Внутри этой функции могут использоваться асинхронные операции, такие как await.
Ошибки в асинхронных функциях можно обрабатывать с помощью try...catch

Посмотреть позже:
1. myAsyncFunction() //++
    .then(console.log)//'Hello, world!'//++
    .catch(error => console.error('Произошла ошибка:', error));//Произошла ошибка: [информация об ошибке]//++

2. const callAsyncFunction = async () => {
    const result = await myAsyncFunction();
    console.log(result); // 'Hello, world!'
};

callAsyncFunction(); */

/* Про new Error + console.error
const myFunction = (value) => {
    if (value < 0) {
        throw new Error('Значение не может быть отрицательным!'); // "Создаем" ошибку
    }
    return value;
};
//Обработчик ошибок:
try {
    console.log(myFunction(-1)); // отрицательное значение
} catch (error) {
    console.error('Произошла ошибка:', error.message); 
    // Выводит в консоль: "Произошла ошибка: Значение не может быть отрицательным!"
}*/