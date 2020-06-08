// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowerCase = [];
  var upperCase = [];
  var numbers = [];

  //Create 2 arrays with one all lower case and one all upper case
  for (var i = 65; i < 91; i++) {
    upperCase.push(String.fromCharCode(i));
    lowerCase.push(String.fromCharCode(i).toLowerCase());
  }
  //creat an array of numbers
  for (var i = 48; i < 58; i++) {
    numbers.push(String.fromCharCode(i));
  }
  //create special character array
  var specialChar = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "\\",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var characterChoice = [1, 2, 3, 4];

  //prompts the user for the required information
  var passLength = prompt(
    "Enter a number between 8 and 128 for how long you want the password to be"
  );
  var isLower = confirm("Do you want lower case letters?");
  var isUpper = confirm("Do you want upper case letters?");
  var isSpecial = confirm("Do you want special characters?");
  var isNumber = confirm("Do you want numbers?");
  

}
