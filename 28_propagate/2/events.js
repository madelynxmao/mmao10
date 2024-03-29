// demo 2
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

table.addEventListener('click', clicky);


// Q: When user clicks on a cell, in what order will the pop-ups appear?
// 1. cell name
//  ex:Yoda
// 2. names of all items in the row
//  ex: <td>Yoda</td>
//      <td>Luke</td>
//      <td>Obi-Wan</td>
// 3. names of all items in each row
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

