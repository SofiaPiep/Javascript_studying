/*- `rename.js` - implement function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` 
(if there's no file `wrongFilename.txt` or `properFilename.md` 
already exists `Error` with message `FS operation failed` must be thrown)*/

// Импортируем модуль 'fs/promises' для использования асинхронных функций
import fs from "fs/promises";

const rename = async () => {
  const oldFilePath =
    "C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs\\files\\wrongFilename.txt";
  const newFilePath =
    "C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs\\files\\properFilename.md";

  try {
    // Проверяем, существует ли 'wrongFilename.txt'
    await fs.access(oldFilePath);

    // Проверяем, существует ли уже 'properFilename.md'
    try {
      await fs.access(newFilePath);
      throw new Error("FS operation failed");
    } catch (error) {
      // Если ошибка не из-за отсутствия файла, выбрасываем её
      if (error.code !== "ENOENT") throw error;
    }

    // Переименовываем файл
    await fs.rename(oldFilePath, newFilePath);
    console.log(`Файл переименован в ${newFilePath}`);
  } catch (error) {
    // Если произошла ошибка, выводим сообщение
    throw new Error("FS operation failed");
  }
};

await rename();
