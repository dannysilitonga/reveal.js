let fs = require('fs'); 

let fileContents = fs.readFileSync('./hello.txt', 'utf-8');

console.log(fileContents);