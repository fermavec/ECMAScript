export function hello() {
    console.log('Hola Mundo');
};

//Big int  2**53
const aBigNumber = 9007199254740991 n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//PromiseAll Settle
const promise1 = new Promise((resolve, reject) => reject("Rechazando"));
const promise2 = new Promise((resolve, reject) => resolve("Resuelto"));
const promise3 = new Promise((resolve, reject) => resolve("Resuelto 1"));
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//Global this
console.log(window);
console.log(globalThis);

//Operador Null
const food = null ? ? 'Default String';
console.log(food);

//Optional Chanin
const user = {};

console.log(user ? .profile ? .email);

if (user ? .profile ? .email) {
    console.log('Tienes email');
} else {
    console.log('fail');
}