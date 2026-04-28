
//Toda funcion en javascript devuelve un undefined, a menos que se le indique lo contrario con un return
function addNumbers(a: number, b: number) {
    return a + b;
}


const result: string = addNumbers(5, 10).toString();


const addNumbersArrow = (a: number, b: number) => a + b;

const addNumbersArrowString = (a: number, b: number): string => {
    return `${a + b}`
}

const result2: number = addNumbersArrow(5, 10);
const result3: string = addNumbersArrowString(5, 10);


console.log({ result, result2, result3 });

//Los parametros siempre se ponen en orden, primero los obligatorios, luego los opciones y por ultimo los opcioneles con valores por default
//Si hay más de 3 arumentos, es recomendable usar un objeto como parametro para mejorar la legibilidad del codigo
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;

}

const multiplyResult = multiply(5);

console.log({ multiplyResult });
export { };