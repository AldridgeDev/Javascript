// User clicked on the add button
// if there is any text inside of the item field, add that text to the list
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    console.log('There is a value');

  }
});
