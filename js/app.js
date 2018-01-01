/*
 * Create a list that holds all of your cards
 */
var list_cards = ["fa fa-diamond","fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube" ];
var array = $(".card").toArray();
var moves = document.getElementById("numberMoves").innerText = 0;

 function reset (){
    $(".card").removeClass("match").removeClass("open").removeClass("show");
var moves = document.getElementById("numberMoves").innerText = 0;
shuffle(list_cards);
 }

 function bomb(){
 var arr = $(".fa.fa-bomb").parents('.card').toArray()

 $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-bomb").parents('.card').addClass("match");
 }



 });

 $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-bomb").parents('.card').addClass("match");
 }

 });

 }

 function bicycle(){
 var arr = $(".fa.fa-bicycle").parents('.card').toArray()

 $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-bicycle").parents('.card').addClass("match");
 }



 });

 $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-bicycle").parents('.card').addClass("match");
 }

 });

 }

 function leaf(){
 var arr = $(".fa.fa-leaf").parents('.card').toArray()

 $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-leaf").parents('.card').addClass("match");
 }



 });

 $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-leaf").parents('.card').addClass("match");
 }

 });

 }

 function cube(){
 var arr = $(".fa.fa-cube").parents('.card').toArray()

 $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-cube").parents('.card').addClass("match");
 }



 });

 $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-cube").parents('.card').addClass("match");
 }

 });

 }

 function anchor(){
 var arr = $(".fa.fa-anchor").parents('.card').toArray()

 $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-anchor").parents('.card').addClass("match");
 }



 });

 $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

 if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-anchor").parents('.card').addClass("match");
 }

 });

 }

 function paperPlane(){
   var arr = $(".fa.fa-paper-plane-o").parents('.card').toArray()

   $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

   if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
    $(".fa.fa-paper-plane-o").parents('.card').addClass("match");
   }



   });

   $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

   if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
    $(".fa.fa-paper-plane-o").parents('.card').addClass("match");
   }

   });

   }

function diamond(){
var arr = $(".fa.fa-diamond").parents('.card').toArray()

$(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
 $(".fa.fa-diamond").parents('.card').addClass("match");
}



});

$(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
 $(".fa.fa-diamond").parents('.card').addClass("match");
}

});

}

function bolt(){
  var arr = $(".fa.fa-bolt").parents('.card').toArray()

  $(arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show");

  if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
   $(".fa.fa-bolt").parents('.card').addClass("match");
  }



  });

  $(arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")

  if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
   $(".fa.fa-bolt").parents('.card').addClass("match");
  }

  });

  }



function flip(){
var moves = document.getElementById("numberMoves").innerText++;

if (!$(".fa.fa-bolt").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};

if (!$(".fa.fa-diamond").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
if (!$(".fa.fa-paper-plane-o").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
if (!$(".fa.fa-anchor").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
if (!$(".fa.fa-cube").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
if (!$(".fa.fa-leaf").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
if (!$(".fa.fa-bicycle").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
if (!$(".fa.fa-bomb").parents('.card').hasClass("match")) {
$(".card").removeClass("open").removeClass("show");
};
};

function start(){

bolt();
diamond();
paperPlane();
anchor();
cube();
leaf();
bicycle();
bomb();
}

start();
$('.card').click(function(){flip()});
start();

$(".restart").click(function(){reset()})
start();
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

function shuffle_cards(array)
{
    var list = $(".deck li");
    for(var i = 0; i < list.length; i++)
        {
            var curr = list[i];
            curr = curr.getElementsByTagName("i")[0].setAttribute("class", array[i]);
            console.log(curr);
        }
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
