/*
 * Create a list that holds all of your cards
 */

var list = [
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

var deck = document.body.querySelector('.deck');

var makeDeck = function(array) {
    var listItem = '';
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
var matched = false; // not sure why I need this switch, but ??

var daBouncer = [];


cards.forEach(showCard);

// READ: EventTarget.addEventListener() in MDN web docs

/* FUNCTIONS */

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

function showCard(element, index, array) {


    // For info, see: CSSStyleDeclaration.setProperty() in MDN web docs
    // card.style.setProperty('font-size', '12px');

    // Add or remove multiple classes using spread operator
    element.onclick = function() {
        var cls = ['show', 'open'];
        var result = element.classList;

        daBouncer.push(element);

        // possibly move if outside of click handler

        if (daBouncer.length === 0) {
            var card0 = daBouncer[0].innerHTML;
            result.add(...cls);

        }
        if (daBouncer.length === 1) {
            var card1 = daBouncer[1].innerHTML;
            result.add(...cls);
        }

        matchCards(card0, card1);









        console.log('Element: ', element);
        console.log('Index: ' + index);
        console.log('Array: ', array); // When I concat string with arr, a HTMLLIElement is returned ???
        console.log(array[index].firstChild);
    };

}

function matchCards(c1, c2) {

    if (c1 === c2) {
        return true;
    }

}




/*** HACKS ***/

// cards.forEach(function(card) {
//     // bouncer[bouncer.length] = card; // adds all cards to bouncer Array
//     // card.addEventListener('click', showCard);
//     // Arrow function info, https://eloquentjavascript.net/15_event.html
//     card.addEventListener('click', event => {
//         event.target.classList.add('show', 'open');
//     });
// });