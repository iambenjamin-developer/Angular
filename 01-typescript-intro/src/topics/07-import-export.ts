import { taxCalculation, type Product } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    }, 
    {
        description: 'iPad Air',
        price: 250.0
    }
];

const [total, tax] = taxCalculation({tax: 0.15, products: shoppingCart} as TaxCalculationOptions);

console.log('Total', total);
console.log('Tax', tax);