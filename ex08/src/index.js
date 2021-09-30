// Lodash
const _ = require('lodash');

// Only change code below this line
// users nested array with four objects starts here
const users = {firstName: ["John", "Jane", "Jim", "Kate"], lastName:["Doe", "Doe", "Carrey", "Winslet"], age: [24, 5, 54, 40], gender:["male", "female", "male", "female"]};
// users nested array with four objects ends here

// getUsers function - list of users starts here
function getUsers() {
    var output = "";
    for(const {firstName: fn, lastName: ln, age: a, gender: g} of users) {
        output = "firstName: " + fn + "lastName: " + ln + a + g
        return output;
    }
}
// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
    // add appropriate code here
    } catch {
        return // Change this line
        console.log(); // Change this line
    }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
// findUser(); // Change this line

module.exports = findUser;