// JS Basics

/* if (0 == false) {
  console.log('same');
}
else {
  console.log('different');
}

if (0 === false) {
  console.log('same');
}
else {
  console.log('different');
} 

if (1 == "1") {
  console.log('same');
}
else {
  console.log('different');
}

if (1 === "1") {
  console.log('same');
}
else {
  console.log('different');
}

if (null == undefined) {
  console.log('same');
}
else {
  console.log('different');
}

if (null === undefined) {
  console.log('same');
}
else {
  console.log('different');
}

if ('0' == false) {
  console.log('same');
}
else {
  console.log('different');
}
if ('0' === false) {
  console.log('same');
}
else {
  console.log('different');
} 

// Java Function example
Private Double cost(Double subTotal) {
  return (subTotal * 1.13);
}

System.Out.Print(cost(59.99));



// JS Version
let cost = function(subTotal) {
  return (subTotal * 1.13);
}

console.log(cost(59.99));


// create an array called fruit with 3 string values in it
let fruit = ['apple', 'banana', 'mango', 'grapes'];

let fruitList = '';

// loop through the array and display each item to the console
for (let i = 0; i < fruit.length; i++) {
  // 1 fruit per line
  //console.log(fruit[i]);
  
  // append each fruit to a single string
  fruitList += fruit[i];
  
  if (i != (fruit.length -1)) {
    fruitList += ',';
  }
  
}

console.log(fruitList);
*/

// nested array practice
var foods = [
  ['sushi', ['rice', 'seaweed', 'fish']],
  ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']],
  ['pizza', ['dough', 'cheese', 'sauce']]
];

for (let i = 0; i < foods.length; i++) {
  // food name
  console.log(foods[i][0]);
  
  // ingredients
  let ingredients = foods[i][1];
  
  for (let j = 0; j < ingredients.length; j++) {
      console.log('\t' + ingredients[j]);
  }

  // this works too
  /*for (let j = 0; j < foods[i][1].length; j++) {
    console.log('\t' + foods[i][1][j]);
  }*/
}

