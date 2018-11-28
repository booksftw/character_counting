
var userInput = process.argv.slice(2); // array of words
var userInputString = userInput.join('');

function countLetters(strToCount){
  var letterCountObj = {};

  for (var i = 0; i < strToCount.length; i++) {
    var letter = strToCount[i];
    if (letter in letterCountObj) {
      letterCountObj[letter] ++;
    } else {
      letterCountObj[letter] = 1;
    }
  }
  console.log(letterCountObj);
}

countLetters(userInputString);