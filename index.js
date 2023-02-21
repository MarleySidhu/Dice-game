//random number generator for each player//

let n = Math.floor(Math.random() * 6+1);
let x = Math.floor(Math.random() * 6+1);

let image1 = "images/dice" + n + ".png"
let image2 = "images/dice" + x + ".png"

document.getElementById("img1").setAttribute("src", image1);
document.getElementById("img2").setAttribute("src", image2);

if (n > x ) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (x > n ) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}









