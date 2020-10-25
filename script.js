// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercaseArray = ["abcdefghijklmnopqrstuvwxyz"];
var specialArray = ["!@^$%#("];
var numericalArray = ["0123456789"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function uppercase() {
    return uppercaseArray[(Math.floor(Math.random() * Math.floor(26)))]
}

function lowercase() {
    return lowercaseArray[(Math.floor(Math.random() * Math.floor(26)))]
}

function special() {
    return specialArray=[(Math.floor(Math.random() * Math.floor(7)))]
}

function numerical() {
    return numericalArray=[(Math.floor(Math.random() * Math.floor(10)))]
}

function generatePassword() {
  var question1 = prompt("How many characters would you like in your password between 8 and 128?");
  var question2 = confirm("Would you like Uppercase letters in your password?");
  var question3 = confirm("Would you like Lowercase letters in your password?");
  var question4 = confirm("Would you like Special characters in your password?");
  var question5 = confirm("Would you like Numerical characters in your password?")    
}





