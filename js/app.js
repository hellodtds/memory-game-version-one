const list = [
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


let itemMatch = [];

// Currently unable to fix issue where 2 items get pushed to itemMatch instead of 1 item and then the next item.
// Idea is to count length of itemMatch and at each click (2) a card is added for a total of 2 cards.
// HELP???

function gameBoard() {
    for (var i = 0; i < list.length; i++) {
        const deck = document.querySelector('.deck');
        let li = document.createElement('li');
        li.setAttribute('class', 'card');
        li.innerHTML = `<i class='fa ${list[i]}'></i>`;

        // li.addEventListener('click', show, false);
        li.addEventListener('click', gameRules, false);

        deck.appendChild(li);
    }

    // trying to remove eventlistener to fix errors with itemMatch array
    // if (deck.children.length === 16) {
    //     li.removeEventListener('click', gameRules, false);
    // }



}

gameBoard(); // create game board;


function gameRules(el) {
    this.el = this;
    open.apply(this.el, arguments);

    // write another function
    show.apply(this.el, arguments);

    // write another function
    hello.apply(this.el, arguments);

    // write another function
    matcher.apply(this.el, arguments);



    // grabFirstItem.apply(this.el, arguments);

    // grabSecondItem.apply(this.el, arguments);

    // let firstItem = grabFirstItem();

    // if (firstItem) {
    //     grabSecondItem();
    // } else if (firstItem && secondItem) {
    //     if (firstItem == secondItem) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // } else {
    //     firstItem = '';
    //     secondItem = '';
    //     alert("no match");
    // }

}


function show(e) {
    e.currentTarget.classList.toggle('show');


    if (e.currentTarget.classList.contains('show')) {
        alert("show card");
    } else {
        alert("hide card");
    }

    console.log("show function target: " + e.currentTarget.innerHTML);
    // When this function is used as an event handler: this === e.currentTarget
}

function open(e) {
    e.currentTarget.classList.toggle('open');

    if (e.currentTarget.classList.contains('open')) {
        alert("open card");
    } else {
        alert("close card");
    }

    console.log("open function target: " + e.currentTarget.innerHTML);
    // When this function is used as an event handler: this === e.currentTarget
}


function hello(e) {
    alert('hello');
}


function matcher(e) {



    let compare = function(e) {
        return e.currentTarget.innerHTML;
    }

    let item = compare(e);
    console.log(item);


    alert(item);
    alert("items in itemMatch :" + itemMatch.length);

    if (itemMatch.length < 1) {
        itemMatch.push(item);
    }

    if (itemMatch.length < 2) {
        itemMatch.push(item);
    }

    if (itemMatch.length > 2) {
        itemMatch.length = 0;
    }



    // function matcher(e) {



    //     let compare = function(e) {
    //         return e.currentTarget.innerHTML;
    //     }

    //     let item = compare(e);
    //     console.log(item);


    //     alert(item);
    //     alert("items in itemMatch :" + itemMatch.length);

    //     if (itemMatch.length < 1) {
    //         itemMatch.push(item);
    //     }

    //     if (itemMatch.length < 2) {
    //         itemMatch.push(item);
    //     }

    //     if (itemMatch.length > 2) {
    //         itemMatch.length = 0;
    //     }



    console.log(itemMatch);
}







/************* OlD WaY Of BuIldInG CaRd DeCk *************************/

// const makeDeck = function(array) {
//     let listItem = '';
//     // For info, see: Array.prototype.values() in MDN web docs
//     let iterator = array.values();

//     for (let value of iterator) {
//         listItem = document.createElement('li');
//         listItem.setAttribute('class', 'card');
//         listItem.innerHTML = `<i class='fa ${value}'></i>`;
//         deck.appendChild(listItem);
//     }
// };

// Shuffle Array list and make list of cards
// makeDeck(shuffle(list));




// Turn HTMLLIElement list into ARRAY
// const cards = Array.from(deck.children);





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




/*
 * Create a list that holds all of your cards
 */



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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