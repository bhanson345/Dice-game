var randomNumber1 = (Math.random() * 6 | 0) + 1;
var randomNumber2 = (Math.random() * 6 | 0) + 1;
var playerWins = document.querySelector("h1");
randomNumber1 = document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

randomNumber2 = document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
    playerWins.innerText = "Player one Wins!";
} else if (randomNumber1 < randomNumber2) {
    playerWins.innerText = "Player Two Wins!";
} else {
    playerWins.innerText = "Draw!";
}