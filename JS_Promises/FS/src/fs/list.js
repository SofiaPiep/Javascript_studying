/*- `list.js` - implement function that prints all array of filenames from `files` folder into console 
(if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)*/
import fs from "fs/promises";

const list = async () => {
  const folderPath =
    "C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs\\files";

  try {
    // Получаем список файлов в папке
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    // Если произошла ошибка, выводим сообщение
    throw new Error("FS operation failed");
  }
};

await list();
