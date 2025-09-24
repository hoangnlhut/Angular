function greeter1(person) {
    return "Hello, " + person;
}
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeterOther(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function sum(a, b) {
    return a + b;
}
class Animal {
    constructor(theName, age, owner) {
        this.age = age;
        this.owner = owner;
        this.name = theName;
        owner = owner ? owner : "No owner";
    }
}
class Librarian {
    doWork() {
        console.log("Librarian is working");
    }
}
export { greeter1, Student, greeterOther, Animal, Librarian, sum };
//# sourceMappingURL=greeter.js.map