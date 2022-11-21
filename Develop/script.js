// Assignment code here

//define character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "~`!@#$%^&*+<?/;:(=)|{";


//prompt for password length
var passwordLength = function() {
  var length = prompt ("How long would you like your password to be? Please enter a number between 8 and 128");
  if (length < 8 || length > 128 || length === "") {
    alert("Invalid length. Must be between 8 and 128 characters long.")
  } else return passwordLength;

  lengthPass = Math.floor(Number(length));

  //This will send data from this function to layout function!
  return lengthPass;
}

  
  //Function to determine Character sets
  var charInclusions = function() {
    var passwordInclusions = "";


//Prompt to include types of characters and validate

  var confirmLower = confirm("Include Lower Case Characters?");

  var confirmUpper = confirm("Include Upper Case Characters");

  var confirmNumber = confirm("Inlcude Numbers?");

  var confirmSpecial = confirm("Include Special Characters?");


  if (confirmLower == true) {
    passwordInclusions += lowerCase;
  }
  if (confirmUpper == true) {
    passwordInclusions += upperCase;
  }
  if (confirmSpecial == true) {
    passwordInclusions += specialChar;
  }
  if (confirmNumber == true) {
    passwordInclusions += numbers;

  } 

  //return results
  return passwordInclusions;
}

//create generate password function
var generatePassword = function () {

//call global var to output at the end
Password = "";

//function to determine length
var lengthpassword = passwordLength();

//funtion to determine which characters to include
var passwordInclusions = charInclusions ();

for (var i = 0; i < lengthpassword; i++) {
  Password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusions.length));
}

return Password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
