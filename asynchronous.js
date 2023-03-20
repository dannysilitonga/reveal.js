let fs = require('fs')

function printFileContents(error, fileContents){
    if (error) {
        console.log('ERROR!');
    } else {
        console.log(fileContents);
    }
}

fs.readFile('./hello.txt', 'utf-8', printFileContents);
console.log('Hello!');

// let fileContents =fs.readFileSync('./hello.txt', 'utf-8');
// console.log('Hello')
//console.log(fileContents)