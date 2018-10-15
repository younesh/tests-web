interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, hey tsman !!!  " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
