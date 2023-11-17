// Assignment Code
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["&", "*", "{", "}", "[", "]", ",", "=", "-", "(", ")", ".", "+", ";", "'", " /", "!", "@", "#", "$", "%", ";", ":", "<", ">", "?", "^", "_", "~", "|"];

var confirmCharacters = []

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Writing prompt and confirm functions to customize the password.
  var passwordLength = parseInt(prompt("Please enter a length between 8 and 128 for your password."));

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid length.")
    return;
  };

  var hasLowercase = confirm("Would you like to use lowercase letters?");

  if (hasLowercase) {
    confirmCharacters = confirmCharacters.concat(lowercaseCharacters);
  }

  var hasUppercase = confirm("Would you like to use Uppercase letters?");

  if (hasUppercase) {
    confirmCharacters = confirmCharacters.concat(uppercaseCharacters);
  }

  var hasNumbers = confirm("Would you like to use numbers?");

  if (hasNumbers) {
    confirmCharacters = confirmCharacters.concat(numericalCharacters);
  }

  var hasSpecial = confirm("Would you like to use special characters?");

  if (hasSpecial) {
    confirmCharacters = confirmCharacters.concat(hasSpecial);
  }
  
  password = [];

  for (i=0; i < passwordLength; i++) {
    password.push(confirmCharacters[(Math.floor(Math.random() * confirmCharacters.length))]);
  }

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
