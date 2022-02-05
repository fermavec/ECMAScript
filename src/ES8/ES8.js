//Object .Edges
const entries = Object.entries(DATA);
console.log(entries);

//Object values
const DATA = {
    frontend: 'Fernando',
    backend: 'Carlos',
    design: 'Javier'
};

const values = Object.values(DATA);
console.log(values);

//Padding
const string = 'Hello';
console.log(string.padStart(11, 'World '));
console.log(string.padEnd(11, 'World '));

//Async
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World', 3000)): reject(new Error('Esto es un error'))
    });
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();