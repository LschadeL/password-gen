// Assignment Code
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialCharacters = ["&", "*", "{", "}", "[", "]", ",", "=", "-", "(", ")", ".", "+", ";", "'", " /", "!", "@", "#", "$", "%", ";", ":", "<", ">", "?", "^", "_", "~", "|"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(prompt("Please enter a length between 8 and 128 for your password."));

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid length.")
    return;
  };

  if (passwordLength != Number) {
    window.alert("Please input a Number.")
    return;
  };

  var hasLowercase = confirm("Would you like to use lowercase letters?");
  var hasUppercase = confirm("Would you like to use Uppercase letters?");
  var hasNumbers = confirm("Would you like to use numbers?");
  var hasSpecial = confirm("Would you like to use special characters?");

  if (hasLowercase && hasUppercase && hasNumbers && hasSpecial) {
    var allCharacters = concat(hasLowercase, hasUppercase, hasNumbers, hasLowercase)
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
