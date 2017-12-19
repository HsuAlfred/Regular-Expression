/*
This will detect the first location of letter and return the object.
If not macth, it will return null.
we can use regular expression here.

return:
[ 'l', index: 2, input: 'Hello' ]

H e l l o
0 1 2 3 4
*/
var h = "Hello";
console.log( h.match("l") );
console.log( h.match("ll") );
console.log( h.match("le") );
console.log( h.match(/^e/) );//regular expression, find the first letter if it's "H"
