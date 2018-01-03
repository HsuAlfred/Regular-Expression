/*
can only have lower, upper, number and _

if null, that mean the string is correct!
*/

var normal = "aA123A3A123a";

console.log( normal.match(/[^a-zA-Z0-9_]+/) );
console.log( normal.length );
