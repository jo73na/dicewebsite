var image = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];
var n1=dice();
var n2=dice();
var randomNumber1 = image[n1-1] + ".png";
var randomNumber2 = image[n2-1] + ".png";
//console.log(randomNumber1+"|"+randomNumber2);
var randomImageSource1 = "images/" + randomNumber1;
var randomImageSource2 = "images/" + randomNumber2;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
//console.log(randomNumber1+"|"+randomNumber2);
//console.log(n1+"|"+n2);

if (randomNumber1 === randomImageSource2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

function dice() {
  var n = Math.random();
  n = n * 6;

  //console.log(Math.round(n)+1);
  return Math.floor(n) + 1;
}
