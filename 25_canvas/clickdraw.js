

canvas = document.getElementById('slate');
ctx = canvas.getContext('2d');

document.addEventListener("click", getClickPosition, false);

clicked = true;

function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
}

current = "draw";

// every time button is clicked, mode changes from drawing-rectangle
function draw_mode(){
  if (current == "draw"){current = "rectangle";}
  else{
    if (current == "rectangle"){
      current = "draw";
    }
  }
}

// drawing and rectangle
function main(){
  if (current == "draw"){
    console.log("drawing mode");

    //make it so that the square is made where the user clicks

    ctx.fillRect(xPosition,yPosition,1,1);

  }
  else{
    console.log("rectangle mode");
    ctx.fillStyle = 'green';


    //make it so that the rectangle is made where the user clicked

    ctx.fillRect(0, 0, xPosition, yPosition);
  }
}

// clears board
function clear(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, slate.width, slate.height);
}