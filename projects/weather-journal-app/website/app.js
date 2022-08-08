/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = 'de2365502267fb67a358d887ae74e31f'
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}';
//const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}';
const zip = 0;
const countryCodye = 0;

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('submit', function(){
    console.log("Submit !")

})

/* Function called by event listener */
async function fetchProjectData(){
    let response = await fetch(projectData);
}

/* Function to GET Web API Data*/
const getWeatherData = async ( url = 'https://api.openweathermap.org/data/2.5/weather?zip=75204&appid=de2365502267fb67a358d887ae74e31f')

/* Function to POST data */


/* Function to GET Project Data */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

