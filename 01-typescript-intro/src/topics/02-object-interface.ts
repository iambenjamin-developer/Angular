let skillsProblem: (string | number | boolean)[] = ['JavaScript', 'TypeScript', 'Angular', 212, true];

//const es mas liviano que let porque no incluye metodos de asignacion y es mas dificil su manipulacion
const skills: string[] = ['JavaScript', 'TypeScript', 'Angular'];


interface Employee {
    name: string;
    age: number;
    isActive?: boolean;
    skills: string[];
}

const employee1: Employee = {
    name: 'John Doe',
    age: 30,
    //isActive: true,
    skills: ['JavaScript', 'TypeScript', 'Angular']
};

employee1.isActive = true;

console.table(employee1);

export { };