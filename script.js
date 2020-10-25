// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!@^$%#("];
var numerical = ["0123456789"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword() {
  var question1 = prompt("How many characters would you like in your password between 8 and 128?");
  if (question1 > 8 && question1 < 128) {
    return case_2;
  elseif (question1 < 8 || question1 > 128) 
    
  }
}




