// Team m&a - Anya Zorin, Madelyn Mao
// SoftDev
// K25 --  I See a Red Door...
// 2021-5-4

let state = "dot";
var c = document.getElementById("slate");
var ctx = c.getContext("2d");


function changeShape(){
    if (state=="dot"){state="rectangle"}
    else{state="dot"}
    return;
}

function empty(){
    ctx.clearRect(0,0,600,600);
}

c.addEventListener("click", (e)=>{
    // e.offsetX gives the x coordinate of the mouse in the canvas
    var x = e.offsetX;
    // y.offsetX gives the y coordinate of the mouse in the canvas
    var y = e.offsetY;
    if (state=="dot"){
        // beginPath is the equivilant to putting down a pen to start drawing
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    if (state=="rectangle"){
        ctx.fillRect(x, y, 50, 30)
    }
    //preventDefault keeps the functions from doing what they normally do (ex; cant check a checkbox)
    //in this case it does nothing
    e.preventDefault();
    return;
});