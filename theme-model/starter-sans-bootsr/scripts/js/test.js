function greeter(person) {
    return "Hello, hey tsman !!!  " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
