
import "babel-polyfill";
import {callApiMC } from '../src/client/js/formHandler'

const fetch = require('node-fetch')
// Mock the node-fetch
jest.mock('node-fetch')

describe("Test callApiMC call to Server", () => {
    
    test("Should call server with correct reequest headers and body -- get response.", async () => {
        fetch.mockResolvedValue({
            "agreement": "DISAGREEMENT",
            "confidence": "84",
            "irony": "NONIRONIC",
            "model": "general_en",
            "score_tag": "P",
            "Meta-Data":"More stuff here"
        })

        const data = await callApiMC('http://localhost:8081/test', {"url":"http://google.ca/news/link"});
        expect(data).toEqual({
            "agreement": "DISAGREEMENT",
            "confidence": "84",
            "irony": "NONIRONIC",
            "model": "general_en",
            "score_tag": "P",
            "Meta-Data":"More stuff here"
        })
          
    })
})