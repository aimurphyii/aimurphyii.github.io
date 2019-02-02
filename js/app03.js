'use strict';

// get the user's name
var hiFriend = prompt('Heyo~! Aileen, here. Tell me, stranger, what\'s your name?');
console.log(hiFriend);

alert('Welcome, ' + hiFriend + '! Let\'s see where you line up on the stalker/friendship scale...')

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
  alert('Wrong, child of the 80s, right here. RIP Challenger.');
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
  alert('Not a true Seahawks fan, but I\'m a fan by default. I\'m a Seattle fan. This is my hometown so I always root for the hometeam.');
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

//  ***Q6***

var married = prompt('How many years have I been married?');

// you get 4 guesses
var tries = 4
while (tries > 0){
if (married > 7){
  var married = prompt ('Not quite that long, try lower...');
}else if (married < 7){
  var married = prompt ('We beat those odds, try higher...');
}else{
  alert('Bingo!');{break;}
}
tries--;
}

// ***Q7***


// var tries = 6
// while (tries < 6){}

// var studied = [
//     'korean',
//     'japanese',
//     'french',
//     'spanish'
//     ];
// for (i=6; i>0; i--){
//     var lang = prompt('What languages has Aileen studied?');
//     console.log(lang);
//     if (lang === studied[i]){
//       var lang = prompt('Yes! And...');
//     }else{
//       var lang = prompt('not yet, try another')
//     }
// }



// outro
// What's my name!?
var myName = prompt('What\'s my name?');

while (myName.toLowerCase() !== 'aileen'){
  var myName = prompt('WRONG! Hint, it\'s like a girl with only 1 leg...');
}
if (myName.toLowerCase() === 'aileen'){
  alert('Yes! Best friends, forever!');
}