// 'use strict';

// var answersCorrect = 0;
// console.log(answersCorrect);

// //Question 1
//   var allergies = prompt('Do I have any allergies? Please answer with Y or N').toLowerCase();
//   console.log('Do I have any allergies? ', allergies);

//   if (allergies === 'y' || allergies === 'yes') {
//     alert('Correct! I\'m allergic to dust.');
//     answersCorrect++;
//   } else if (allergies === 'n'|| allergies ==='no') {
//     alert('Wrong I do have one allergy.');
//   } else { 
//     alert('Please answer with Y or N');
//   }

//   //Question 2
//   var brokenBone = prompt('Have I ever broken any bones? Please answer with Y or N.').toLowerCase();
//   console.log('Have I broken a bone?', brokenBone);

//   if (brokenBone === 'y' || brokenBone === 'yes') {
//     alert('You are correct! I\'ve broken multiple bones.');
//     answersCorrect++;
//   } else if (brokenBone === 'n' || brokenBone === 'no') {
//     alert('Sadly this you are wrong, I\'ve broken multiple.');
//   } else {
//     alert('Please answer with Y or N');
//   }

//   //Question 3
//   var sisters = prompt('Do I have any sisters? Please answer with Y or N.').toLowerCase();
//   console.log('Do I have sisters?', sisters);

//   if (sisters === 'y' || sisters === 'yes') {
//     alert('You are correct! I have 1 older sister.');
//     answersCorrect++;
//   } else if (sisters === 'n' || sisters === 'no') {
//     alert('Incorrect.');
//   } else {
//     alert('Please answer with Y or N');
//   }

//   //Question 4
//   var brothers = prompt('Do I have any brothers? Please answer with Y or N.').toLowerCase();
//   console.log('Do I have any brothers?', brothers);

//   if (brothers === 'y' || brothers === 'yes') {
//     alert('Correct! I have 2 older brothers');
//     answersCorrect++;
//   } else if (brothers === 'n' || brothers === 'no') {
//     alert('Wrong, I\'m the youngest of my 2 brothers.');
//   } else {
//     alert('Please answer with Y or N');
//   }


// //Question 5  
//   var dog = prompt('Do I own a dog? Please answer with Y or N.').toLowerCase();
//   console.log('Do I have a dog?', dog);

//   if (dog === 'y' || dog === 'yes') {
//     alert('You are correct! I\'ve recently adopted a pet doggo');
//     answersCorrect++;
//   } else if (dog === 'n' || dog === 'no') {
//     alert('Woops you\'re incorrect.');
//   } else {
//     alert('Please answer with Y or N');
//   }


  var guessesRemaining = 4
  var howManyCars = 5

  while (guessesRemaining > 0) {
    var howMany = prompt('Can you guess how many cars i\'ve owned so far?');
    howManyCars = parseInt(howManyCars);
    console.log('How many cars have i owned? ', howMany);
    guessesRemaining--;

    if (howManyCars === howMany) {
      alert('You are right!');
      console.log('Guessed correctly.');
      answersCorrect++;
      break;
    } else if (howManyCars < howMany) {
      alert('Give it another try, higher this time.');
      console.log('Incorrect, try a higher number', howMany);
      guessesRemaining--;
    } else if (howManyCars > howMany) {
      alert('Wrong please try again with a lower number.');
      console.log('Incorrect, try a lower number.', howMany);
      guessesRemaining--;
    }
  }
  if (guessesRemaining === 0) {
    alert('You\'re out of guesses!')
    console.log('You\'re out of guesses');
  }



  

