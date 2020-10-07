// Default Params
var link = function (height = 50, color = "red", url = "http://azat.co") {};

//Template Literals
var name = `Your name is ${first} ${last}.`;
var url = `http://localhost:3000/api/messages/${id}`;

var logUpperCase = function () {
  this.string = this.string.toUpperCase();
  return () => console.log(this.string);
};

//Arrow Functions
logUpperCase.call({ string: "es6 rocks" })();

//Promises.
var wait1000 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
}).then(() => {
  console.log("Yay!");
});

// var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

// wait1000()
//   .then(function() {
//     console.log('Yay!')
//     return wait1000()
//   })
//   .then(function() {
//     console.log('Wheeyee!')
//   })

//Classes

class baseModel {
  constructor(options = {}, data = []) {
    // class constructor
    this.name = "Base";
    this.url = "http://google.com/api";
    this.data = data;
    this.options = options;
  }

  getName() {
    // class method
    console.log(`Class name: ${this.name}`);
  }
}

// import * as service from 'module'
// console.log(servicse.port) // 3000
