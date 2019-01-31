'use strict';

// ***Q1***

var starwars = prompt('Does Aileen like Star Wars more than Star Trek?');
console.log(starwars);

// change to lowercase
var lilstarwars = starwars.toLowerCase();

// make that logic
if (lilstarwars === 'yes' || lilstarwars === 'y'){
  alert('May the force be with you!');
}else{
  alert('Wrong. You don\'t know me, boo.');
}

// ***Q2***

var age = prompt('Was Aileen born in the 80s?');
console.log(age);

// ch-ch-ch-changes... to lowercase
var lilage = age.toLowerCase();

// if~then
if (lilage === 'yes' || lilage === 'y'){
  alert('God bless the 80s!');
}else{
  alert('Wrong, chile of the 80s, here. RIP Challenger.');
}

// ***Q3***
var veggies = prompt('Is Aileen a vegetarian?');
console.log(veggies);

// taking it down a case
var lilveggies = veggies.toLowerCase();

// and the survey says?
if (lilveggies === 'yes' || lilveggies === 'y'){
  alert('This one time, in college... I tried. I really tried.');
}else{
  alert('Tried it twice, and I\'ll only go back kicking and screaming.');
}

// ***Q4***
var seahawks = prompt('Is Aileen a Seahawks fan?');
console.log(seahawks);

// let's be consistent. lowercases y'all
var lilseahawks = seahawks.toLowerCase();

// yes, or else!
if(lilseahawks === 'yes' || lilseahawks === 'y'){
  alert('MMmmm... well, not exactly.');
}else{
  alert('Not a true Seahawks fan, but by default. I\'m a Seattle fan. This is my hometown so I always root for the hometeam.');
}

//  ***Q5***

var korean = prompt('Aileen seems Asian. Is she... Korean?');
console.log(korean);

// get low...ercased.
var lilkorean = korean.toLowerCase();

// so, what is she?
if (lilkorean === 'yes' || lilkorean === 'y'){
  alert('Mostly~ but, wait! There\'s more...');
}else{
  alert('You\'re not entirely wrong.')
}