

var wordList = ["Iron Man", "Odinson", "Black Widow", "Captain America", "Vision"];

function startRound() {
    var thisRoundWord = "";
    //for (var i=0; i < wordList.length; i++) {
    thisRoundWord = wordList[(Math.floor(Math.random()*wordList.length))]; //}
    console.log(thisRoundWord);
    return thisRoundWord;

    console.log(thisRoundWord);
}






// var startButton = document.getElementByID("#sb");
// startButton.addEventListener("click", startRound);

startRound();