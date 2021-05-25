// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";

// Import the js file to test
import { _mCScoreDescription } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing _mCScoreDescription functionality', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing the _mCScoreDescription function', () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        expect(_mCScoreDescription('P+')).toBe('STRONGLY POSITIVE')
    })

    test('Testing the p_mCScoreDescription() function', () => {
        expect(_mCScoreDescription('P')).toBe('POSITIVE')
    })

    test('Testing the _mCScoreDescription() function', () => {
        expect(_mCScoreDescription('NEU')).toBe('NEUTRAL')
    })

    test('Testing the _mCScoreDescription() function', () => {
        expect(_mCScoreDescription('N')).toBe('NEGATIVE')
    })

    test('Testing the _mCScoreDescription() function', () => {
        expect(_mCScoreDescription('N+')).toBe('STRONGLY NEGATIVE')
    })

    test('Testing the _mCScoreDescription() function', () => {
        expect(_mCScoreDescription('NONE')).toBe('NO SENTIMENT')
    })
});