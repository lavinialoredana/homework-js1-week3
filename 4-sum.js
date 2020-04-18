/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/

var numbers = [2,4,7, -4];
var total =0;

function findSum (numbers) {

    var total = 0;
    for (var i = 0; i >=50 && i <=100; i+=2) {
        if (even (i)) {

            total += i;
        }      
    }
    return total
};

Console.log(findSum);

