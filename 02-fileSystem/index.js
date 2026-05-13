import {
    writeFile,
    readFile,
    writeFileSync,
    readFileSync,
    appendFile,
    unlink,
    mkdir,
    readdir,
    rmdir,
    rm,
} from "fs";

// let text = readFileSync("./readFile.txt", "utf-8");
// console.log(text);

// readFile("./readFile.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// writeFileSync("./writeFile.txt", "Hello From writeFileSync()");
// writeFile("./writeFile.txt", "Hello From async writeFile()", (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("File Written");
// });

// appendFile(
//     "./writeFile.txt",
//     `\n${Math.floor(Math.random() * 10)}\n`,
//     (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("File updated successfully");
//     },
// );

// unlink("./writeFile.txt", (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("File deleted successfully");
// });

// mkdir("./newdir/", { recursive: true }, (err) => {
//     throw err;
// });

// readdir("./newdir/", { recursive: true }, (err, files) => {
//     if (err) {
//         throw err;
//     }
//     console.log(files);
//     for (const file of files) {
//         readFile(`./newdir/${file}`, "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//     }
// });

// rm("./newdir/", { recursive: true }, (err) => {
//     console.log(err);
// });
