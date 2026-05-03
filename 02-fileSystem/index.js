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

// let text = readFileSync("./test.txt", "utf-8");
// console.log(text);

// readFile("./test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// writeFileSync("./test.txt", "Hello From writeFileSync()");
// writeFile("./test.txt", "Hello From writeFile()", (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("File Written");
// });

// appendFile("./test.txt", `${Math.floor(Math.random() * 10)}\n`, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File updated successfully");
// });

// unlink("./test.txt", (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("File deleted successfully");
// });

// mkdir("./myfolder/", { recursive: true }, (err) => {
//     throw err;
// });

// readdir("./myfolder/", { recursive: true }, (err, files) => {
//     if (err) {
//         throw err;
//     }
//     console.log(files);
// });

// rm("./myfolder/", { recursive: true }, (err) => {
//     console.log(err);
// });
