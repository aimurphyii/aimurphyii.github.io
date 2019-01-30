'use strict';

// Question 1

var starwars = prompt('Does Aileen like Star Wars more than Star Trek?');
console.log(starwars);

// change to lower case
var lilstarwars = starwars.toLowerCase();

//logic mclogicpants
if (lilstarwars === 'yes'){
  alert('Yes! But only the first three.')
} else if (lilstarwars === 'y'){
    alert('Yes! But only the first three.')
  }else {
  alert('No, I\'m not a trekkie.')
}

// Question 2

var age = prompt('Aileen is closer to 20 than 40?');
console.log(age);

//change to lower case
var lilage = age.toLowerCase();

//run that logic
if (lilage === 'yes' || 'y'){
  alert('No, silly, I have 2 kids! I gotta live my life first!')
}else{
  alert('Harsh, man.')
  }

// Quesiton 3

var veggies = prompt('Is Aileen a vegetarian?');
console.log(veggies);

// change to lower case
var lilveggies = veggies.toLowerCase();
// BOOM! Logics~
if (lilveggies === 'yes' || 'y'){
  alert('No ways. Meat is delicious murder. Forgive me~')
}else{
  alert('You\'re damn right I\'m not!')
}

// Question 4

var seahawks = prompt('Is Aileen a Seahawks fan?');
console.log(seahawks);

// change to lowercase, it's one word.
var lilseahawks = seahawks.toLowerCase();

//lolologic
if (lilseahawks === 'yes' || 'y'){
  alert('Technically, yeeeeeeess...')
}else{
  alert('Not a Seahawks fan, necessarily, I\'m a Seattle fan. This is my hometown so I always root for the home team.')
}

// Question 5

var korean = prompt('Is Aileen Korean?');
console.log(korean);

//take it down a case
var lilkorean = korean.toLowerCase();

//mylogica
if(lilkorean === 'yes' || 'y'){
  alert('Mostly~')
}else{
  alert('You\'re wrong...ish.')
}