export function whatsMyType<T>(argument: T): T {
    return argument;
}

let soyString = whatsMyType('Hola Mundo');
let soyNumber = whatsMyType(42);
let soyBoolean = whatsMyType(true);
let soyArray = whatsMyType([1, 2, 3]);
let soyObject = whatsMyType({ name: 'John', age: 30 });

console.log(soyString.split(' '));
console.log(soyNumber.toFixed(2));
console.log(soyBoolean.valueOf());
console.log(soyArray.join('-'));
console.log(soyObject.name);