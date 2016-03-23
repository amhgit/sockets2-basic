var moment = require('moment');
var now = moment();
console.log(now.format('X'));
console.log(now.format('x')); // milliseconds

//comparison
console.log(now.valueOf()); // milliseconds

//now.subtract(1,'year');
//console.log(now.format());

//console.log(now.format('MMM Do, YYYY hh:mm:ssa')); //6:45 pm

var timestamp = 1458693773927;
var timestampmoment = moment.utc(timestamp);
console.log(timestampmoment.format());
console.log((moment.utc(now.valueOf()).format()));
//11:06 am
console.log(timestampmoment.local().format('h:mm a'))

//
console.log(moment().format('x'));