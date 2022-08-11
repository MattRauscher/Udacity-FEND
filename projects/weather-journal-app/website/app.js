
/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = 'de2365502267fb67a358d887ae74e31f&units=metric'
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

// Event listener to add function to existing HTML DOM element
let zipField = document.querySelector('#zip');

/*zipField.addEventListener('input', () => {
    console.log('zipField value ', zipField.value)
    console.log('checking ', (typeof zipField.value));
    zipField.setCustomValidity(/(^\d{5}$)/.test(zipField.value));
    console.log(zipField.checkValidity())
    zipField.checkValidity();
});
zipField.addEventListener('invalid', () => {
        zipField.setCustomValidity('Zips can only contain 5 digits!');
    });*/

document.querySelector('#generate').addEventListener('click', performActions);

/* Function called by event listener */
function buildURL(){
    

    let zipNum = zipField.value;
    let zip = '?zip='+zipNum+',us&appid=';
    return baseURL+zip+apiKey;
    
}
function performActions(e){
    const fullURL = buildURL()
    let feelings = document.querySelector('#feelings').value;
    
    axios.get(fullURL)

    .catch(function (error){
        console.log('error ', error)
    })
    
    .then(resp => {
        console.log('feelings is now ', feelings)
        console.log('data date ', newDate)
        console.log('temp ', resp.data.main.temp)
        axios.post('http://localhost:8000/addWeather', {
            name: resp.data.name,
            content: feelings,
            date: newDate,
            temp: resp.data.main.temp
        }).catch(function (error){
            console.log('error ', error)
        })
    })
    .then(function(){
        updateUI();
    })
    
}

const updateUI = async() => {
    const response = await fetch('http://localhost:8000/all');
    try{
        const allData = await response.json();
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById("temp").innerHTML = allData.temp;
        document.getElementById("content").innerHTML = allData.content;
    } catch(error) {
        console.log('error', error);
    }

    }

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

