// Team eggs :: Madelyn Mao, Winnie Huang
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15
// --------------------------------------------------

//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
function gcd(a,b){
    if (b == 0) return a;
    else return gcd(b, a % b);
}
console.log(gcd(3,4));
console.log(gcd(3,6));


//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
function randomStudent(list){
    length = list.length;
    picked_index = Math.floor(Math.random() * length);
    return list[picked_index];
}

var student_names = ['a','b','c','d','e'];
console.log(randomStudent(student_names));
