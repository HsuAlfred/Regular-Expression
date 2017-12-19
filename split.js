/*
This will separate the string into array, like explode() in PHP.

return array:
[ 'H', 'llo' ]
*/
var h = "Hello";
console.log( h.split("") );//if using empty separator, the string will be separated between each character.
console.log( h.split("e") );
console.log( h.split("l") );//here have two separators
console.log( h.split(/^H/) );//Can use raguler also.
