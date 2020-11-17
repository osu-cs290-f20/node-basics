var fs = require('fs');

fs.readFile('./hello.js', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }
  console.log("== file contents:", data);
});

console.log("==========================");
console.log("== This is after readFile()");
console.log("==========================");

var contents = fs.readFileSync('./hello.js', 'utf8');
console.log("\n\n== contents:", contents);
console.log("==========================");
console.log("== This is after readFileSync()");
console.log("==========================");
