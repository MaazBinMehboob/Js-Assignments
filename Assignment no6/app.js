

// Q1 & 2:
var num = parseFloat(prompt("Enter a number:"));
document.write(`<h3>Number: ${num}</h3>`);
document.write(`<p>Rounded Value: ${Math.round(num)}</p>`);
document.write(`<p>Floor Value: ${Math.floor(num)}</p>`);
document.write(`<p>Ceil Value: ${Math.ceil(num)}</p>`);

// Q3 & 4:
var num = parseFloat(prompt("Enter a floating-point number:"));
document.write(`<h3>Number: ${num}</h3>`);
document.write(`<p>Rounded Value: ${Math.round(num)}</p>`);
document.write(`<p>Floor Value: ${Math.floor(num)}</p>`);
document.write(`<p>Ceil Value: ${Math.ceil(num)}</p>`);

// Q 5:
var num = parseFloat(prompt("Enter a number to find its absolute value:"));
document.write(`<h3>Absolute Value: ${Math.abs(num)}</h3>`);

// Q 6:
var dice = Math.floor(Math.random() * 6) + 1;
document.write(`<h3>Dice Roll: ${dice}</h3>`);

// Q 7: 
var toss = Math.random() < 0.5 ? "Heads" : "Tails";
document.write(`<h3>Coin Toss: ${toss}</h3>`);

// Q 8: 
var num = Math.floor(Math.random() * 100) + 1;
document.write(`<h3>Random Number (1-100): ${num}</h3>`);

// Q 9: 
var weight = prompt("Enter your weight:");
var parsedWeight = parseFloat(weight);
document.write(`<h3>Your Weight: ${parsedWeight} kg</h3>`);

// Q 10: 
var secret = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (1-10):"));
if (userGuess === secret) {
    alert("Congratulations! You guessed it right.");
} else {
    alert("Try again! The secret number was " + secret);
}

// Q 11: 
var now = new Date();
document.write(`<h3>Current Date and Time: ${now}</h3>`);

// Q12: 
var now = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert(`Current Month: ${months[now.getMonth()]}`);

// Q 13: 
var now = new Date();
alert(`Today's Day: ${now.toString().slice(0,3)}`);

// Q 14:
var now = new Date();
var day = now.getDay();
if (day === 0 || day === 6) {
    alert("It's Fun Day!");
}

// Q15:
var now = new Date();
var date = now.getDate();
alert(date < 16 ? "First fifteen days of the month" : "Last days of the month");

// Q 16:
var now = new Date();
var minutes = Math.floor(now.getTime() / 60000);
document.write(`<h3>Minutes since Jan 1, 1970: ${minutes}</h3>`);

// Q17:
var now = new Date();
alert(now.getHours() < 12 ? "It's AM" : "It's PM");

// Q 18:
var lastDay = new Date(2020, 11, 31);
document.write(`<h3>Last Day of 2020: ${lastDay}</h3>`);

// Qb19:
var ramadanStart = new Date("June 18, 2015");
var now = new Date();
var daysPassed = Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24));
document.write(`<h3>Days since 1st Ramadan 2015: ${daysPassed}</h3>`);

// Q20: 
var referenceDate = new Date("Jan 1, 2015");
var now = new Date();
var secondsPassed = Math.floor((now - referenceDate) / 1000);
document.write(`<h3>Seconds since Jan 1, 2015: ${secondsPassed}</h3>`);

// Q 21: 
var now = new Date();
now.setHours(now.getHours() + 1);
document.write(`<h3>Time One Hour Ahead: ${now}</h3>`);

// Q 22:
var now = new Date();
now.setFullYear(now.getFullYear() - 100);
alert(`Date 100 Years Back: ${now}`);

// Q 23:
var age = parseInt(prompt("Enter your age:"));
var birthYear = new Date().getFullYear() - age;
document.write(`<h3>Your Birth Year: ${birthYear}</h3>`);

// Q 24: 
var customerName = prompt("Enter Customer Name:");
var units = parseFloat(prompt("Enter Number of Units:"));
var chargesPerUnit = 18;
var lateSurcharge = 350;
var netAmount = (units * chargesPerUnit).toFixed(2);
var grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);

document.write(`<h3>K-Electric Bill</h3>`);
document.write(`<p>Customer Name: ${customerName}</p>`);
document.write(`<p>Units Consumed: ${units}</p>`);
document.write(`<p>Net Amount Payable: ${netAmount}</p>`);
document.write(`<p>Gross Amount (after Due Date): ${grossAmount}</p>`);
