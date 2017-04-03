// js arrays practice

// 1. create array
var foods = ['fish tacos', 'mango salad', 'california roll'];

// 2. output first element
console.log(foods[0]);

// 3. display each item in the array on a new line
for (var i = 0; i < foods.length; i++) {
	console.log(foods[i] + '\n');
}

// 4. display the items this way using only 1 console.log command: Favourite Foods: [comma-separated list]
var output = 'Favourite Foods: ';

for (var i = 0; i < foods.length; i++) {
	output += (foods[i]);

	if (i < (foods.length-1)) {
		output += ',';
	}
}

console.log(output);

// 5. modify to include nested arrays.  use nested loops to display all the foods and their ingredients
foods = [
	['fish tacos', 
		['fish', 'tortillas', 'salsa']], 
	['mango salad', 
		['mango', 'lime', 'cilantro', 'peanuts']], 
	['california roll',
		['rice', 'nori', 'avocado', 'surimi', 'cucumber']];

var output = '';

for (var i = 0; i < foods.length; i++) {

	// store the current element as its own array
    current = foods[i];

	// display the food name (the first item in the array)  
    output += current[0] + '\n';
  
  	// start at the 2nd element of the current item and output the rest of the items
	for (var j = 1; j < current.length; j++ ) {
      output += '\t' + current[j] + '\n';
    }
}

console.log(output);