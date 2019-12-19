// This button initiates making the password which starts the prompt to get necessary user information
var myRedButton = document.querySelector(".myRedButton");
myRedButton.addEventListener("click", makePassword);
var myGreyButton = document.getElementsByClassName("myGreyButton");

var specialArr= ["!", "@", "&","%", "#","(", "="];
var numberArr= ["0", "1", "2", "3", "4", "5", "6","7","8","9"];
var upperArr= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//This function sets other functions to run in order to get a password
function makePassword () {
    var options = GetRandomItem();
    var newPassword = buildPassword(options);


}

//This function asks the user how long they would like the password
//Which characters they'd like to use
//Set's the answers to variables to be used below
function GetRandomItem() {
    var length = parseInt(prompt ("Please enter the number of characters you'd like your password to be between 8 and 128"));
    if(isNaN(length) || length < 8 || length > 128) {
        GetRandomItem()
    }

    var specials = confirm ("Would you like special characters in your password?");
    var numbers = confirm ("Would you like numbers in your password?");
    var uppers = confirm ("Would you like Upper Case in your password?");
    var lowers = confirm ("Would you like lower case in you password?");
    
    if (specials === false && numbers === false && uppers === false && lowers === false) {
      alert("You must select at least one character, please press ok for one of the options")
      var specials = confirm ("Would you like special characters in your password?");
      var numbers = confirm ("Would you like numbers in your password?");
      var uppers = confirm ("Would you like Upper Case in your password?");
      var lowers = confirm ("Would you like lower case in you password?");
    }

    var choices = {
        length: length,
        specials: specials,
        numbers: numbers,
        uppers: uppers,
        lowers: lowers,

    }
return choices;
    
}

//This function chooses random characters from each of the arrays the user 
//said they wanted to use
function GetRandomArrItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

var possibleChoices = [];
var finalAnswer = [];
    
  
//This function builds the actual password based on which options the user selected
function buildPassword(options){
  

    if (options.specials === true){
        possibleChoices = possibleChoices.concat(specialArr);
        var special = GetRandomArrItem(specialArr)
        finalAnswer.push(special)
        console.log(finalAnswer, possibleChoices);
    }
    if (options.numbers === true){
        possibleChoices = possibleChoices.concat(numberArr);
        var number = GetRandomArrItem(numberArr);
        finalAnswer.push(number)
        console.log(finalAnswer, possibleChoices);
    }
    if (options.uppers === true){
        possibleChoices = possibleChoices.concat(upperArr);
        var upper = GetRandomArrItem(upperArr);
        finalAnswer.push(upper)
        console.log(finalAnswer, possibleChoices);
    }
    if (options.lowers === true){
        possibleChoices = possibleChoices.concat(lowerArr);
        var lower = GetRandomArrItem(lowerArr);
        finalAnswer.push(lower)
        console.log(finalAnswer, possibleChoices);
    }

    for(var i = finalAnswer.length; i < options.length; i++) {
        var randCharacter = GetRandomArrItem(possibleChoices);
        finalAnswer.push(randCharacter);
    }
    var output = document.querySelector("#output");
    var copyAnswer = finalAnswer.join('');

    output.textContent = copyAnswer;

}

