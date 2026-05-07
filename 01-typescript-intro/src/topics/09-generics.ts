export function whatsMyType<T>(argument: T): T {
    return argument;
}

let soyString = whatsMyType<string>('Hola Mundo');
let soyNumber = whatsMyType<number>(42);
let soyBoolean = whatsMyType<boolean>(true);
let soyArray = whatsMyType<number[]>([1, 2, 3]);
let soyObject = whatsMyType<{ name: string; age: number }>({ name: 'John', age: 30 });

console.log(soyString.split(' '));
console.log(soyNumber.toFixed(2));
console.log(soyBoolean.valueOf());
console.log(soyArray.join('-'));
console.log(soyObject.name);