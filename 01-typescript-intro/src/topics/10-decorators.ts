function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        myProperty = 'Hello World';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Hello Worlsssd';
    print() {
        console.log(this.myProperty);
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);