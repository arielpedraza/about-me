'use strict';
var score = 0;

var userName = prompt('Yup, javascript works. You are going to take a 5 questions yes or now quiz about me. What\'s your name by the way?');
console.log('What\'s your name?: ' + userName);

var answer1 = prompt('Ok ' + userName + ', was I born on or after 1990?');
console.log('was I born on or after 1990?: ' + answer1);
if (answer1.toUpperCase() === 'N' || answer1.toUpperCase() === 'NO'){
  score++;
  alert('Correct!, +1 to score! Current score: ' + score + '/5');
  console.log('User answered ' + answer1 + ' and was correct. Score: ' + score + '/5');
}else{
  alert('Wrong... no points for you! Current score: ' + score + '/5');
  console.log('User answered ' + answer1 + ' and was wrong. Score: ' + score + '/5');
}

var answer2 = prompt('Do I have a twin?');
console.log('Do I have a twin?: ' + answer2);
if (answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES'){
  score++;
  alert('Correct!, +1 to score! Current score: ' + score + '/5');
  console.log('User answered ' + answer2 + ' and was correct. Score: ' + score + '/5');
}else{
  alert('Wrong... no points for you! Current score: ' + score + '/5');
  console.log('User answered ' + answer2 + ' and was wrong. Score: ' + score + '/5');
}

var answer3 = prompt('Do I like playing video games?');
console.log('Do I like playing video games? ' + answer3);
if (answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES'){
  score++;
  alert('Correct!, +1 to score! Current score: ' + score + '/5');
  console.log('User answered ' + answer3 + ' and was correct. Score: ' + score + '/5');
}else{
  alert('Wrong... no points for you! Current score: ' + score + '/5');
  console.log('User answered ' + answer3 + ' and was wrong. Score: ' + score + '/5');
}

var answer4 = prompt('Was I born in the PNW?');
console.log('Was I born in the PNW? ' + answer4);
if (answer4.toUpperCase() === 'N' || answer4.toUpperCase() === 'NO'){
  score++;
  alert('Correct!, +1 to score! Current score: ' + score + '/5');
  console.log('User answered ' + answer4 + ' and was correct. Score: ' + score + '/5');
}else{
  alert('Wrong... no points for you! Current score: ' + score + '/5');
  console.log('User answered ' + answer4 + ' and was wrong. Score: ' + score + '/5');
}

var answer5 = prompt('Did I serve in the Air Force?');
console.log('Did I serve in the Air Force? ' + answer5);
if (answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES'){
  score++;
  alert('Correct!, +1 to score! Current score: ' + score + '/5');
  console.log('User answered ' + answer5 + ' and was correct. Score: ' + score + '/5');
}else{
  alert('Wrong... no points for you! Current score: ' + score + '/5');
  console.log('User answered ' + answer5 + ' and was wrong. Score: ' + score + '/5');
}

if (score === 5){
  alert('You scored ' + score + '... WOW, how did you know all that... are you spying on me!?!?');
  console.log('You scored ' + score + '... WOW, how did you know all that... are you spying on me!?!?');
}else if (score >= 3){
  alert('You scored ' + score + '... You know some things about me... care to know more?');
  console.log('You scored ' + score + '... You know some things about me... care to know more?');
}else if (score > 0){
  alert('You scored ' + score + '... You barely know anything about me... do you not care?');
  console.log('You scored ' + score + '... You barely know anything about me... do you not care?');
}else{
  alert('You scored ' + score + '... Stranger danger!!!');
  console.log('You scored ' + score + '... Stranger danger!!!');
}
