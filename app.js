'use strict';

var userName = prompt('yup, javascript works. whats your name by the way?');
var score = 0;
var answer1 = prompt('Ok ' + userName + ', was I born before 1990?');
var answer2 = prompt('Do I have a twin?');
var answer3 = prompt('Do I like playing video games?');
var answer4 = prompt('Was I born in the PNW?');
var answer5 = prompt('Did I serve in the Air Force?');

if (answer1.toUpperCase() === 'N' || answer1.toUpperCase() === 'NO'){
  score++;
}
if (answer1.toUpperCase() === 'Y' || answer1.toUpperCase() === 'YES'){
  score++;
}
if (answer1.toUpperCase() === 'Y' || answer1.toUpperCase() === 'YES'){
  score++;
}
if (answer1.toUpperCase() === 'N' || answer1.toUpperCase() === 'YES'){
  score++;
}
if (answer1.toUpperCase() === 'Y' || answer1.toUpperCase() === 'YES'){
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
