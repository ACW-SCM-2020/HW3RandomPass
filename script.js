// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercaseArray = ["abcdefghijklmnopqrstuvwxyz"];
var specialArray = ["!@^$%#("];
var numericalArray = ["0123456789"];

var question1 = false;
var q1prompt = false;


var question2 = false;
var q2confirm = false;

var question3 = false;
var q3confirm = false;

var question4 = false;
var q4confirm = false;

var question5 = false;
var q5confirm = false;

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
    question1 = prompt("How many characters would you like in your password between 8 and 128?");
    if (question1 < 8 || question1 > 128) {
        alert("Please input a valid character quantity.");}
    else {
        q1prompt = true;
    } 
    question2 = confirm("Would you like Uppercase letters in your password?");
    if (question2 = true) {
        q2confirm = true;
    }
    question3 = confirm("Would you like Lowercase letters in your password?");
    if (question3 = true) {
        q3confirm = true;
    }
    question4 = confirm("Would you like Special characters in your password?");
    if (question4 = true) {
        q4confirm = true;
    }
    question5 = confirm("Would you like Numerical characters in your password?");
    if (question5 = true) {
        q5confirm = true;
    }
    if (q1prompt = true && q2confirm === true && q3confirm === true && q4confirm === true && q5confirm === true){
        return ()
    }

function singlechar(){
    thisCharacter = charchoice();
    switch(thisCharacter){
    case 1:
        return uppercase();
    case 2:
        return lowercase();
    case 3:
        return special();
    case 4:
        return numerical();
        }
}

}







