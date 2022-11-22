// Assignment code here

//define character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArr = lowerCase.split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr = upperCase.split("")
var numbers = "0123456789";
var numbersArr = numbers.split("")
var specialChar = "~`!@#$%^&*+<?/;:(=)|{";
var specialCharArr = specialChar.split("")


//prompt for password length
var passwordLength = function() {
  var length = Number(prompt ("How long would you like your password to be? Please enter a number between 8 and 128"));
  if (length < 8 || length > 128 || length === "") {
    alert("Invalid length. Must be between 8 and 128 characters long.")
  return } 

  //This will send data from this function to layout function!
 return length;
}

  

//create generate password function
var generatePassword = function () {

  var Password = ""


//function to determine length
var lengthpassword = passwordLength();

//determine which characters to include
var confirmLower = confirm("Include Lower Case Characters?");

var confirmUpper = confirm("Include Upper Case Characters");

var confirmNumber = confirm("Inlcude Numbers?");

var confirmSpecial = confirm("Include Special Characters?");

let selected_arr;
if (confirmUpper && confirmLower && confirmNumber && confirmSpecial){
 selected_arr = ["upperCaseArr", "lowerCaseArr", "numbersArr", "specialCharArr"]
}
if (confirmLower && confirmNumber && confirmSpecial){
  selected_arr = ["lowerCaseArr", "numbersArr", "specialCharArr"]
 }
 if (confirmNumber && confirmSpecial){
  selected_arr = ["numbersArr", "specialCharArr"]
 }
 if (confirmSpecial){
  selected_arr = ["specialCharArr"]
 }

for (var i = 0; i < lengthpassword; i++) {
  var array_select = selected_arr[Math.floor(Math.random()*selected_arr.length)]
   var Newcharacter = array_select[Math.floor(Math.random() * array_select.length)] 

  Password += Newcharacter;
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
