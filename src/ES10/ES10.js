//matriz aplanada
let array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3, 4]]];

console.log(array.flat(2));

//Flat map
let array2 = [1, 2, 3, 4];
console.log(array2.flatMap(value => [value, value * 2]));

//Eliminar Espacios
let hello = '       Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'Hello World             ';
console.log(hello);
console.log(hello.trimEnd());

//From Entries
let entries = [
    ["name", "Fernando"],
    ["age", 34]
];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo
let mySimbol = 'My Simbol';
let symbol = Symbol(mySimbol);
console.log(Symbol.description);