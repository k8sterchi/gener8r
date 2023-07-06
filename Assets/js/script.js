// Assignment code here
// store data into variables needed to write and generate password
var characterLength = 8; //this value will get redefined based on user input
var choiceArr = []; // Empty array where user's choice will concat with to create pw criteria 
// Arrays to store all the characters
var specialCharArr = ['_',')','(','*','&','^','%','$','#','@','!'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
// generateBtn holds the value of the ID generate tag in the html 
var generateBtn = document.querySelector("#generate");
document.querySelector('#generate').style.background = 'pink';
document.querySelector('#generate').style.color = 'green';
document.querySelector('h1').style.background = '#a2f1a6';

// Add eventlistener to generateBtn; runs the writePassword function after 'click' occurs
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
console.log('The generate button has been pushed; event listener working correctly.');

  if (choiceArr.length <= 0) {
    var undefinedTextArea = document.querySelector('#password');
    alert('you must select at least one character type');
    console.log('The user has not selected a character type.');
    return undefinedTextArea.value = 'Please begin again.';
    }

  var password = '';
  // length of choiceArr * number between 0 and 1 creates a random decimal, .floor rounds the decimal down, giving index position for one character of the pw
  // loops according to criteria of the for loop until characterLength is satisfied 
  for (var i = 0; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random() * choiceArr.length)
  password = password + choiceArr[randomIndex];
 }
  return password;
}


function writePassword () {
  var correctPrompts = userPrompts(); 
  // changed passwordText to better describe what this variable is in the HTML (the text area)
  var passwordTextArea = document.querySelector('#password');

  if (correctPrompts) {
    var newPassword = generatePassword();
    // grabbing dom element and setting its value to the return value of generatePassword function
    passwordTextArea.value = newPassword;
  } else {
    passwordTextArea.value = ''; 
  }

}
function userPrompts (){
  //set to empty so you always restart at empty. test if it's necessary
  choiceArr = [];
  //parseInt converts the returned string into an integer
  characterLength = parseInt(prompt('Password Length: Choose a number between 8 and 128.'))
  
  //make sure user has typed a number not a string, and between correct length 
  //if you type the right thing then this will return false
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Check that you are entering numerical digits between 8 and 128.');
    console.log('User did not meet numeric length criteria.')
    return false;
  } 

  if (confirm('Include lowercase letters in your password?')) {
    console.log('User selected lowercase letters.')
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm('Include uppercase letters in your password?')) {
    console.log('User selected uppercase letters.')
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm('Include special characters in your password?')) {
    console.log('User selected special characters.')
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm('Include numbers in your password?')) {
    console.log('User selected numbers.')
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}