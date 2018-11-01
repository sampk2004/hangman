
var wordBank = [{word:"tatoo", definition:"a form of body modification where a design is made by inserting ink"}, {word:"electricity", definition:"is the set of physical phenomena associated with the presence and motion of electric charge"},
{word:"sam", definition:"student at bcit"}, {word:"fire", definition:"burns"}, {word:"water", definition:"H20"}, {word:"bill", definition:"my teacher"}, {word:"bcit", definition:"my school"}, {word:"clothes", definition:"things you wear"}];
var currentObject = "";
var currentWord = "";
var endCounter = 0;
var maxGuesses = 7;
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];

/* Object Dictionary word as str and definition as str */
function dictionary(word, definition){
  this.word = word;
  this.definition = definition;
}

/* Getter for Word by index */
function getWord(index){
  return wordBank[index];
}

/*Returns length of array */
function length(){
  return wordBank.length;
}
