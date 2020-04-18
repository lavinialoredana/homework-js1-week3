/*
Max
Given an array of numbers, create a function to return the maximum 
*/

function max(numbers){
//    console.log(Math.max.apply(null, numbers));
var maxNumber = numbers[0];

for ( var i = 0; i <numbers.length; i= i+1) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i] 
    }
  
 }
 return maxNumber;
}


const numbersArray1 = [1,3,5,9];
// console.log(Math.max.apply(null, numbersArray1));

const numbersArray2 = [7,8,5,7,3,6];
// console.log(Math.max.apply(null, numbersArray2));

console.log("Maximum number in first array is " + max(numbersArray1));
console.log("Maximum number in second array is " + max(numbersArray2));