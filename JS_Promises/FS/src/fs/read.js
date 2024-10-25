/*- `read.js` - implement function that prints content of the `fileToRead.txt` into console 
(if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)*/

import fs from "fs/promises";

const read = async () => {
  const filePath =
    "C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs\\files\\fileToRead.txt";

  try {
    // Читаем содержимое файла
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    // Если произошла ошибка, выводим сообщение
    throw new Error("FS operation failed");
  }
};

await read();
