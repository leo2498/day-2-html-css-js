'use strict';

  var allergies = prompt('Do I have any allergies? Please answer with Y or N').toLowerCase();
  console.log('Do I have any allergies? ', allergies);

  if (allergies === 'y' || allergies === 'yes') {
    alert('Correct! I\'m allergic to dust.');
  } else if (allergies === 'n'|| allergies ==='no') {
    alert('Wrong I do have one allergy.');
  } else { 
    alert('Please answer with Y or N');
  }

  var brokenBone = prompt('Have I ever broken any bones? Please answer with Y or N.').toLowerCase();
  console.log('Have I broken a bone?', brokenBone);

  if (brokenBone === 'y' || brokenBone === 'yes') {
    alert('You are correct! I\'ve broken multiple bones.');
  } else if (brokenBone === 'n' || brokenBone === 'no') {
    alert('Sadly this you are wrong, I\'ve broken multiple.');
  } else {
    alert('Please answer with Y or N');
  }

  var sisters = prompt('Do I have any sisters? Please answer with Y or N.').toLowerCase();
  console.log('Do I have sisters?', sisters);

  if (sisters === 'y' || sisters === 'yes') {
    alert('You are correct! I have 1 older sister.');
  } else if (sisters === 'n' || sisters === 'no') {
    alert('Incorrect.');
  } else {
    alert('Please answer with Y or N');
  }

  var brothers = prompt('Do I have any brothers? Please answer with Y or N.').toLowerCase();
  console.log('Do I have any brothers?', brothers);

  if (brothers === 'y' || brothers === 'yes') {
    alert('Correct! I have 2 older brothers');
  } else if (brothers === 'n' || brothers === 'no') {
    alert('Wrong, I\'m the youngest of my 2 brothers.');
  } else {
    alert('Please answer with Y or N');
  }

  var dog = prompt('Do I own a dog? Please answer with Y or N.').toLowerCase();
  console.log('Do I have a dog?', brokenBone);

  if (dog === 'y' || dog === 'yes') {
    alert('You are correct! I\'ve recently adopted a pet doggo');
  } else if (dog === 'n' || dog === 'no') {
    alert('Woops you\'re incorrect.');
  } else {
    alert('Please answer with Y or N');
  }