const fetch = require("node-fetch")

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
const url2 = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY'

async function fetchRequest() {
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data from first link")
    console.log(data);

    let response2 = await fetch(url2);
    let data2 = await response2.json();
    console.log("\nData from second link") 
    console.log(data2);
}

fetchRequest();
