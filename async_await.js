let fs = require('fs');

async function readFiles() {
    try {
        let fileContents = await fs.promises.readFile('./hello.txt', 'utf-8');
        console.log('File 1 contents: ' + fileContents);

        let file2Contents = await fs.promises.readFile('./goodbye.txt', 'utf-8');
        console.log('File 2 contents: ' + file2Contents);
    } catch (error) {
        console.log(error);

    }
}

readFiles();