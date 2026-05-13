import os from "os";
console.log(os.cpus());
console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join -> builds relative path
const filePath = path.join("logs", "log.txt"); // data/file.txt
console.log(filePath);

const filePath2 = path.join(__dirname, "logs", "log.txt");
console.log(filePath2);
fs.appendFile(filePath2, `${Date.now()}\n`, (err) => {
    if (!err) {
        console.log("File Updated Successfully.");
    } else {
        console.log(err);
    }
});

// resolve -> builds absolute path
const absPath = path.resolve("logs", "log.txt");
console.log(absPath); // /Users/bikramsaha/Downloads/Web_Projects/Practice-Materials/NodeJS/03-pathModule/data/file.txt

console.log(path.basename("/folder/file.txt")); // file.txt
console.log(path.dirname("/folder/file.txt")); // /folder
console.log(path.extname("file.txt")); // .txt
