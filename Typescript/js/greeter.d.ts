declare function greeter1(person: string): string;
declare class Student {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string);
}
interface Person {
    firstName: string;
    lastName: string;
}
declare function greeterOther(person: Person): string;
declare function sum(a: number, b: number): number;
declare class Animal {
    age: number;
    private owner?;
    name: string;
    constructor(theName: string, age: number, owner?: string | undefined);
}
interface ILibrarian {
    doWork: () => void;
}
declare class Librarian implements ILibrarian {
    doWork(): void;
}
export { greeter1, Student, greeterOther, Animal, Librarian, sum };
//# sourceMappingURL=greeter.d.ts.map