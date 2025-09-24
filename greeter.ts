function greeter1(person: string) {
  return "Hello, " + person;
}

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
 
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeterOther(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

function sum(a: number, b: number) {
  return a + b;
}

class Animal {
  name: string;
  constructor(theName: string, public age: number, private owner?: string) {
    this.name = theName;
    owner = owner ? owner : "No owner";
  }
}



interface ILibrarian{
  doWork: () => void;
}

class Librarian implements ILibrarian {
  doWork(){
    console.log("Librarian is working");
  } 
}

export {greeter1, Student, greeterOther, Animal, Librarian, sum};