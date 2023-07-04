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

function generatePassword() {
  console.log('The generate button has been pushed; event listener working correctly.')
  var password = '';
  for (var i = 0; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random() * choiceRay.length)
  password = password + choiceRay[randomIndex];
 }
  return password;
}

// writePassword has an undefined function generatePassword, 
// for generatePassword to meet acceptance criteria will require a prompts function
function writePassword () {
  var correctPrompts = prompts(); // true or false
  var passwordText = document.querySelector('#password');

  if (correctPrompts) {
    var newPassword = generatePassword();
  
    passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }

}
function prompts (){
  //set to empty so you always restart?
  choiceRay = [];
  //parseInt converts the returned string into an integer
  characterLength = parseInt(prompt('Password Length: Choose between 8 and 128 characters'))
  
  //make sure user has typed a number not a string, and between correct length 
  //if you type the right thing then this will return false
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character length must be a number between 8 and 128.');
    return false;
  } 

  if (confirm('Include lowercase letters in your password?')) {
    choiceRay = choiceRay.concat(lowerCaseRay);
  }

  if (confirm('Include uppercase letters in your password?')) {
    choiceRay = choiceRay.concat(upperCaseRay);
  }

  if (confirm('Include special characters in your password?')) {
  choiceRay = choiceRay.concat(specialCharRay);
  }

  if (confirm('Include numbers in your password?')) {
  choiceRay = choiceRay.concat(numberRay);
  }
  return true;
}

// TODO: ensure that the user selects at least one character type:
// if the user clicks cancel to all prompts, 
// then alert appears:'you must select at least one character type'
// 

// if (confirm('Include lowercase letters in your password?')) 
// and
// if (confirm('Include uppercase letters in your password?'))
// and
// if (confirm('Include special characters in your password?'))
// and
// if (confirm('Include numbers in your password?'))
// return false; meaning user selected 'cancel' for all 
// alert('You must select at least one character type.')


