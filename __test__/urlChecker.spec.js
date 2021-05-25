
import "babel-polyfill";

import {checkURL} from '../src/client/js/urlchecker'

describe('Checking URL with regex tests', ()=> {
    
    test('Testing checkURL function for valid url- https', () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        const inputURL = "https://www.google.ca/something"
        expect(checkURL(inputURL)).toBe(true)
    })

    test('Testing checkURL function for valid url - http', () => {
        const inputURL = "http://www.google.ca/something"
        expect(checkURL(inputURL)).toBe(true)
    })

    test('Testing checkURL function for Invalid url format', () => {
        const inputURL = "bla bla"
        expect(checkURL(inputURL)).toBe(false)
    })

})