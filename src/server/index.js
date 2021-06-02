const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express()

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)


const URL_ROOT = "https://api.meaningcloud.com/sentiment-2.1"
const URL_KEY = `?key=${process.env.API_KEY}`
const URL_LANG = "&lang=en"
const URL_USER_INPUT = "&url="
const port = process.env.PORT || 8081

console.log(`Your API Key is ${process.env.API_KEY}`);


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


const callMeaningCloudAPI = async function(req, res) {
    console.log(`You entered: ${req.body.url}`);
    const fullUrl = URL_ROOT + URL_KEY + URL_LANG + URL_USER_INPUT + req.body.url
    console.log(fullUrl)
    const response = await fetch(fullUrl)
    try {
        const meaningCloudData = await response.json()
        console.log("Correct response received from Meaning cloud")
        res.send(meaningCloudData)
    }
    catch{
        console.error("Unknown eror -- Call to MC either failed or didn't work");
    }
}

// POST Route
app.post('/call', callMeaningCloudAPI)


// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(` project-evaluate app listening on port ${port}`)
})