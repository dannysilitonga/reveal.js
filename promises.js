let fs = require('fs');

fs.promises.readFile('./hello.txt', 'utf-8')
    .then(function(fileContents) {
        console.log(fileContents);
        console.log('Hello!');
    })

    .catch(function(error){
        console.log(error);
    });