'use strict';

// get the user's name
var hiFriend = prompt('Heyo~! Aileen, here. Tell me, stranger, what\'s your name?');
console.log(hiFriend);
alert('Welcome, ' + hiFriend + '! Let\'s see where you line up on the stalker/friendship scale...')

var answers = [];

// ***Q1***

function Q1 (){
var starwars = prompt('Does Aileen like Star Wars more than Star Trek?');
console.log(starwars);

// change to lowercase
var lilstarwars = starwars.toLowerCase();

// make that logic
if (lilstarwars === 'yes' || lilstarwars === 'y'){
  alert('May the force be with you!');
  answers.push('Q1');
}else{
  alert('Wrong. You don\'t know me, boo.');
}
}


// ***Q2***
function Q2 (){
var age = prompt('Was Aileen born in the 80s?');
console.log(age);

// ch-ch-ch-changes... to lowercase
var lilage = age.toLowerCase();

// if~then
if (lilage === 'yes' || lilage === 'y'){
  alert('God bless the 80s!');
  answers.push('Q2');
}else{
  alert('Wrong, child of the 80s, right here. RIP Challenger.');
}
}

// ***Q3***
function Q3 (){
var veggies = prompt('Is Aileen a vegetarian?');
console.log(veggies);

// taking it down a case
var lilveggies = veggies.toLowerCase();

// and the survey says?
if (lilveggies === 'yes' || lilveggies === 'y'){
  alert('This one time, in college... I tried. I really tried.');
}else{
  alert('Tried it twice, and I\'ll only go back kicking and screaming.');
  answers.push('Q3');
}
}

// ***Q4***
function Q4(){
var seahawks = prompt('Is Aileen a Seahawks fan?');
console.log(seahawks);

// let's be consistent. lowercases y'all
var lilseahawks = seahawks.toLowerCase();

// yes, or else!
if(lilseahawks === 'yes' || lilseahawks === 'y'){
  alert('MMmmm... well, not exactly.');
  answers.push('Q4');
}else{
  alert('Not a true Seahawks fan, but I\'m a fan by default. I\'m a Seattle fan. This is my hometown so I always root for the hometeam.');
  answers.push('Q4');
}
}

//  ***Q5***
function Q5(){
var korean = prompt('Aileen seems Asian. Is she... Korean?');
console.log(korean);

// get low...ercased.
var lilkorean = korean.toLowerCase();

// so, what is she?
if (lilkorean === 'yes' || lilkorean === 'y'){
  alert('Mostly~ but, wait! There\'s more...');
  answers.push('Q5');
}else{
  alert('You\'re not entirely wrong.')
  answers.push('Q5');
}
}
//  ***Q6***
function Q6(){
var married = prompt('How many years have I been married?');

// you get 4 guesses
var tries = 4
while (tries > 0){
if (married > 7){
  var married = prompt ('Not quite that long, try lower...');
}else if (married < 7){
  var married = prompt ('We beat those odds, try higher...');
}else if (married === '7'){
  alert('Bingo!');
  answers.push('Q6');
  {break;}
}else {
  var married = prompt('Use a number, please~');
}
tries--;
}
}

// ***Q7***
function Q7(){
// places i've lived
var places = [
  'north carolina',
  'maryland',
  'florida',
  'washington',
  'california',
  'texas',
];
var homes = prompt('I\'ve moved around in my life, can you guess some states I\'ve called home? (6 possible answers)');
// you get 6 tries
for (var tries = 6; tries > 1; tries--){
  if (places.indexOf(homes.toLowerCase()) >= 0){
    var homes = prompt('Yes! And...');
    answers.push('Q7');
  }else{
    var homes = prompt('Not yet, try another...')
  }
}
}
// outro
Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();


// What's my name!?
var myName = prompt('What\'s my name?');

if (myName.toLowerCase() === 'aileen'){
  alert('Yes! Best friends, forever!');
  answers.push ('bonusQ');
}else{
  alert('It\'s Aileen!');
}

// keeping score

if (answers.length > 10){
  alert(hiFriend + ', if we aren\'t besties, we need to have a chat. ' + answers.length + ' out of 12 points is stalker-country.');
}else if (answers.length < 6){
  alert('I hope you learned something today, ' + hiFriend + '. ' + answers.length + ' out of 12 points is only the beginning of our friendship. We need to hang out more.');
}else{
  alert('Well, '+ hiFriend + ', ' + answers.length + ' out of 12 points? Not too shabby, my friend!');
}

