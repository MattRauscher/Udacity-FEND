// Setup empty JS object to act as endpoint for all routes
const projectData =[];

const express =require('express');
const bodyParser = require('body-parser');
// Express to run server and routes


const port = 8000;

// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const server = app.listen(port, listening);
function listening(){
    console.log('Server is running on port '+port);
};

// Initialize all route with a callback function
app.get('/all', getProjectData);

// Callback function to complete GET '/all'
function getProjectData(req, res){
    res.send(projectData)
};
// Post Route

app.post('/addWeather', addWeather);

function addWeather(req, res) {
    newEntry = {
        name: req.body.name,
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content
    }
    projectData.push(newEntry);
    res.send(projectData);
    console.log('body ', req.body)
    console.log('new projectData is ', projectData);
  };