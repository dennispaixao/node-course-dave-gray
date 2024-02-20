const path = require("path");
const math = require("./math");

console.log("Hello world");

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(math.sub(2, 2));
console.log(math.add(2, 2));
