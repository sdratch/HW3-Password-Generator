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
  var workingPass;

  //prompts the user for the required information
  var passLength = prompt(
    "Enter a number of atleast 8 or atmost 128 for how long you want the password to be"
  );
  var isLower = confirm("Do you want lower case letters?");
  var isUpper = confirm("Do you want upper case letters?");
  var isSpecial = confirm("Do you want special characters?");
  var isNumber = confirm("Do you want numbers?");

  //if the password is not within criteria send an alert to the user to the mistake
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a valid length");
  } else {
    //if the user did not select type of characters then alert the user with the mistake
    if (!isLower && !isUpper && !isSpecial && !isNumber) {
      alert("Please specify at least one type of character");
    }

    //Adds what characters the user wants into an array to be selected later on
    else {
      if (isLower) {
        //adds lowercase
        characterChoice.push("l");
        //workingPass = workingPass + lowerCase(Math.random()*lowerCase.length);
      }
      if (isUpper) {
        //adds uppercase
        characterChoice.push("u");
        // workingPass = workingPass + upperCase(Math.random()*upperCase.length);
      }
      if (isSpecial) {
        //adds special characters
        characterChoice.push("s");
        //workingPass = workingPass + numbers(Math.random()*numbers.length);
      }
      if (isNumber) {
        //adds numbers
        characterChoice.push("n");
        // workingPass = workingPass + numbers(Math.random()*numbers.length);
      }

      //for loop for adding characters in
      for (var i = 0; i < passLength; i++) {
        //get either a u,l,s,n random from the characterchoice array from above
        var selector =
          characterChoice[Math.floor(Math.random() * characterChoice.length)];

        //adds a lowercase letter
        if (selector === "l") {
          workingPass =
            workingPass + lowerCase[Math.floor(Math.random() * lowerCase)];
          console.log("lowercase");
        }
        //adds an uppercase letter
        else if (selector === "u") {
          workingPass =
            workingPass + upperCase[Math.floor(Math.random() * upperCase)];
          console.log("uppercase");
        }
        //adds a special character
        else if (selector === "s") {
          workingPass =
            workingPass + specialChar[Math.floor(Math.random() * specialChar)];
          console.log("specialChar");
        }
        //adds a number character
        else if (selector === "n") {
          workingPass =
            workingPass + numbers[Math.floor(Math.random() * numbers)];
          console.log("numbers");
        }
        //if for some reason it gets to this point log an error becuase it should never happen
        else {
          console.log("ERROR");
        }
        //console.log(i);
      }
    }
  }
  //console.log(characterChoice);
  //console.log(workingPass);
}
