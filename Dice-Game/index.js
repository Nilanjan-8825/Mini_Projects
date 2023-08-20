let number=Math.ceil(Math.random()*6);
let number2=Math.ceil(Math.random()*6);
var image1path="images/dice"+number+".png";
var image2path="images/dice"+number2+".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src",image1path);
var image2=document.querySelector(".img2");
image2.setAttribute("src",image2path);
if (number > number2) {
    document.querySelector("h1").innerHTML = "👉Player 1 Wins!";
  }
else if (number2 > number) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!✌️";
  }
else {
    document.querySelector("h1").innerHTML = "Draw!😒";
  }
  