

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomimageSource1= "images/dice"+ randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimageSource1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomimageSource2= "images/dice"+ randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimageSource2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML= "&#128512 Play1 wins!";

}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=" play2 Wins! &#128512";
}
else {
  document.querySelector("h1").innerHTML="Draw!!";

}
