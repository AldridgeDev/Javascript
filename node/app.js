var events = require('events');
var util = require('util');

var person = function(name){
  this.name = name;
};

util.inherits(person, events.EventEmitter);

var antonio = new person('antonio');
var claire = new person('claire');
var james = new person('james');
var peopleArr = [antonio, claire, james];

peopleArr.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + ' said: ' + message);
  });
});

james.emit('speak', 'hello!');
claire.emit('speak', 'hi!');
