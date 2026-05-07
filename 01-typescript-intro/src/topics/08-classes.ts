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
        public firstName: string,
        public lastName: string,
        private address: string = 'No address',
    ) { }
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New York');
//     }
// }


export class Hero {

    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
}
const person = new Person('Bruce','Lee', 'China');
const ironman = new Hero('Ironman', 45, 'Tony Stark', person);
console.log(ironman);


console.log(person);
