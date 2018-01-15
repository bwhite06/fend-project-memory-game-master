/*
 * Create a list that holds all of your cards
 */
var listCards = ["fa fa-diamond","fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube" ];

var moves = document.getElementById("numberMoves").innerText = 0;
var holder = $(".fa.fa-star");


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




 let card1, card2;
 let openList = [];
 let matchList = [];

//finds a match
 function ismatch()
{
    let class1 = $(openList[0]).children('i').attr('class');
    let class2 = $(openList[1]).children('i').attr('class');
    console.log("class1:",class1);
    console.log("class2:",class2);
    if(class1 === class2)
    {
        console.log("match card");
        $(openList[0]).addClass("match");
        $(openList[1]).addClass("match");
        matchList.push(openList[0]);
        matchList.push(openList[1]);
    }
    else {
        console.log("mismatch card");
        $(openList[0]).removeClass("open show");
        $(openList[1]).removeClass("open show");
    }
    openList.length = 0;
    return;
}
//counts performance
function moves1(){
  if (document.getElementById("numberMoves").innerText ==16){
      $(holder[2]).removeClass("fa fa-star") ;
  }
  else if (document.getElementById("numberMoves").innerText ==32) {
    $(holder[1]).removeClass("fa fa-star");
  }


}



$(document).ready(function() {


//main


$(".restart").click(function() {
reset();
$(holder).addClass("fa fa-star");
});

$("ul.deck li").click(function() {

moves1();
        document.getElementById("numberMoves").innerText++;
        openList.push(this);
        $(this).addClass("show open");
        console.log(openList);

        if(openList.length === 2)
        {
            setTimeout(ismatch,500);
        }
if ($(".match").length===1){

  $(".card").removeClass("match").removeClass("open").removeClass("show");
  var moves = document.getElementById("numberMoves").innerText = 0;
  console.log("reset");
  $(holder).addClass("fa fa-star");
  listCards = shuffle(listCards);
  shuffle_cards(listCards);
  clearInterval(timer);
  totalSeconds = 0;
  timer = setInterval(setTime, 1000);
  alert("clicked same sqaure too many times");

}
        var arr = $(".match").toArray();
        if (arr.length === 16){alert("You Win in " + document.getElementById("numberMoves").innerText + " moves. With a star rating of " + $(".fa.fa-star").length + " in " + minutesLabel.innerHTML + " minutes and "+ secondsLabel.innerHTML + " seconds")}


    });

reset();

});









function reset (){

   $(".card").removeClass("match").removeClass("open").removeClass("show");
var moves = document.getElementById("numberMoves").innerText = 0;
console.log("reset");
$(holder).addClass("fa fa-star");
listCards = shuffle(listCards);
shuffle_cards(listCards);
clearInterval(timer);
totalSeconds = 0;
timer = setInterval(setTime, 1000);
}


//https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let timer = setInterval(setTime, 1000);

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
//onload
window.onload = function () {
  listCards = shuffle(listCards);
  shuffle_cards(listCards);

    reset();
};



$(".restart").click(function() {
  listCards = shuffle(listCards);
  shuffle_cards(listCards);



    reset();
});
