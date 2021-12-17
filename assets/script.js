//**************************Set character sets */
var generateBtn = document.querySelector("#generate"),
    numbers = "0123456789",
    lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm",
    uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM",
    specialCharacters = "'`~!@#$%^&*()_+{}|<>?-=[]\/,.:",
    characterList = [];


function callWritePassword(){
  writePassword();
}

// Write password to the #password input
function writePassword() {

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

  function generatePassword(){

    //***********************************Create pop up messages, and fill out details of previous answer. */
    // ask for lowercase letters
    var windowLowercase = window.confirm("Would you like the password to contain lowercase letters?");
    //set variable depending on answer
    if ( windowLowercase === true){
      var lowercase = "You chose to have lowercase letters in your password." ;
      characterList += lowercaseLetters; //add lowercase to character bank
    }else{
      lowercase = "You chose not to have lowercase letters in your password." ;
    }

    //ask for uppercase letters
    var windowUppercase = window.confirm(lowercase +"\n\nWould you like the password to contain uppercase letters?");
    //set variable depending on answer
    if ( windowUppercase === true){
      var uppercase = "You chose to have uppercase letters in your password." ;
      characterList += uppercaseLetters;
    }else{
      uppercase = "You chose not to have uppercase letters in your password." ;
    }

    //ask for numeric values
    var windowNumbers = window.confirm(uppercase + "\n\nWould you like the password to contain numbers?")
    //set variable depending on answer
    if ( windowNumbers === true){
      var windowNumbers = "You chose to have numbers in your password." ;
      characterList += numbers;
    }else{
      numbers = "You chose not to have numbers in your password." ;
    }

    //ask for special characters
    var windowSpecial = window.confirm(windowNumbers + "\n\nWould you like the password to contain and special characters?")

    //set variable depending on answer
    if ( windowSpecial === true){
      var special = "You chose to have numbers in your password." ;
      characterList += specialCharacters;
    }else{
      special = "You chose not to have numbers in your password." ;
    }

    password = "";

  //**********************Check to make sure user selected at least one type of character */
    if( characterList.length === 0){
      window.alert("You must select at least one type of character.");
      generatePassword(); //go back to first character choice prompt
    }

    console.log(characterList);
    //**********************chose random value from the compiled list of characters 
    for (var i = 0, n = characterList.length; i < windowLength ; ++i){
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
