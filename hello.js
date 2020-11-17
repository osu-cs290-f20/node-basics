console.log("Hello world!");

var array = [ 1, 2, 3, 4 ];
array.forEach(function(elem) {
  console.log("== elem:", elem);
});

console.log("== process.env.SOME_ENVIRONMENT_VARIABLE:", process.env.SOME_ENVIRONMENT_VARIABLE);
console.log("== __dirname:", __dirname);

var circle = require('./lib/circle');
console.log("== circle:", circle);
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));

// var importedValue = require('./circle');
// console.log("== importedValue:", importedValue);
// console.log("== importedValue(5):", importedValue(5));

console.log("== Object.keys(circle):", Object.keys(circle));
Object.keys(circle).forEach(function(key) {
  console.log("  -- circle[" + key + "]:", circle[key]);
});

var figlet = require('figlet');
figlet('Hello CS 290!', function (err, data) {
  if (!err) {
    console.log(data);
  }
});
