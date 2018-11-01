/* initalizes/resets game */
function init(){

  var random = Math.floor((Math.random() * (length())) + 0);
  resetAssign();
  currentObject = getWord(random);
  currentWord = currentObject.word;

  resetWordContainer();
  createPanel(currentWord);
  endCounter = findPoints(currentWord);
  console.log(endCounter);
  createWordDef(currentObject);
  document.getElementById("guesses").innerHTML = maxGuesses;
  // document.getElementById("score").innerHTML = 0;
}

/* creates panel for the game */
function createPanel(currentWord){

  let controlPanel = document.getElementById('controlpanel');


  for (var alphastart = 0; alphastart < alphabet.length; alphastart++){

    var btn = document.createElement("BUTTON");
    btn.innerHTML = alphabet[alphastart];
    btn.id = alphastart;
    btn.setAttribute("onclick", "showWord(this.innerHTML);disableButton(this.id)");
    btn.className = "btn btn-primary";
    controlPanel.appendChild(btn);
  }

}

/* creates guessing word */
function createWordDef(guessWord){

  let str = guessWord.word;
  let wordContainer = document.getElementById("word");

  for (var x = 0; x < str.length; x++){
    var span = document.createElement("span");
    span.innerHTML = str[x];
    span.setAttribute("name", str[x]);
    span.className = "word"
    wordContainer.appendChild(span);
  }
  updateQuote(guessWord.definition);
}

/* Shows quote in view */
function updateQuote(str){
    document.getElementById("quote").innerHTML = "\"" + str + "\"";
}

/* resets the container */
function resetWordContainer(){
  let container = document.getElementById('word');
  container.innerHTML = "";
  document.getElementById("controlpanel").innerHTML = "";
}

/* Updates Guesses in view */
function updateScoreGuesses(bool, occurences){

  let score = document.getElementById("score");
  let guesses = (document.getElementById("guesses"));
  let currentScore = parseInt(score.innerHTML);
  let currentGuesses = parseInt(guesses.innerHTML);
  console.log(occurences);
  if(bool){
    score.innerHTML = currentScore + occurences;
    --endCounter
  }
  else{
    score.innerHTML = --currentScore;
    guesses.innerHTML = --currentGuesses;
  }

  if(currentGuesses === 0 || endCounter == 0){
    for(var button = 0; button < alphabet.length; button++){
      document.getElementById(button).disabled = true;
    }
    if(currentGuesses === 0)
      alert("You've lost!");
    if(endCounter === 0)
      alert("You've won!")
  }


}
