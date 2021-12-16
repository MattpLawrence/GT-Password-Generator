// Assignment Code
var generateBtn = document.querySelector("#generate");


function callWritePassword(){
  writePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //push password to html
  function setPassword (){
    passwordText.textContent = password;
  }
  passwordText.value = password;

  var windowLength = window.prompt("Enter the desired length of your password. \nPassword must be between 8 and 128 characters in length.");

  // set variable to open first alert and return to top.
  var alertOne = function (){
    window.alert("Please enter a number between 8 and 128");
    callWritePassword();
  }

  if (windowLength === null){ // catch the cancel button
    return;
  } else if (windowLength === ""){ // catch ok with no value entered
    alertOne();
  }else if( isNaN(windowLength)){ // catch non number entry
    alertOne();
  }else if( // if number length between 8 and 128
    (windowLength < 8) ||
    (windowLength > 128) 
    ){
    alertOne();
  } 

  // ask for lowercase letters
  var windowLowercase = window.confirm("Would you like the password to contain lowercase letters?");
  //set variable depending on answer
  if ( windowLowercase === true){
    var lowercase = "You chose to have lowercase letters in your password." ;
  }else{
    lowercase = "You chose not to have lowercase letters in your password." ;
  }
  //ask for uppercase letters
  var windowUppercase = window.confirm(lowercase +"\n\nWould you like the password to contain uppercase letters?");
  //set variable depending on answer
  if ( windowUppercase === true){
    var uppercase = "You chose to have uppercase letters in your password." ;
  }else{
    uppercase = "You chose not to have uppercase letters in your password." ;
  }

  //ask for numeric values
  var windowNumbers = window.confirm(uppercase + "\n\nWould you like the password to contain numbers?")
  //set variable depending on answer
  if ( windowNumbers === true){
    var numbers = "You chose to have numbers in your password." ;
  }else{
    numbers = "You chose not to have numbers in your password." ;
  }

  var windowSpecial = window.confirm(numbers + "\n\nWould you like the password to contain and special characters?")
  //set variable depending on answer
  if ( windowSpecial === true){
    var special = "You chose to have numbers in your password." ;
  }else{
    special = "You chose not to have numbers in your password." ;
  }

  function generatePassword (){
    var numbers = "0123456789";
    var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
    var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var specialCharacters = "'`~!@#$%^&*()_+{}|<>?-=[]\/,.:" ;

    var randomNumber = Math.floor(Math.random() * windowLength);
    
  }
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
