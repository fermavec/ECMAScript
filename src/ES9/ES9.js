//Operadores de reposo
const obj = {
    name: 'Fer',
    age: 34,
    country: 'MX'
};

let { name, ...all } = obj;
console.log(name, all);

//Propiedades de propagacion
//Operadores de reposo
const obj2 = {
    name: 'Fer',
    age: 34,
};

const obj3 = {
    ...obj2,
    country: 'MX'
};

console.log(obj3);

//Promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('HelloWorld'), 3000): reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);