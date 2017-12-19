var true_mail = "hsu.alfred123@gmail.com";
var false_mail = "sel<>@gmail.com";

console.log( true_mail.match(/[a-zA-Z0-9._]+@[a-zA-Z0-9._]+/) );
console.log( true_mail.match(/[\w.]+@[\w.]+/) );

console.log( false_mail.match(/[\w.]+@[\w.]+/) );
