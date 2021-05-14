// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //A: When e.stopPropagation(); is not commented out, only the first pop up is displayed
  //e.stopPropagation();
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//   (Leave exactly 1 version uncommented to test...)

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky);
//does 2,3,1

// A: When arg is false, bubbling occurs, which means all events fired up starting from the most nested element to the least nested element.
//    When arg is true, capturing occurs, which means all events are fired up starting from the least nested element to the most nested element.


// Q: When user clicks on a cell, in what order will the pop-ups appear?
// 1. names of all items in each row
/*  ex:
        <tbody><tr>
            <td>Yoda</td>
            <td>Luke</td>
            <td>Obi-Wan</td>
        </tr>
        <tr>
            <td>Vader</td>
            <td>Maul</td>
            <td>Palpatine</td>
        </tr>
        </tbody>
*/
// 2. cell name
//  ex:Yoda
// 3. names of all items in the row
//  ex: <td>Yoda</td>
//      <td>Luke</td>
//      <td>Obi-Wan</td>
