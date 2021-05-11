// Team two-do (Jonathan Lee, Madelyn Mao)
// SoftDev pd1
// K27 -- canvas based JS animation
// 2021-05-07w
// HTML file for JavaScript canvas work


// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON
var DVDButton = document.getElementById("buttonDVD"); // GET DVD BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d"); 

//set fill color to team color
ctx.fillStyle = 'red'; 

var requestID = 0;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0,0,c.width,c.height);
};


var radius = 0;
var growing = true;


var circlesize = 0; // for circle size

//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...")
  
  clear(ctx);
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, circlesize, 0, 2 * Math.PI);
  ctx.stroke();
  window.cancelAnimationFrame(requestID); // so it doesn't speed up when clicking the button multiple times
  window.requestAnimationFrame(drawDot);
  
  requestID ++

  if (growing) { // for proper bouncing
    circlesize++;
        if (circlesize >= c.width/2) {
            growing = false;
        }
  } else {
    circlesize --;
        if (circlesize <= 0) {
            growing = true;
        }
  }
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );

  window.cancelAnimationFrame(requestID); // stops it 
};

var dvdxmov = 1;
var dvdymov = .5;
var dvdxpos = 1;
var dvdypos = 1;
var logo = new Image();
logo.src = "logo_dvd.jpg";
imagewidth = 60;
imageheight = 40;

var deeVeeDee = () => {
    console.log("deeVeeDee invoked...");

    clear(ctx);
    ctx.drawImage(logo, dvdxpos, dvdypos, imagewidth, imageheight);
    window.cancelAnimationFrame(requestID);
    window.requestAnimationFrame(deeVeeDee);

    requestID ++

    // if x pos is greater than frame width, negate x position, moves left
    // if x pos is less than 0, negate x position, moves right
    // if y pos is greater than frame height, negate y position, moves down
    // if y pos is less than 0, negate y position, moves up

    if (dvdxpos >= c.width - imagewidth) {
        dvdxmov *= -1;
    } else if (dvdxpos <= 0) {
        dvdxmov *= -1;
    }
    if (dvdypos >= c.height - imageheight) {
        dvdymov *= -1;
    } else if (dvdypos <= 0) {
        dvdymov *= -1;
    }

    dvdxpos += dvdxmov;
    dvdypos += dvdymov;
}


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
DVDButton.addEventListener( "click", deeVeeDee );