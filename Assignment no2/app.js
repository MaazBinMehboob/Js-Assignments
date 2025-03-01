// Solutions to the questions provided by Maaz in JavaScript

// Question 1: Greet the user
// let name = prompt("Enter your name:");
// document.write(`Hello, ${name}! Nice to meet you.<br>`);

// Question 2: Display multiplication table
// let number = prompt("Enter a number for the multiplication table (default is 5):");
// number = number ? parseInt(number) : 5;
// document.write(`Multiplication table of ${number}:<br>`);
// for (let i = 1; i <= 10; i++) {
//     document.write(`${number} x ${i} = ${number * i}<br>`);
// }  

// Question 3: Welcome message based on city
// let city = prompt("Enter your city name:").toLowerCase();
// if (city === "karachi") {
//     document.write("Welcome to the city of lights<br>");
// }

// Question 4: Greeting based on gender
// let gender = prompt("Enter your gender (male/female):").toLowerCase();
// if (gender === "male") {
//     document.write("Good Morning Sir.<br>");
// } else if (gender === "female") {
//     document.write("Good Morning Ma’am.<br>");
// }
// 
// Question 5: Traffic signal messages
// let signalColor = prompt("Enter the traffic signal color (red/yellow/green):").toLowerCase();
// switch (signalColor) {
//     case "red":
//         document.write("Vehicles must stop.<br>");
//         break;
//     case "yellow":
//         document.write("Vehicles should get ready to move.<br>");
//         break;
//     case "green":
//         document.write("Vehicles can move now.<br>");
//         break;
//     default:
//         document.write("Invalid signal color.<br>");
//     }

// Question 6: Age validation
// let maxAge = parseInt(prompt("Enter the maximum age:"));
// let currentAge = parseInt(prompt("Enter your current age:"));
// if (currentAge <= maxAge) {
//     document.write("You are welcome.<br>");

// }

// Question 7: Fuel check
// let fuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car.<br>");
// }
// else{
//     document.write("you are ready to drive")
// } 

// Question 9: Compute grade
// let subject1 = parseInt(prompt("Enter marks for subject 1:"));
// let subject2 = parseInt(prompt("Enter marks for subject 2:"));
// let subject3 = parseInt(prompt("Enter marks for subject 3:"));
// let totalMarks = parseInt(prompt("Enter total marks:"));
// let obtainedMarks = subject1 + subject2 + subject3;
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade, remarks;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write(`Total Marks: ${totalMarks}<br>Marks Obtained: ${obtainedMarks}<br>Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}<br>Remarks: ${remarks}<br>`);

// Question 10: Shopping cart system
// let item1 = prompt("Enter name of item 1:");
// let item2 = prompt("Enter name of item 2:");
// let price1 = parseFloat(prompt(`Enter price of ${item1}:`));
// let price2 = parseFloat(prompt(`Enter price of ${item2}:`));
// let quantity1 = parseInt(prompt(`Enter quantity of ${item1}:`));
// let quantity2 = parseInt(prompt(`Enter quantity of ${item2}:`));
// let shippingCharges = parseFloat(prompt("Enter shipping charges:"));
// let subtotal = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;
// if (subtotal > 2000) {
//     let discount = subtotal * 0.1;
//     subtotal -= discount;
//     document.write(`You got a 10% discount of ${discount.toFixed(2)}.<br>`);
// }
// document.write(`Total cost: ${subtotal.toFixed(2)}<br>`);

// Question 11: Secret Number Guessing Game
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess = parseInt(prompt("Guess the secret number (1-10):"));
// if (guess === secretNumber) {
//     document.write("Bingo! Correct answer.<br>");
// } else if (guess + 1 === secretNumber) {
//     document.write("Close enough to the correct answer.<br>");
// } else {
//     document.write("Try again! The secret number was " + secretNumber + ".<br>");
// }

// // Question 12: Check Divisibility by 3
// let number = parseInt(prompt("Enter a number to check divisibility by 3:"));
// if (number % 3 === 0) {
//     document.write(`${number} is divisible by 3.<br>`);
// } else {
//     document.write(`${number} is not divisible by 3.<br>`);
// }

// Question 13: Game Winner
// let teamAName = prompt("Enter Team A name:");
// let teamBName = prompt("Enter Team B name:");
// let teamAScore = parseInt(prompt(`Enter score of ${teamAName}:`));
// let teamBScore = parseInt(prompt(`Enter score of ${teamBName}:`));
// if (teamAScore > teamBScore) {
//     document.write(`${teamAName} wins!<br>`);
// } else if (teamBScore > teamAScore) {
//     document.write(`${teamBName} wins!<br>`);
// } else {
//     document.write("It's a tie!<br>");
// }

// Question 14: Variable Type Checker
// let strVar = prompt("Enter a string:");
// let numVar = parseInt(prompt("Enter a number:"));
// let boolVar = confirm("Press OK for true or Cancel for false:");
// document.write(`Type of first variable: ${typeof strVar}<br>`);
// document.write(`Type of second variable: ${typeof numVar}<br>`);
// document.write(`Type of third variable: ${typeof boolVar}<br>`);

// // Question 15: Even or Odd Checker
// let inputNum = parseInt(prompt("Enter a number to check even or odd:"));
// if (inputNum % 2 === 0) {
//     document.write(`${inputNum} is an even number.<br>`);
// } else {
//     document.write(`${inputNum} is an odd number.<br>`);
// }

// // Question 16: Weather Message
// let temperature = parseInt(prompt("Enter the temperature in Karachi:"));
// if (temperature > 40) {
//     document.write("It is too hot outside.<br>");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.<br>");
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.<br>");
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.<br>");
// }

// // Question 17: Calculator
// let firstNum = parseFloat(prompt("Enter the first number:"));
// let secondNum = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");
// let result;
// if (operation === "+") {
//     result = firstNum + secondNum;
// } else if (operation === "-") {
//     result = firstNum - secondNum;
// } else if (operation === "*") {
//     result = firstNum * secondNum;
// } else if (operation === "/") {
//     result = firstNum / secondNum;
// } else if (operation === "%") {
//     result = firstNum % secondNum;
// } else {
//     document.write("Invalid operation.<br>");
// }
// document.write(`Result: ${result}<br>`);

// // Question 18: Day Checker
// let day = prompt("Enter the day of the week:").toLowerCase();
// if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)) {
//     document.write("It’s a week day.<br>");
// } else if (day === "saturday") {
//     document.write("It’s weekend.<br>");
// } else if (day === "sunday") {
//     document.write("Yay! It’s a holiday.<br>");
// } else {
//     document.write("Invalid day.<br>");
// }

// // Question 19: Pass or Fail
// let score = parseInt(prompt("Enter your score:"));
// if (score > 50) {
//     document.write("You are passed.<br>");
// } else {
//     document.write("Try again!<br>");
// }

// // Question 20: Compare Two Numbers
// let num1 = parseInt(prompt("Enter the first number:"));
// let num2 = parseInt(prompt("Enter the second number:"));
// if (num1 > num2) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num1}.<br>`);
// } else if (num2 > num1) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num2}.<br>`);
// } else {
//     document.write(`Both numbers are equal.<br>`);
// }

// // Question 21: Translator
// let langCode = prompt("Enter a language code (en, es, de):").toLowerCase();
// switch (langCode) {
//     case "en":
//         document.write("Hello, World!<br>");
//         break;
//     case "es":
//         document.write("¡Hola, Mundo!<br>");
//         break;
//     case "de":
//         document.write("Hallo, Welt!<br>");
//         break;
//     default:
//         document.write("Hello, World!<br>");
// }

// // Question 22: Positive or Negative Number
// let userInput = parseInt(prompt("Enter a number to check positive or negative:"));
// if (userInput > 0) {
//     document.write(`${userInput} is a positive number.<br>`);
// } else if (userInput < 0) {
//     document.write(`${userInput} is a negative number.<br>`);
// } else {
//     document.write("The number is zero.<br>");
// }

// // Question 23: Pluralizer
// let noun = prompt("Enter a noun:");
// let count = parseInt(prompt("Enter a number:"));
// if (count === 1) {
//     document.write(`${count} ${noun}<br>`);
// } else {
//     document.write(`${count} ${noun}s<br>`);
// }
