var fs = require("fs");

fs.writeFile("file.txt", "Text I want in file", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File writing successful");
});

fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(`Data in file ${data}`);
});

var data = "Very big data";
// Create a writable stream
var writerStream = fs.createWriteStream("output.txt");

// Write the data to stream with encoding to be utf8
writerStream.write(data, "UTF8");

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on("finish", function () {
  console.log("Write completed.");
});

writerStream.on("error", function (err) {
  console.log(err.stack);
});

console.log("Program Ended");

// Create a readable stream
var readerStream = fs.createReadStream("file.txt");

// Create a writable stream
var writerStream = fs.createWriteStream("output.txt");

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
