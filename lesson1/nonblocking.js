/** Created by Junghwan Yang on 1/11/2017. ...*/

//link to fileSystem library
var fs = require('fs');

//get drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks) {
	if(err) {
		console.log(err);
		return;
	}
	//if we get drinks, print them out
	console.log(drinks);

	//food heading
	console.log('\nFOOD: ');
});

//drink heading
console.log('DRINKS: ');

//get food
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
	//if we get food, print them out
	console.log(food);
});

