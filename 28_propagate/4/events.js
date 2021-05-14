// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td'); //short
var trs = document.getElementsByTagName('tr'); //second short
var table = document.getElementsByTagName('table')[0]; //entire


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //A: When e.stopPropagation(); is not commented out, only the first pop up is displayed
  //e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?
//A: No.

//Predict, then test...
//Q: What effect does the boolean arg have in each?
//   (Leave exactly 1 version uncommented to test...)


for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
}
// 3,2,1 nothing changes when true is removed

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky,true);
}
// becomes 3,1,2 (3 is longest)when arg is false

table.addEventListener('click', clicky,true);
// becomes 2,1,3 (3 is longest)when arg is false
