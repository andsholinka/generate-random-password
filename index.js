const generator = require('generate-password');

var randomPass = generator.generate({
    length: 5,
    numbers: true
});

var randomChars = '0123456789';
var result = '';
for (var i = 0; i < 5; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
}

var randomstring = Math.random().toString(36).slice(-5);

console.log(randomPass);
console.log(result);
console.log(randomstring);