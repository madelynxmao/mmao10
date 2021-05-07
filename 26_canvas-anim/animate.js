// m&a Madelyn Mao, Anya Zorin
// SoftDev pd0
// K26 -- canvas based JS animation
// 2021-05-06

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");// GET CANVAS
var dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#0000ff";
var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  e.preventDefault();
  ctx.clearRect(0,0,500,500);
}

var radius = 0;
var growing = true;

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...");
  requestID = window.requestAnimationFrame(drawDot);
  dotButton.disabled = true; //disables button
    if (growing){
      clear();
      radius += 1;
      ctx.beginPath();
      ctx.arc(250, 250, radius, 0, 2 * Math.PI);
      ctx.fill();
      if (radius > 250) growing = false;
    }
    if (!growing){
      clear();
      radius -= 1;
      ctx.beginPath();
      ctx.arc(250, 250, radius, 0, 2 * Math.PI);
      ctx.fill();
      if (radius < 1) growing = true;
    }
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
  dotButton.addEventListener("click",drawDot);
  dotButton.disabled = false; //re-enable button
};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click", stopIt );