/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
function findSum() {
    var sum = 0;
    for (var i = 50; i < 101; i += 1) {
        if (i % 2 === 0) {
            sum += i;  
            
        }
    }
   return sum;
}
console.log(findSum());

