export class Person {
    // public name: string;
    // public age?: number;
    // private address: string;

    // constructor(name: string, address: string, age?: number) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }

    constructor(
        public name: string,
        private address: string = 'No address',
    ) { }
}

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, 'New York');
    }
}

const ironman = new Hero('Ironman', 45, 'Tony Stark');
console.log(ironman);
