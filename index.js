var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

//change first image
var img1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", img1);

//change second image
var img2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", img2);

winner(img1,img2);

function winner(img1, img2) {
    if ( img1 === img2 ) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if ( img1 > img2 ) {
        document.querySelector("h1").innerHTML = "🥇Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🥇";
    }
}

