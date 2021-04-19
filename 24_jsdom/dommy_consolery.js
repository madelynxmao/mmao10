/*
  Team Eggs (Madelyn Mao, Winnie Huang)
  SoftDev pd1 
  K24 -- Dev console and DOM
  2021-04-18
*/

//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;

//assign an anonymous fxn to a var
// adds 30 to x, assigns value to f
var f = function(x) {
  var j=30;
  return j+x;
};

//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


//(define fact (lambda (n) ...) 
//iterative
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){
    prod = prod * n;
  }
  return prod;
};

//(define fact (lambda (n) ...) 
//recursive
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};

//appending new item to thelist with text
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

// removes last item from a list
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

// adds 'red' to each item in the list
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

// adds 'red' to even numbered items in list, 'blue' to odd numbered items
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

// when button is clicked, the console prints 
//here comes e... with location of mouse
//and here comes 'this'... with button id
var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}

// gets location of b
// calls buttonCallback whenever button is clicked
var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);


/* when run in console...
function (e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
} = $2

*/
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}

// prints the user's mouse location when hovering above list
// list item turns red when hovered above
var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}