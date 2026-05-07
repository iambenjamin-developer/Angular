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

const ironman = new Person('Benjamin');
console.log(ironman);
