//Parametros por Defecto
//Antes de ECMA Script 6
function newFunction(name, age, country) {
    var name = name || 'Fernando';
    var age = age || 34;
    var country = country || 'MX';

    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');


//Template Literals
//Antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Salto de Linea
//Forma Antigua
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
    "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Destructuracion
//Forma Antigua
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

//ES6
let { name } = person;
console.log(name);


//Arreglos de estructura y propagacion
//ES6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


//LET y VAR
//Let solo funciona dentro del scope
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//Const no cambia valor
const a = 'b';
a = 'a';
console.log(a);