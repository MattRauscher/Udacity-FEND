// Setup empty JS object to act as endpoint for all routes
const projectData ={};
const express = require('express');
import bodyParser from 'body-parser';
// Express to run server and routes


const port = 8000;

// Start up an instance of app
const app = express();
console.log('app instanciazed'+app);
/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
import cors from 'cors';
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const server = app.listen(port, listening);
function listening(){
    console.log('Server is running on port '+port);
};
// Callback to debug

// Initialize all route with a callback function
app.get('/all', getData)
// Callback function to complete GET '/all'
function getData(req, res){
    res.send(projectData);
}
// Post Route
app.post('/all', function(req, res){
    projectData.push(req.body);
    console.log(projectData)
})