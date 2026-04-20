import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join -> relative path
const filePath = path.join(__dirname, 'data', 'file.txt');
fs.appendFile(filePath, `${Date.now()}\n`, (err) => {
    if (!err) {
        console.log('File Uploaded Successfully.')
    } else {
        console.log(err);
    }
})
console.log(filePath);

// resole -> absolute path
const absPath = path.resolve('data', 'file.txt');
console.log(absPath);

console.log(path.basename('/folder/file.txt'));
console.log(path.dirname('./data/image/shrey.png'));
console.log(path.extname('file.txt'));