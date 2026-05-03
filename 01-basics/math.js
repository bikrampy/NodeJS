// CJS ->
// function add(a, b) {
//     if (b === undefined) {
//         throw new Error("Please provide a value for b");
//     }
//     return a + b;
// }
// function sub(a, b) {
//     if (b === undefined) {
//         return a;
//     }
//     return a - b;
// }
// module.exports = {
//     add,
//     sub,
// };

// ESM ->
export function add(a, b) {
    if (b === undefined) {
        throw new Error("Please provide a value for b");
    }
    return a + b;
}
export function sub(a, b) {
    if (b === undefined) {
        return a;
    }
    return a - b;
}
