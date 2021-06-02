const fetch = require('node-fetch')

export const handleSubmit = async (event) => {
    event.preventDefault()
    document.getElementById('subjectivity').innerHTML = ""
    document.getElementById('score').innerHTML = ""
    document.getElementById("confidence").innerHTML = ""
    document.getElementById("irony").innerHTML= ""

    let userGivenInputURL = document.getElementById('inputURL').value
    console.log(userGivenInputURL)
    const errorElement = document.getElementById('errorMessage')

 if (!Client.checkURL(userGivenInputURL)) {
        errorElement.innerHTML = 'Not a valid URL - Invalid input'
        return
    } else {
        errorElement.innerHTML = ""
    }
    const port = process.env.PORT || 8081
    let apiData = await callApiMC(`http://localhost:${port}/call`, {"url":userGivenInputURL})

    // Convert response to JSON, call updateUI
    .then(apiData => apiData.json())
    .then( (res) =>  {
        console.log(res)
        updateUI(res)
    })

}

// Post route to server which will do API call
export async function callApiMC(url,userData) {
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
       body: JSON.stringify(userData),
    })
    return response
}

// Updates the UI so user can see the result of analysis
function updateUI(response) {

    // Find the elements
    const subjectivityElement = document.getElementById('subjectivity')
    const scoreElement = document.getElementById('score')
    const confidence = document.getElementById("confidence")
    const irony  =   document.getElementById("irony")

  
    subjectivityElement.innerHTML = `Subjectivity - ${response.subjectivity}`
    scoreElement.innerHTML = `Positivity - ${_mCScoreDescription(response.score_tag)}`
    confidence.innerHTML = `Confidence: ${response.confidence}`;
    irony.innerHTML = `Irony: ${response.irony}`;
}

// Helper function to convert API response to  Plain english
// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)

export const _mCScoreDescription = (score) => {
    switch (score) {
        case "P+":
            return "Strongly Positive".toUpperCase()
        case "P":
            return "Positive".toUpperCase()
        case "NEU":
            return "Neutral".toUpperCase()
        case "N":
            return "Negative".toUpperCase()
        case "N+":
            return "Strongly Negative".toUpperCase()
        case "NONE":
            return "No sentiment".toUpperCase()
        default:
            return "Invalid data".toUpperCase()
    }
}

