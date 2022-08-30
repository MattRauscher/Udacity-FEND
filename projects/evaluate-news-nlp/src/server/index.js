var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios').default;
const FormData = require('form-data');

//setup .env
const dotenv = require('dotenv');
const { response } = require('express');
const { REPL_MODE_STRICT } = require('repl');
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
    //const targetUrl = encodeURIComponent(req.query.url);
    const targetUrl = req.query.url;
    const axios = require('axios');
    let data = new FormData();
    data.append('key', `${process.env.MC_API_KEY}`);
    data.append('url', `${targetUrl}`);

    let config = {
        method: 'post',
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        headers: { 
            'key': '', 
            ...data.getHeaders()
          },
        data: data,
        redirect:'follow'
      };

    axios(config)
        .then((response) => {
            //console.log("the response is ", response.status, response.statusText)
            //console.log("the header is ", response.headers)
            res.json(response.data)
        
        })  
        .catch(
            error => console.log(error)
        );
})