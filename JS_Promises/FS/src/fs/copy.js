/*- `copy.js` - implement function that copies folder `files` files with all its content 
into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` 
has already been created `Error` with message `FS operation failed` must be thrown)
const copy = async () => {
    // Write your code here 
};

await copy();*/
import { promises as fs /* переименовываем свойство promises в fs*/ } from 'fs';  // import * as fs from 'fs'; fs.promises.writeFile('file.txt', 'Hello, world!');
import path from 'path';  //модуль для работы с путями


const copy = async () => {
    const sourceDir = path.join(__dirname, 'files'); // Путь к исходной папке
    const destDir = path.join(__dirname, 'files_copy'); // Путь к папке назначения

    try {
        // Проверяем, существует ли исходная папка
        await fs.access(sourceDir);
    } catch {
        throw new Error('FS operation failed'); // Если нет, выбрасываем ошибку
    }

    // Проверяем, существует ли папка назначения
    try {
        await fs.access(destDir);
        throw new Error('FS operation failed'); // Если да, выбрасываем ошибку
    } catch {
        // Папка не существует, продолжаем
    }

    // Создаём папку назначения
    await fs.mkdir(destDir);

    // Читаем все файлы и папки в исходной папке
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });

    // Копируем каждую запись
    for (const entry of entries) {
        const srcPath = path.join(sourceDir, entry.name); // Путь к исходному элементу
        const destPath = path.join(destDir, entry.name); // Путь к элементу назначения

        if (entry.isDirectory()) {
            // Если элемент - папка, копируем рекурсивно
            await fs.mkdir(destPath);
            await copyDirectory(srcPath, destPath);
        } else {
            // Если элемент - файл, копируем его
            await fs.copyFile(srcPath, destPath);
        }
    }
};

// Функция для рекурсивного копирования папок
const copyDirectory = async (src, dest) => {
    const entries = await fs.readdir(src, { withFileTypes: true }); // Читаем записи в папке

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name); // Путь к исходному элементу
        const destPath = path.join(dest, entry.name); // Путь к элементу назначения

        if (entry.isDirectory()) {
            await fs.mkdir(destPath); // Создаём папку в назначении
            await copyDirectory(srcPath, destPath); // Рекурсивно копируем
        } else {
            await fs.copyFile(srcPath, destPath); // Копируем файл
        }
    }
};

await copy(); // Вызываем функцию для выполнения копирования

