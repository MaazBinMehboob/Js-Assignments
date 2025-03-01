
var length = prompt('Enter a lenght of password');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
var all = uppercase + lowercase + numbers + symbols;

var password = "";
password += uppercase[Math.floor(Math.random() * uppercase.length)];
password += lowercase[Math.floor(Math.random() * lowercase.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += symbols[Math.floor(Math.random() * symbols.length)];


for (let i = 4; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
}

document.write(`<h1>Your desired password is : ${password}</h1>`)

