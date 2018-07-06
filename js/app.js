/*
 * Create a list that holds all of your cards
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
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


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


var matched = false; // not sure why I need this switch, but ??


var list =
[
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

// builder, templateLiteral
// append builder to `deck`
// `<li class="card"><i class="fa ${arrayItem}></i></li>`


// for (var i = 0; i < list.length; i++){

// }


var deck = document.body.querySelector('.deck');

var openCards = [];

for (var i = 0; i < list.length; i++) {
    var html = '';
    html = document.createElement('li');
    html.setAttribute('class', 'card');
    html.innerHTML = `<i class='fa ${list[i]}'></i>`
    deck.appendChild(html);
}

// Test to try to fix: HTMLLIElement problem

var cardList = Array.from(deck.children);
var matchCards = [];

cardList.forEach(function(card){

    // YES! This gives me the correct class name, fa-* !!! Yay!

    card.addEventListener('click', function(e){
        console.log("Card element obj type is: " + typeof(card.lastElementChild.classList[1]));


        var firstCard = card.lastElementChild.classList[1];
        console.log("First card is: " + firstCard);
        matchCards.push(firstCard); // capture 1

        // secondCard is erroring with "undefined"

        // how do i capture the second card. dig into eventListeners to see how to track click order ???


        // var secondCard = card.classList[1];
        // console.log(secondCard);
        // console.log("Second card is: " + secondCard);

        matchCards.push(secondCard); // capture 2

        // if (firstCard == secondCard) {
        //     alert("You matched!");

        // }

        console.log(matchCards);
        console.log("You clicked me at: " + e.timeStamp);
        console.log(e);

        matchCards = [];


    });


});


/*
 For [object HTMLLIElement] fix, see https://stackoverflow.com/questions/44953801/getting-object-htmllielement-instead-of-text-javascript-function
*/



// placing cards variable above for-loop breaks eventListener feature
var cards = document.querySelectorAll('.card');

cards.forEach(function(card){


    card.addEventListener('click', function(e){

    if (list.includes(card)){

        console.log(`${card} already added to ${list}`);
    } else {
        list.push(card);
        console.log('this is: ' + card);
        /*
 For [object HTMLLIElement] fix, see https://stackoverflow.com/questions/44953801/getting-object-htmllielement-instead-of-text-javascript-function
*/

    }

    console.log('Card clicked is: ' + e.currentTarget);


    if (card.classList.length < 2) {
        // test: actually removes all associated classes
        // card.classList.value = 0;
        card.classList.add('open', 'show');

        openCards.push(card);
      }
    console.log(openCards);



    });


    // how to match: currentArrayItem === previousArrayItem ?

    // for (var i = 0; i < openCards.length; i++) {
    //     if (card === openCards[i].)
    // }


    // Test for:
    // innerHTML: "<i class=\"fa fa-cube\"></i>"
    // lastElementChild: i.fa.fa-cube
    // classList: DOMTokenList [ "fa", "fa-cube" ]
    // className: "fa fa-cube"

    // Idea:Play with cardList[0].lastElementChild.classList



    for (var i = 0; i < openCards.length; i++) {
        if (card.matches(openCards[i - 1])) {
            var previousCard = '';
            previousCard = openCards[i];

            card.classList.add('matched');
            previousCard.classList.add('matched');
        }
    }

});




console.log("help2");




