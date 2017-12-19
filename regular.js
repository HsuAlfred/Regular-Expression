/*
/i perform case-insensitive matching
/g will not stop after the first match
/m Perform multiline matching

xxx find the characters
[xxx] find any characters in the []
[a-z]  find a ~ z characters
[^a-z] non characters a~z
\d like [0-9]
\D like [^0-9]
\w find a word characters: a~z, 0~9 and _
\W find non-word characters
\s find whitespace characters
\S find non-whitespace characters
. any

n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's

^ at begin
$ at end
n+ match at least once
n* macth zero or more
n? match zero or once
*/
var h = "Hello123lll_哈囉";

console.log( h.match(/el/) );
console.log( h.match(/[^a-z]/g) );
console.log( h.match(/[a-z]+/) );
console.log( h.match(/[^\w]/) );
console.log( h.match(/[^0-9]/) );
console.log( h.match(/[a-z]/i) );
console.log( h.match(/[a-z]/gi) );
console.log( h.match(/[a-z]/m) );
console.log( h.match(/\w/m) );
console.log( h.match(/\W/m) );

console.log( h.match(/\d+/) );

console.log( h.match(/[l]{4,4}/g) );
