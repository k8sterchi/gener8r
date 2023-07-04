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
// store data into variables i will need in order to write and generate password
var characterLength = 8;
// Array where i will store all possible letters symbols numbers 
var choiceRay = [];
// Arrays to store all the characters
var specialCharRay = ['_',')','(','*','&','^','%','$','#','@','!'];
var lowerCaseRay = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseRay = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberRay = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
// generateBtn holds the value of element in the html with the ID generate 
var generateBtn = document.querySelector("#generate");

// Add eventlistener to generateBtn runs the writePassword function after 'click' occurs
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  console.log('The generate password button has been pushed, eventlistener working correctly.')
return {
  name: 'kate',

}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  
  
  passwordText.value = password.name;

}





