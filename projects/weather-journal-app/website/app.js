
/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = 'de2365502267fb67a358d887ae74e31f'
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';


//const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}';


// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', performActions);

/* Function called by event listener */
function buildURL(){
    
    let zipNum = document.querySelector('#zip').value;
    let zip = '?zip='+zipNum+',us&appid=';
    return baseURL+zip+apiKey;
    
}
function performActions(e){
    const fullURL = buildURL()
    let feelings = document.querySelector('#feelings').value;
    
    getWeatherData(fullURL)
    .then(function(data){
        console.log('feelings is now ', feelings)
        console.log('data date ', newDate)
        postWeatherData('/addWeather', {name: data.name, content: feelings, date: newDate, temp: data.main.temp})
    })
    .then(function(){
        updateUI();
    })
    
}

/* Function to GET Web API Data*/
const getWeatherData = async ( url) => {
    const response = await fetch(url)
    try {
        const data = await response.json();
        return data

    } catch (error) {
        console.log('error ', error);
    } 
}

/* Function to POST data */
const postWeatherData = async (url, data = {}) => {
    const response = await fetch(`http://localhost:8000${url}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = response.json();
        console.log('post weather new data ',newData);
        return newData;
    } catch (error){
        console.log('error ', error);
    }
}

/* Function to GET Project Data */
const getProjectData = async (url) => {
    const response = await fetch(`http://localhost:8000${url}`)
    try{
        const data = await response.json();
        return data
    }catch(error){
        console.log('error ',error)
    }
}


const updateUI = async() => {
    const response = await fetch('http://localhost:8000/all');
    try{
        const allData = await response.json();
        document.getElementById("date").innerHTML = allData[allData.length-1].date;
        document.getElementById("temp").innerHTML = allData[allData.length-1].temp;
        document.getElementById("content").innerHTML = allData[allData.length-1].content;
    } catch(error) {
        console.log('error', error);
    }

    }

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

