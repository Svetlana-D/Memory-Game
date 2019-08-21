// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex].children[0].className;
        array[currentIndex].children[0].className = array[randomIndex].children[0].className;
        array[randomIndex].children[0].className = temporaryValue;
    }

    return;
}


// Variables for Shuffle function and call it
const cards = document.querySelectorAll('.card');
shuffle(cards);


// Reset button
const resetButton = document.querySelector('.fa-repeat');
resetButton.addEventListener('click', function restart() {
    window.location.reload()
});


// Open card function
function openCard() {
    event.target.classList.add('open', 'show');
}


// Check how many cards open function
function checkOpenClasses () {
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('open')) {
            numberClasses += 1;
        }
    }
    return numberClasses;
}


// Variables for timer
var watch = new stopWatch(timer);
var timerId = document.querySelector("#timer");


// Variables for open, close, match cards
var numberClasses = 0;
var firstCard;
var secondCard;
var firstCardValue;
var secondCardValue;


// Variables for stars, count correct and incorrect guesses
const movesCount = document.querySelector('.moves');
var numberMoves = 0;
var numberMistakes = 0;
var numberCorrectMoves = 0;
var numberStars = 3;
var starWord = "Stars";


// Main function
function respondToTheClick()
{
    if (watch.isOn === false) {
        watch.start();
    }
    var stars = document.querySelector('.stars');
    checkOpenClasses();
    if(numberClasses === 0 ){
        openCard();
        firstCard = event.target;
        firstCardValue = event.target.querySelector('.fa');
    }
    if(numberClasses === 1 ){
        openCard();
        secondCard = event.target;
        secondCardValue = event.target.querySelector('.fa');
        numberMoves += 1;
        movesCount.textContent = numberMoves;
        //if(numberMoves === 10)
        if(firstCardValue.classList.value === secondCardValue.classList.value) {
            //console.log('yes');
            firstCard.classList.remove('open', 'show');
            firstCard.classList.add('match');
            secondCard.classList.remove('open', 'show');
            secondCard.classList.add('match');
            numberClasses = 0;
            numberCorrectMoves += 1;
            if(numberCorrectMoves === 8)
            {
                watch.stop();
                //var gameTime = ;
                //const endingTime = performance.now();
                //const allTime = endingTime - startingTime;
                // Function millisToMinutesAndSeconds() from https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
                /*function millisToMinutesAndSeconds(millis)
                {
                  var minutes = Math.floor(millis / 60000);
                  var seconds = ((millis % 60000) / 1000).toFixed(0);
                  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
                }*/
                //const gameTime = millisToMinutesAndSeconds(allTime)
                swal({
                  title: "Congratulations! You Won!",
                  text: "With " + numberMoves + " Moves and " + numberStars + " " + starWord + "\n Your Game Time is " + timerId.innerText + "!",
                  icon: "success",
                  button:
                  {
                    text: "Play again!",
                    value: "catch",
                  },
                })
                .then((value) => {
                  switch (value) {
                    case "catch":
                      window.location.reload();
                  }
                });
                //swal("Congratulations! You won!", "With " + numberMoves + " Moves!", "success");
            }
            /*if(numberCorrectMoves === 8)
            {
                //const endingTime = performance.now();
                setTimeout(alertOpen, 1000);
                    function alertOpen()
                    {
                        return alert ('You win the game! \nCongrats!');
                    }
            }*/
        }
        if(firstCardValue.classList.value != secondCardValue.classList.value) {
            setTimeout(closeC, 1500);
            function closeC(){
            firstCard.classList.remove('open', 'show');
            secondCard.classList.remove('open', 'show');
            numberClasses = 0;
            numberMistakes += 1;
            if(numberMistakes === 2) {
                //stars.children[2].children[0].setAttribute("style", "color:#ffffff; border: 2px solid blue;");
                stars.children[2].children[0].style.color = '#ffffff';
                numberStars -= 1;
            }
            if(numberMistakes === 6) {
                stars.children[1].children[0].style.color = '#ffffff';
                numberStars -= 1;
                starWord = "Star";
            }
            if(numberMistakes === 10) {
                stars.children[0].children[0].style.color = '#ffffff';
                numberStars -= 1;
                starWord = "Stars";
            }
            return;
            }
        }
    }
    return;

}

// Add main function to all cards
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', respondToTheClick);
}


/*// Create close card function
function closeCard(thatCard) {
    event.target.classList.remove('open', 'show');
}*/

// Add an eventlisteners to cards



/*// Function millisToMinutesAndSeconds() from https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
function millisToMinutesAndSeconds(millis)
{
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}*/

// Create timer function ????????????
//var timer = document.getElementById('timer');

//watch.start();

/*
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
function start() {
  toggleBtn.textContent = 'Stop';
  watch.start();
}
function stop() {
  toggleBtn.textContent = 'Start';
  watch.stop();
}
toggleBtn.addEventListener('click', function() {
  watch.isOn ? stop() : start();
});
resetBtn.addEventListener('click', function() {
  watch.reset();
});
*/







/*var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
*/



//const startingTime = performance.now();





// Check if cards is match
//function cardsMatch(){
 //   if(event.target.children.classList ===
//}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */