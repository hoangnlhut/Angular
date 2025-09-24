import * as greeter from './greeter.js';

var user = "Jane User";

let hoang = greeter.greeter1(user);

let userOther = new greeter.Student("Jane", "M.", "User");

document.body.textContent = greeter.greeterOther(userOther);

let example = new greeter.Animal("Cat", 3);
example.name = "Dog";