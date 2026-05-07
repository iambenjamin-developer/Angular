export class Person{
    public name: string ;
    public age?: number;
    private address: string;
    
    constructor(){
        this.name = 'Benjamin';
        this.age = 30;
        this.address = 'Main St';   
    }
    // constructor(name: string, age: number, address: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }
}

const ironman = new Person();
console.log(ironman.address);
