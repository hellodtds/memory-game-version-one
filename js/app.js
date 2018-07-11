/*
 * Create a list that holds all of your cards
 */

let list = [
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-bolt',
    'fa-cube',
    'fa-anchor',
    'fa-leaf',
    'fa-bicycle',
    'fa-diamond',
    'fa-bomb',
    'fa-leaf',
    'fa-bomb',
    'fa-bolt',
    'fa-bicycle',
    'fa-paper-plane-o',
    'fa-cube'
];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

let deck = document.body.querySelector('.deck');

let makeDeck = function(array) {
    let listItem = '';
    // For info, see: Array.prototype.values() in MDN web docs
    let iterator = array.values();

    for (let value of iterator) {
        listItem = document.createElement('li');
        listItem.setAttribute('class', 'card');
        listItem.innerHTML = `<i class='fa ${value}'></i>`;
        deck.appendChild(listItem);
    }
};

// Shuffle Array list and make list of cards
makeDeck(shuffle(list));

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



// Turn HTMLLIElement list into ARRAY
var cards = Array.from(deck.children);


cards.forEach(function(item) {

    // Add a click handler



    // displayCard

    // addCard to open *list*

    // conditional statements



    // check for item match

    // if match, lock items in .open and .show state, and remove from *list*

    // if no match, remove and hide items from *list*

    // increment counter, each card click

    // if all items open, then stop counter and display *winner* message*

});





/* FUNCTIONS */
function showCard(item) {
    item = this;

    this.classList.toggle('show');
    this.classList.toggle('open');

}

function matchItem(a, b) {

    if (a === b) {
        return "match";
    } else {
        return "no match";
    }

}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}