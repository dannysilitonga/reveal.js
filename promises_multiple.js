let fs = require('fs');

fs.promises.readFile('./hello.txt', 'utf-8')
    .then(function(fileContents) {
        console.log('File 1 contents: ' + fileContents);
        return fs.promises.readFile('./goodbye.txt', 'utf-8')
    })
    .then(function(file2Contents) {
        console.log('File 2 contents: '+ file2Contents);
    })

    .catch(function(error){
        console.log(error);
    });