/*- `copy.js` - implement function that copies folder `files` files with all its content 
into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` 
has already been created `Error` with message `FS operation failed` must be thrown) 
const copy = async () => {
    // Write your code here 
};

await copy();*/

import { promises as fs } from 'fs';
import path from 'path';

const copy = async () => {
    const sourceDir = path.join('C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs', 'files'); 
    const destDir = path.join('C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs', 'files_copy'); 

    try {
        console.log(`Источник: ${sourceDir}`);
        console.log(`Папка для копирования: ${destDir}`);

        // Проверяем, существует ли папка-источник
        await fs.access(sourceDir);
    } catch (error) {
        console.error('Error: Нет источника');
        throw new Error('FS operation failed'); 
    }

    try {
        // Проверяем, существует ли папка назначения
        await fs.access(destDir);
        console.error('Error: Папка для копирования уже существует');
        throw new Error('FS operation failed'); 
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error; // Если ошибка не связана с отсутствием папки, выбрасываем её
        }
    }

    try {
        // Создаем папку назначения
        await fs.mkdir(destDir);

        // Копируем содержимое директории
        await copyDirectory(sourceDir, destDir);
        console.log('Копирование завершено!');
    } catch (error) {
        console.error('Error during copy operation:', error.message);
        throw new Error('FS operation failed');
    }
};

const copyDirectory = async (src, dest) => {
    const entries = await fs.readdir(src, { withFileTypes: true }); 

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name); 
        const destPath = path.join(dest, entry.name); 

        if (entry.isDirectory()) {
            // Рекурсивно копируем директории
            await fs.mkdir(destPath);
            await copyDirectory(srcPath, destPath); 
        } else {
            // Копируем файлы
            await fs.copyFile(srcPath, destPath);
        }
    }
};

await copy();
