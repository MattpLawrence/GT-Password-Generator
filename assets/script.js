// Assignment Code
var generateBtn = document.querySelector("#generate");

function callWritePassword(){
  writePassword();
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

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

  var length = windowLength // setting new var for naming convention


  // ***************************************password generation function*
  function generatePassword (){
    //**************************Set character sets */
    var numbers = "0123456789",
        lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm",
        uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM",
        specialCharacters = "'`~!@#$%^&*()_+{}|<>?-=[]\/,.:",
        password = "",
        characterList = [];

    // ******************************************Set final array based on input values
    if (windowLowercase){
      characterList += lowercaseLetters;
    }
    if (windowUppercase){
      characterList += uppercaseLetters;
    }
    if( windowNumbers){
      characterList += numbers;
    }
    if(windowSpecial){
      characterList += specialCharacters;
    }

    console.log(characterList);
    //**********************chose random value from the compiled list of characters 
    for (var i = 0, n = characterList.length; i < windowLength; ++i){
      password += characterList.charAt(Math.floor(Math.random() * n));
    }
    //push the password value to show on the page.
    document.getElementById("password").value = password; 
    console.log(password);
    return ;
  }

  generatePassword();
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
