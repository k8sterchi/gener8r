// function generatePassword() {
//   console.log('The generate button has been pushed; event listener working correctly.')
// 1. Prompt the user for the password criteria
//    1a. password length between 8 and 128
//    2a. lowercase, uppercase, numbers, special characters
// 2. Validate the input -- ensure user input is valid
//      character length is a number between 8 and 128, 
//      ensure at least one character type is selected
// 3. Generate password based on criteria.


// 4. Display on the page, this is already working... 
//  return 'generated password will go here';
// }


// Assignment code here

function generatePassword(){
  console.log('The generate password button has been pushed, eventlistener working correctly.')
return {
  name: 'kate',

}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  
  
  
  
  
  passwordText.value = password.name;

}

// Add eventlistener to generate button
generateBtn.addEventListener("click", writePassword);



