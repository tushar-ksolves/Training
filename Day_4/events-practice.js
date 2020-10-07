var EventEmitter = require("events");
var util = require("util");

function Greetr() {
  this.greeting = "Hello world!";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
  console.log(this.greeting + ": " + data);
  this.emit("greet", data);
};

var greeter1 = new Greetr();

greeter1.on("greet", function (data) {
  console.log("Someone greeted!: " + data);
});

greeter1.greet("Tushar");

const myEmitter = new EventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

myEmitter.on("eventOne", c1); // Register for eventOne
myEmitter.on("eventOne", c2); // Register for eventOne

myEmitter.emit("eventOne");
