//jshint esversion:6

const zodiacSign = require('get-zodiac-sign');
var myZodiacSign = zodiacSign(1,7);
console.log(myZodiacSign);

//use the fs function that comes with node
const fs = require("fs");
fs.writeFileSync("file1.txt", myZodiacSign);