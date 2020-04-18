/*
Given an array of cities create a function that returns the number of cities that start with 'A'

It may be useful know that:
- in strings you can use the function startsWith()
- we can iterate arrays
- we know the lenght of an array by using length


var name = "Jose";
console.log(name + " starts with E = " + name.startsWith('E'));
console.log(name + " starts with J = " + name.startsWith('J'));

const namesArray = ["Jose","Juan"];
console.log(namesArray[0]); //"Jose"
console.log(namesArray.length); //2
*/

function find(cities, letter) {
  var sum = 0;
  for (var i = 0; i < cities.length; i = i + 1) {
	  if (cities[i].startsWith(letter)) {
		sum = sum + 1;  
		//console.log(sum);
		//console.log(cities[i]);
	  }
  }
  return sum;
}

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];

console.log("Number of cities with A = " + find(citiesArray, "A"));
console.log("Number of cities with B = " + find(citiesArray, "B"));

// LAV'S SOLUTION
// function find(cities, letter){
// 	for (var counter = 0; counter === cities.startsWith("A"); counter++){
// 		if (cities.startsWith("A")>0) {

// 		}
// 		return counter;
// 	}
// }
