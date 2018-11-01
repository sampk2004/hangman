/* Disables the button */
function disableButton(id){

   var btn = document.getElementById(id);

   btn.disabled = true;

}

/* Finds and displays letter(s) found */
function showWord(value){

  let word = value.toLowerCase();
  let words = document.getElementsByName(word);
  let wordFound = false;
  let occurences = 0;

  for(var letter = 0; letter < currentWord.length; letter++){
      if(currentWord[letter] === word.toLowerCase()){
        wordFound = true;
        ++ occurences;
      }
  }

  for(var x = 0; x < words.length; x++){
    words[x].style.color = "black";
  }

  updateScoreGuesses(wordFound, occurences);
}

function findPoints(currentWord) {

  var foundWords = [currentWord[0]];
  var counter = 1;

  for(var x = 1; x < currentWord.length; x++){
      var noduplicate = true;
      for(var y = 0; y < foundWords.length; y++){
        if(currentWord[x] == foundWords[y]){
            noduplicate = false;
            break;
        }
      }
      if(noduplicate){
        foundWords.push(currentWord[x]);
        counter++;
      }

  }
  return counter;
}
function resetAssign(){
  document.getElementById("reset").setAttribute("onclick", "init(2)")
}
