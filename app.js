'use strict';

  var doI = prompt('Do I have any allergies? Please answer with Y or N').toLowerCase();
  console.log('Do I have any allergies ', doI);

  if (doI === 'y' || doI === 'yes') {
    alert('Correct! I\'m allergic to dust.');
  } else if (doI === 'n'|| doI ==='no') {
    alert('Wrong I do have one allergy.');
  } else { 
    alert('Please answer with Y or N')
  }
