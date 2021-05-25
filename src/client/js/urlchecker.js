// Checks that the user input starts with http:// or https://
// and has no whitespace
// Uses regular expression as test condition

export const checkURL = (inputURL)=> {
    var regex = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

     if(regex == null){
         return false;
     } else{
     return true;
     }
 }
