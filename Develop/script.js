
// Assignment code here

function generatePassword(){
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
  
  var inputConfigurations = document.querySelector('#input-configurations');
inputConfigurations.setAttribute('style', 'display: block');
  
document.querySelector('#input-configurations').setAttribute('style', 'display: block');

  passwordText.value = password.name;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.querySelector('#character-length').addEventListener('change',(event) => {
document.querySelector('#length-result').innerText = event.target.value;
})
