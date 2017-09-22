'use strict';
var score = 0;
var numOfQues = 7;
var answer = 'no';
var userName = 'a girl has no name';
var guessesLeft = 0;
var countriesLived = ['france', 'germany', 'korea'];
var answerBool = false;

userName = prompt('Yup, javascript works. You are going to take a 7 question quiz about me. What\'s your name by the way?');
console.log('What\'s your name?: ' + userName);

function birthYearQues () {
  answer = prompt('Ok ' + userName + ', was I born on or after 1990? Y/N');
  console.log('was I born on or after 1990?: ' + answer);
  if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO'){
    score++;
    alert('Correct!, +1 to score! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was correct. Score: ' + score + '/' + numOfQues);
  } else {
    alert('Wrong... no points for you! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was wrong. Score: ' + score + '/' + numOfQues);
  }
}

function twinQues () {
  answer = prompt('Do I have a twin? Y/N');
  console.log('Do I have a twin?: ' + answer);
  if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES'){
    score++;
    alert('Correct!, +1 to score! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was correct. Score: ' + score + '/' + numOfQues);
  } else {
    alert('Wrong... no points for you! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was wrong. Score: ' + score + '/' + numOfQues);
  }
}

function hobbyQues () {
  answer = prompt('Do I like playing video games? Y/N');
  console.log('Do I like playing video games? ' + answer);
  if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES'){
    score++;
    alert('Correct!, +1 to score! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was correct. Score: ' + score + '/' + numOfQues);
  } else {
    alert('Wrong... no points for you! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was wrong. Score: ' + score + '/' + numOfQues);
  }
}

function birthLocQues () {
  answer = prompt('Was I born in the PNW? Y/N');
  console.log('Was I born in the PNW? ' + answer);
  if (answer.toUpperCase() === 'N' || answer.toUpperCase() === 'NO'){
    score++;
    alert('Correct!, +1 to score! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was correct. Score: ' + score + '/' + numOfQues);
  } else {
    alert('Wrong... no points for you! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was wrong. Score: ' + score + '/' + numOfQues);
  }
}

function militaryQues () {
  answer = prompt('Did I serve in the Air Force? Y/N');
  console.log('Did I serve in the Air Force? ' + answer);
  if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES'){
    score++;
    alert('Correct!, +1 to score! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was correct. Score: ' + score + '/' + numOfQues);
  } else {
    alert('Wrong... no points for you! Current score: ' + score + '/' + numOfQues);
    console.log('User answered ' + answer + ' and was wrong. Score: ' + score + '/' + numOfQues);
  }
}

function guessingGame () {
  guessesLeft = 4;
  console.log('Guess how many Pokemon I caught in the original Pokemon Red game for Gameboy.');
  do {
    answer = prompt('Guess how many Pokemon I caught in the original Pokemon Red game for Gameboy.');
    guessesLeft--;
    console.log('User guessed: ' + answer + ' with ' + guessesLeft + ' guesses left.');
    if (parseInt(answer) === 148){
      score++;
      alert('Correct! I could never catch Tauros and Chancey (or Mew). You got it right in ' + (4 - guessesLeft) + ' guess(es). Score: ' + score + '/' + numOfQues);
      console.log('User answered correctly!');
    } else if (parseInt(answer) > 148){
      alert('Wrong, you guessed too high... Guesses left: ' + guessesLeft);
      console.log('User guessed too high');
    } else {
      alert('Wrong, you guessed too low... Guesses left: ' + guessesLeft);
      console.log('User guessed too low');
    }
  } while (parseInt(answer) !== 148 && guessesLeft > 0);
  console.log('Score: ' + score + '/' + numOfQues);
}

function countryLivedGame () {
  guessesLeft = 6;
  console.log('Guess a Country I have lived in besides the USA.');
  do {
    answer = prompt('Guess a Country I have lived in besides the USA.');
    guessesLeft--;
    console.log('User guessed: ' + answer + ' with ' + guessesLeft + ' guesses left.');
    for (var i = 0; i < countriesLived.length; i++){
      if(answer.toLowerCase() === countriesLived[i]){
        answerBool = true;
        score++;
      }
    }
    if(!answerBool){
      alert('Nope, haven\'t been there, try again. Guesses Remaining: ' + guessesLeft);
      console.log('User answered incorrectly with: ' + answer);
    }else{
      alert('Correct! You got it right in ' + (6 - guessesLeft) + ' guess(es). Score: ' + score + '/' + numOfQues);
      console.log('User answered correctly with: ' + answer);
    }
  }while(!answerBool && guessesLeft > 0);
  console.log('Score: ' + score + '/' + numOfQues);
}

function quizResult () {
  if (score > 5){
    alert('You scored ' + score + '... WOW, how did you know all that... are you spying on me!?!?');
    console.log('You scored ' + score + '... WOW, how did you know all that... are you spying on me!?!?');
  }else if (score > 3){
    alert('You scored ' + score + '... You know some things about me... care to know more?');
    console.log('You scored ' + score + '... You know some things about me... care to know more?');
  }else if (score > 1){
    alert('You scored ' + score + '... You barely know anything about me... do you not care?');
    console.log('You scored ' + score + '... You barely know anything about me... do you not care?');
  }else{
    alert('You scored ' + score + '... Stranger danger!!!');
    console.log('You scored ' + score + '... Stranger danger!!!');
  }
}

birthYearQues ();
twinQues ();
hobbyQues ();
birthLocQues ();
militaryQues ();
guessingGame ();
countryLivedGame ();
quizResult ();
