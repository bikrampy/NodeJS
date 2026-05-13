import dotenv from "dotenv";
dotenv.config({ override: true });
// console.log(global);
// console.log(process);
// console.log(process.argv);
// console.log(process.env);

// CJS, "type": "commonjs"
// let {add, sub} = require('./math');
// console.log(add(10, 10));
// console.log(sub(10, 10));
// console.log(__dirname);
// console.log(__filename);

// ESM, "type": "module"
// import { add, sub } from "./math.js";
// try {
//     console.log(add(1));
// } catch (error) {
//     console.log(error.message);
// }
// console.log(sub(1, 2));

// ESM Workaround for __dirname and __filename
// import { fileURLToPath } from "url";
// import path from "path";
// console.log(import.meta.url); // This is a file url, not a normal path
// console.log(fileURLToPath(import.meta.url)); // Converts url -> file path
// console.log(path.dirname(fileURLToPath(import.meta.url))); // Extracts folder path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
