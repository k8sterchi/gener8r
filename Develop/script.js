
//      ensure at least one character type is selected
// 3. Generate password based on criteria.


// Assignment code here
// store data into variables i will need in order to write and generate password
var characterLength = 8;
// Empty array where user's choice will concat with to create pw criteria 
var choiceArr = [];
// Arrays to store all the characters
var specialCharArr = ['_',')','(','*','&','^','%','$','#','@','!'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
// generateBtn holds the value of element in the html with the ID generate 
var generateBtn = document.querySelector("#generate");

// Add eventlistener to generateBtn runs the writePassword function after 'click' occurs
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log('The generate button has been pushed; event listener working correctly.')
// Ensure user selects at least one character type
  if (choiceArr.length <= 0) {
    alert('you must select at least one character type');
    return;
    }
  var password = '';
  // i stands for index, let index = 0 ...index referes to position within array...
  // .floor to include 0 to access 0 index
  // using the length of the choice array with math functions to generate a random number,
  // using that random number
  // try code here?
  for (var i = 0; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random() * choiceArr.length)
  password = password + choiceArr[randomIndex];
 }
  if (!password){
    return 'please try again';
  } else { 
  return password;
}
}

// writePassword has an undefined function generatePassword, 
// for generatePassword to meet acceptance criteria will require a prompts function
function writePassword () {
  var correctPrompts = prompts(); // true or false
  // passwordText is the area in which the pw text would appear
  var passwordText = document.querySelector('#password');

  if (correctPrompts) {
    var newPassword = generatePassword();
    // grabbing dom element and setting the value to the return value of generatePassword function
    passwordText.value = newPassword;
  } else {
    passwordText.value = ''; // .value could also be .innerHTML
  }

}
function prompts (){
  //set to empty so you always restart at empty. test if it's necessary
  choiceArr = [];
  //parseInt converts the returned string into an integer
  characterLength = parseInt(prompt('Password Length: Choose between 8 and 128 characters'))
  
  //make sure user has typed a number not a string, and between correct length 
  //if you type the right thing then this will return false
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character length must be a number between 8 and 128.');
    return false;
  } 

  if (confirm('Include lowercase letters in your password?')) {
   choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm('Include uppercase letters in your password?')) {
   choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm('Include special characters in your password?')) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm('Include numbers in your password?')) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

// TODO: ensure that the user selects at least one character type:
// if the user clicks cancel to all prompts, 
// then alert appears:'you must select at least one character type'
// if choice array is empty, alert user to select at least one character type.
// t or f array has length > 0


