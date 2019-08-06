/*
 *
Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

const cards = document.querySelectorAll('.card');
shuffle(cards);

// Set reset button
const resetButton = document.querySelector('.fa-repeat');
resetButton.addEventListener('click', function restart() {
    window.location.reload()
});

/*// Set up the event listener for a card
function respondToTheClick()
{
    var cardState, picture
    if ( event.target.tagName === "i" )
    {
        cardState = event.target.parentElement.className;
        picture =  event.target.className;
    }
    else
    {
            cardState = event.target.className;
            picture =  event.target.children[0].className;
    }
    console.log(cardState + " " + picture)
}

for(let i = 0; i < cards.length; i++)
{
   cards[i].addEventListener('click', respondToTheClick);
}

*/

// Create open card function
function openCard(thatCard) {
    thatCard.classList.add('open', 'show');
}
// cards[0].classList.add('open', 'show');


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