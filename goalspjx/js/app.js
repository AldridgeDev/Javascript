/*
Test Version - Alpha
A very rough version of the goals and planner project
************************
Capabilities
-----------------------
Can set indicators
Can give the indicators values
Can compare the indicator values to outcomes
************************
Todo
-----------------------
Create a UI
Connect to a database / Firebase
Better solution for Javascript:
 -- can add as many indicators as needed / look at todolist app for possible solution
************************
Bugs
-----------------------
Page needs to refresh before values are set []
************************
*/
var firstValue, secondValue, thirdValue;

var first = document.getElementById('indicator-1-name').value;
var second = document.getElementById('indicator-2-name').value;
var third = document.getElementById('indicator-3-name').value;
var ableTo = false;

// Transfer indicator names to the Your Indicators section
document.querySelector('#set-indicators').addEventListener('click', function() {
  document.getElementById('indicator-1').innerHTML = first + ' ';
  document.getElementById('indicator-2').innerHTML = second + ' ';
  document.getElementById('indicator-3').innerHTML = third + ' ';

  document.getElementById('outcome-1').innerHTML = first + ' ';
  document.getElementById('outcome-2').innerHTML = second + ' ';
  document.getElementById('outcome-3').innerHTML = third + ' ';

});

// setting values and comparing outcomes
document.querySelector('#submit').addEventListener('click', setValues);
document.querySelector('#submit').addEventListener('click', function(){
  ableTo = true;
});


function setValues() {
  firstValue = parseFloat(document.getElementById('indicator-1-value').value);
  secondValue = parseFloat(document.getElementById('indicator-2-value').value);
  thirdValue = parseFloat(document.getElementById('indicator-3-value').value);
}


  document.querySelector('#output').addEventListener('click', function() {
    if (ableTo == true){
      var firstOutcome = parseFloat(document.getElementById('indicator-1-outcome').value);
      var secondOutcome = parseFloat(document.getElementById('indicator-2-outcome').value);
      var thirdOutcome = parseFloat(document.getElementById('indicator-3-outcome').value);

      // first goal
      if (firstValue === firstOutcome) {
        document.getElementById('output-1').innerHTML = 'You met your goal!';
      } else if (firstValue < firstOutcome) {
        document.getElementById('output-1').innerHTML = 'You exceeded your goal!';
      } else if (firstValue > firstOutcome) {
        document.getElementById('output-1').innerHTML = 'You did not meet your goal';
      }

      // second goal
      if (secondValue === secondOutcome) {
        document.getElementById('output-2').innerHTML = 'You met your goal!';
      } else if (secondValue < secondOutcome) {
        document.getElementById('output-2').innerHTML = 'You exceeded your goal!';
      } else if (secondValue > secondOutcome) {
        document.getElementById('output-2').innerHTML = 'You did not meet your goal';
      }

      // third goal
      if (thirdValue === thirdOutcome) {
        document.getElementById('output-3').innerHTML = 'You met your goal!';
      } else if (thirdValue < thirdOutcome) {
        document.getElementById('output-3').innerHTML = 'You exceeded your goal!';
      } else if (thirdValue > thirdOutcome) {
        document.getElementById('output-3').innerHTML = 'You did not meet your goal';
      }

} else {
  console.log('You need to click submit');
}
});
