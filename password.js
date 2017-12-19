/*
Source from https://blog.miniasp.com/post/2008/05/09/Using-Regular-Expression-to-validate-password.aspx
unless one Upper, lower character and number,
characters  between 8 ~ 16
*/

var pw = "aA123AAA123a";

console.log( pw.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/) );
