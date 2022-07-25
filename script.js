var generateBtn = document.querySelector("#generate");


function generatePassword() {
//Promt for password criteria
window.alert("Please select which criteria to include in the password.");

//Prompt for Length between 8- 128 characters
var length = window.prompt("Please enter a length for the password between 8 and 128 characters");
if (length < 8 || length > 128)
{
  return;
}
else {

//Confirm whether to include
//  -lowercase, uppercase, numeric, and/or special characters
var lowercaseResults = window.confirm("Include lowercase characters?");
var uppercaseResults = window.confirm("Include uppercase characters");
var numericResults = window.confirm("Include numeric characters?");
var specialResults = window.confirm("Include special characters?");

//String containing all possible character options of the password
var possible = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkzxcvbnm1234567890!#$%&'()*+,-./:;<=>?@[|^_`{|}~"


// Validate input and at least one character type should be selected
if (!specialResults && !numericResults&& !uppercaseResults && !lowercaseResults) {
  return;
}
else 

// Revoming character options from the string
if (!lowercaseResults) {
possible = possible.replace("qwertyuiopasdfghjkzxcvbnm","")
}

if (!uppercaseResults) {
possible = possible.replace("QWERTYUIOPASDFGHJKLZXCVBNM","")
}

if (!numericResults) {
possible = possible.replace("1234567890", "")
}

if (!specialResults) {
possible = possible.replace("!#$%&'()*+,-./:;<=>?@[|^_`{|}~", "")
}

// generate password that matches selected criteria
// chooses a random character within the possible characters and puts them into the password string
password = ' ';
for (i = 0; i < length; i++) {
  consLength = possible.length
  password += possible[Math.floor(Math.random() * consLength)]
}

//Display in alert or write to page
}
return password;
}

function writePassword() {
  var password = generatePassword(
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  window.alert(password);

}
generateBtn.addEventListener("click", writePassword);
