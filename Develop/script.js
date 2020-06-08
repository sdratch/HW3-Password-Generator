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
  //create an array for selecting characters
  var characterChoice = [];
  //create a working password that will be added onto to make the completed one
  var workingPass = "";

  //prompts the user for the required information
  var passLength = prompt(
    "Enter a number of atleast 8 or atmost 128 for how long you want the password to be"
  );

  //if the password is not within criteria send an alert to the user to the mistake
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a valid length");
  } 
  //checks if the password length entered is a number
  else if (isNaN(passLength)) {
    alert("Please enter a valid number");
  } else {
    //prompts the user for what characters they want
    var isLower = confirm("Do you want lower case letters?");
    var isUpper = confirm("Do you want upper case letters?");
    var isSpecial = confirm("Do you want special characters?");
    var isNumber = confirm("Do you want numbers?");
    //if the user did not select type of characters then alert the user with the mistake
    if (!isLower && !isUpper && !isSpecial && !isNumber) {
      alert("Please specify at least one type of character");
    }

    //Adds what characters the user wants into an array to be selected later on
    //This also adds 1 character in at the beginning of the password to guarantee that character apears in the password
    else {
      if (isLower) {
        //adds lowercase to the choices and put a lowercase letter in
        characterChoice.push("l");
        workingPass =
          workingPass + lowerCase[Math.floor(Math.random() * lowerCase.length)];
      }
      if (isUpper) {
        //adds uppercase to the choices and put an uppercase letter in
        characterChoice.push("u");
        workingPass =
          workingPass + upperCase[Math.floor(Math.random() * upperCase.length)];
      }
      if (isSpecial) {
        //adds special characters to the choices and put a special character in
        characterChoice.push("s");
        workingPass =
          workingPass +
          specialChar[Math.floor(Math.random() * specialChar.length)];
      }
      if (isNumber) {
        //adds numbers to the choices and puts a number in
        characterChoice.push("n");
        workingPass =
          workingPass + numbers[Math.floor(Math.random() * numbers.length)];
      }

      //for loop for adding characters in ot the working password
      for (var i = characterChoice.length; i < passLength; i++) {
        //get either a u,l,s,n random from the characterchoice array from above
        var selector =
          characterChoice[Math.floor(Math.random() * characterChoice.length)];
        //adds a lowercase letter
        if (selector === "l") {
          workingPass =
            workingPass +
            lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }
        //adds an uppercase letter
        else if (selector === "u") {
          workingPass =
            workingPass +
            upperCase[Math.floor(Math.random() * upperCase.length)];
        }
        //adds a special character
        else if (selector === "s") {
          workingPass =
            workingPass +
            specialChar[Math.floor(Math.random() * specialChar.length)];
        }
        //adds a number character
        else if (selector === "n") {
          workingPass =
            workingPass + numbers[Math.floor(Math.random() * numbers.length)];
        }
        //if for some reason it gets to this point, log an error becuase it should never happen
        else {
          console.log("ERROR");
        }
      }
    }
  }
  //returns the working password
  return workingPass;
}
