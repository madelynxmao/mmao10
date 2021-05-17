// Team Half Fish :: Madelyn Mao, Benjamin Gallai, Andrew Jiang
// SoftDev pd1
// K30 -- canvas based JS animation
// 2021-05-18t

//access canvas and buttons via DOM
var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonLogo"); // GET LOGO BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

var requestID;  //init global var for use with animation frames

var clear = (e) => {
    console.log("clear invoked...");
    stopIt();
    ctx.clearRect(0, 0, c.width, c.height); // clears the canvas
    angle = 0;
};

var angle = 0;
var angleIncrement = Math.PI / 200;

var xBuffer = 50;
var yBuffer = 100;

var mWidth = 100;
var mHeight = 100 + yBuffer;

var mXBuffer = 20;
var mYBuffer = 20;

var start = { x: xBuffer, y: c.height - yBuffer };
var cp = { x: start.x + mWidth, y: yBuffer - mHeight };
var end = { x: start.x + 2*mWidth, y: start.y };

var start2 = { x: start.x + mXBuffer, y: start.y };
var cp2 = { x: cp.x, y: cp.y + mYBuffer };
var end2 = { x: end.x - mXBuffer, y: end.y };

var start3 = { x: c.width - start.x, y: start.y };
var cp3 = { x: start3.x - mWidth, y: cp.y };
var end3 = { x: start3.x - 2*mWidth, y: end.y };

var start4 = { x: c.width - start.x - mXBuffer, y: start.y };
var cp4 = { x: cp3.x, y: cp2.y };
var end4 = { x: end3.x + mXBuffer, y: end.y };

var drawLogo = () => {
    console.log("drawLogo invoked...");
    var step = () => {
        ctx.clearRect(0, 0, c.width, c.height); // clears the canvas
        //filling the background red
        ctx.fillStyle = "#d00a30";
        ctx.beginPath();
        ctx.rect(0, 0, c.width, c.height);
        ctx.fill();
        
        //drawing the M
        ctx.fillStyle = "#fdcd2a";
        ctx.beginPath(); // starts the path for the logo
        ctx.moveTo(start.x, start.y);
        ctx.quadraticCurveTo(cp.x, cp.y, end.x, end.y);
        ctx.moveTo(start2.x, start2.y);
        ctx.quadraticCurveTo(cp2.x, cp2.y, end2.x, end2.y);
        ctx.moveTo(start3.x, start3.y);
        ctx.quadraticCurveTo(cp3.x, cp3.y, end3.x, end3.y);
        ctx.moveTo(start4.x, start4.y);
        ctx.quadraticCurveTo(cp4.x, cp4.y, end4.x, end4.y);
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(start2.x, start2.y);
        ctx.moveTo(end3.x, end3.y);
        ctx.lineTo(end.x, end.y);
        ctx.moveTo(start4.x, start4.y);
        ctx.lineTo(start3.x, start3.y);        
        ctx.fill("evenodd"); // renders the path
        
        //drawing the circle animation
        ctx.fillStyle = "#d00a30";
        ctx.beginPath();
        ctx.moveTo(end.x, end.y);
        ctx.lineTo(end.x - 3*mWidth*Math.cos(angle), end.y + 3*mWidth*Math.sin(angle));
        ctx.moveTo(end.x, end.y);
        ctx.lineTo(end.x + 3*mWidth*Math.cos(angle), end.y + 3*mWidth*Math.sin(angle));
        ctx.arc(end.x, end.y, 3*mWidth, Math.PI + angle, -angle);
        ctx.fill();
        console.log("draw circle");
        
        if (angle < Math.PI / 2) {
        	angle += angleIncrement;
          console.log(angle);
        }
        
        requestID = window.requestAnimationFrame(step); // adds step to the queue for the next animation frame
        // each frame, step should be called exactly once
    };
    requestID = window.requestAnimationFrame(step); // starts the cycle of step calling itself each frame
};


var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID); // stops step from being called and calling itself next frame
};


// sets the onclick events of each button to call the appropriate function
buttonclear.addEventListener("click", clear);
dotButton.addEventListener("click", drawLogo);
stopButton.addEventListener("click", stopIt);