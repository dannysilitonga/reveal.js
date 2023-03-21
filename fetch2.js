const fetch = require("node-fetch")

const url = 'https://gist.github.com/dannysilitonga/ceef49f0dea5697b97ed0cc36fe39223';
//const url = "https://api.github.com"

async function fetchRequest() {
    let response = await fetch(url);
    let data = await response.json(); 
    console.log(data)
}

fetchRequest();