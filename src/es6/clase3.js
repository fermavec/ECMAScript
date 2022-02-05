let name = 'Fer';
let age = 34;

obj = { name: name, age: age };

//ES6
obj2 = { name, age };
console.log(obj2);

//Arrow Function
const names = [
    { name: 'Fer', age: 34 },
    { name: 'Juanita', age: 88 }
];

//Forma Antigua
let listNames = names.map(function(item) {
    console.log(item.name);
});

//ES6
let listnames2 = names.map(item => console.log(item.name));

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Super!');
        } else {
            reject('Nada que');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log('error'));