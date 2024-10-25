/*- `delete.js` - implement function that deletes file `fileToRemove.txt` 
(if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)*/
import fs from "fs/promises";

const remove = async () => {
  const filePath =
    "C:\\Users\\chaad\\OneDrive\\Documents\\RedRover\\JS\\Javascript_studying\\JS_Promises\\FS\\src\\fs\\files\\fileToRemove.txt";

  try {
    // Проверяем, существует ли файл
    await fs.access(filePath);

    // Удаляем файл
    await fs.unlink(filePath);
    console.log(`Файл ${filePath} был успешно удален.`);
  } catch (error) {
    // Если файл не найден, выбрасываем ошибку
    throw new Error("FS operation failed");
  }
};

await remove();
