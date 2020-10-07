var emptyObject = {}; // object with no properties or methods

// var person = { firstName: "John" }; // object with single property

// object with single method
var message = {
  showMessage: function (val) {
    console.log(val);
  },
};

// object with properties & method
var person = {
  firstName: "James",
  lastName: "Bond",
  age: 15,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

person.firstName; // returns James
person.lastName; // returns Bond

console.log(person["firstName"]); // returns James
console.log(person["lastName"]); // returns Bond

console.log(person.getFullName());

let website = {
  title: "JavaScript",
  url: "https://www.tushar.com",
  tags: ["es6", "javascript", "node.js"],
};

for (const key in website) {
  console.log(website[key]);
}
