/** Created by Junghwan Yang on 1/11/2017. ...*/

//reference the fileSystem module that ships with node
var fs = require('fs');

//drinks
console.log('DRINKS:');

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);

//food
console.log('\nFOOD:');

var food = fs.readFileSync('food.txt', 'utf-8');
console.log(food);