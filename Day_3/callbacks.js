// function additionAsync(a, b, callback) {
//   setTimeout(() => callback(a + b), 100);
// }

// console.log("before");
// additionAsync(1, 2, (result) => console.log(`Result: ${result}`));
// console.log("after");

// This is synchronous.
// function processData1() {
//   let data = 0;
//   setTimeout(() => {
//     console.log("wait for 2 secs");
//   }, 2000);
//   data += 1;
//   return data;
// }
// console.log("==----" + processData1());

var myCallback = function (data) {
  console.log("got data: " + data);
};

var usingItNow = function (callback) {
  callback("get it?");
};

usingItNow(myCallback);
