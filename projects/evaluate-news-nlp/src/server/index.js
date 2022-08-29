var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios').default;
const FormData = require('form-data');

//setup .env
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    console.log("Get / HERE!")
    res.sendFile("/index.html")
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/analysetext', function (req, res) {
    console.log('key', process.env.MC_API_KEY);
    const targetUrl = encodeURIComponent(req.query.url);
    console.log('url is',`\'${targetUrl}\'`)
    
    const formData = new FormData();
    formData.append('key', process.env.MC_API_KEY)
    formData.append('url', `\'${targetUrl}\'`)
    axios.post('https://api.meaningcloud.com/sentiment-2.1', formData
    ).then(function(response) {
        console.log(response.data);
    }).catch(function (error){
        console.log('error', error);
    })
    res.send({ "message": "Responded!" })
})
