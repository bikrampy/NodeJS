import { writeFile, readFile, writeFileSync, readFileSync, appendFile, unlink, mkdir, readdir, rmdir, rm } from "fs";
import os from 'os';

// console.log(os.cpus());

// readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     };
// });
// let text = readFileSync('./test.txt', 'utf-8');
// console.log(text);


// writeFile('./test.txt', 'Hello From Async writeFile()', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('File Written');
// });
// writeFileSync('./test.txt', 'Hello From Sync writeFile()');


// appendFile('./test.txt', `${Math.floor(Math.random() * 10)}`, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('File updated successfully');
// });


// unlink('./test.txt', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('File deleted successfully');
// });


// mkdir('./folder-1/', { recursive: true }, (err) => {
//     throw err;
// });

// readdir('./a', { recursive: true },  (err, files) => {
//     if (err) {
//         throw err;
//     }
//     console.log(files);
// }, );

rm('./a', { recursive: true },(err) => {
    console.log(err);
});