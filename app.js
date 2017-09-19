'use strict';
var score = 0;

var userName = prompt('Yup, javascript works. What\'s your name by the way?');
console.log('What\'s your name?: ' + userName);

var answer1 = prompt('Ok ' + userName + ', was I born on or after 1990?');
console.log('was I born on or after 1990?: ' + answer1);
if (answer1.toUpperCase() === 'N' || answer1.toUpperCase() === 'NO'){
  score++;
}

var answer2 = prompt('Do I have a twin?');
console.log('Do I have a twin?: ');
if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES'){
  score++;
}

var answer3 = prompt('Do I like playing video games?');
console.log('Do I like playing video games? ');
if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES'){
  score++;
}

var answer4 = prompt('Was I born in the PNW?');
console.log('Was I born in the PNW? ');
if (answer4.toUpperCase() === 'N' || answer4.toUpperCase() === 'NO'){
  score++;
}

var answer5 = prompt('Did I serve in the Air Force?');
console.log('Did I serve in the Air Force? ');
if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES'){
  score++;
}

if (score === 5){
  alert('WOW, how did you know all that... are you spying on me!?!?');
}else if (score >= 3){
  alert('You know some things about me... care to know more?');
}else if (score > 0){
  alert('You barely know anything about me... do you not care?');
}else{
  alert('Stranger danger!!!');
}
