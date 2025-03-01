// Question 1: 
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "!<br>");

// Question 2: 
var mobileModel = prompt("Enter your favorite mobile phone model:");
document.write("Length of the model name: " + mobileModel.length + "<br>");

// Question 3:
var num = parseInt(prompt("Enter a positive integer:"));
document.write("Number: " + num + "<br>");
document.write("Rounded Value: " + Math.round(num) + "<br>");
document.write("Floor Value: " + Math.floor(num) + "<br>");
document.write("Ceiling Value: " + Math.ceil(num) + "<br>");

// Question 4: 
var negNum = parseFloat(prompt("Enter a negative floating-point number:"));
document.write("Number: " + negNum + "<br>");
document.write("Absolute Value: " + Math.abs(negNum) + "<br>");
document.write("Floor Value: " + Math.floor(negNum) + "<br>");
document.write("Ceiling Value: " + Math.ceil(negNum) + "<br>");

// Question 5: 
var posFloat = parseFloat(prompt("Enter a positive floating-point number:"));
document.write("Number: " + posFloat + "<br>");
document.write("Rounded Value: " + Math.round(posFloat) + "<br>");
document.write("Floor Value: " + Math.floor(posFloat) + "<br>");
document.write("Ceiling Value: " + Math.ceil(posFloat) + "<br>");

// Question 6: 
var word1 = "Pakistani";
document.write("Index of 'n': " + word1.indexOf('n') + "<br>");

// Question 7:
var word2 = "Hello World";
document.write("Last index of 'l': " + word2.lastIndexOf('l') + "<br>");

// Question 8: 
document.write("Character at index 3: " + word1.charAt(3) + "<br>");

// Question 9: 
var fullNameConcat = firstName.concat(" ", lastName);
document.write("Hello, " + fullNameConcat + "!<br>");

// Question 10:
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("Updated City Name: " + newCity + "<br>");

// Question 11: 
var sentence = "Ali and Sami are best friends. They play cricket and football together.";
var updatedSentence = sentence.replace(/and/g, "&");
document.write("Updated Sentence: " + updatedSentence + "<br>");

// Question 12: 
var strNum = "472";
var numConverted = Number(strNum);
document.write("Converted Number: " + numConverted + " Type: " + typeof numConverted + "<br>");

// Question 13: 
var url = prompt("Enter a URL (e.g., www.facebook.com):");
var domain = url.split(".")[1];
document.write("Domain Name: " + domain + "<br>");

// Question 14: 
var userInput = prompt("Enter any text:");
document.write("Uppercase Text: " + userInput.toUpperCase() + "<br>");

// Question 15
var a = "3";
var b = "3";
var x = a + b;
document.write("Value of x: " + x + "<br>");
// Q16


var y = a - b;
document.write("Value of y: " + y + "<br>");

// Q17
var username = prompt("Enter your username:");
if (/[.@,!]/.test(username)) {
    document.write("Invalid username. Please avoid special characters (@, ., , !)<br>");
}

// Q18

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter an item to search:").toLowerCase();
document.write(A.includes(searchItem) ? searchItem + " is available.<br>" : searchItem + " is not available.<br>");


// Q19
var str1 = prompt("Enter first string:");
var str2 = prompt("Enter second string:");
document.write(str1.localeCompare(str2) === 0 ? "Both strings are equal.<br>" : str1 > str2 ? "First string is greater.<br>" : "Second string is greater.<br>");


// Q20
var password = prompt("Enter your password:");
if (/^[0-9]/.test(password) || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || password.length < 6) {
    document.write("Invalid password. Must contain letters & numbers, not start with a number, and be at least 6 characters.<br>");
}

// Q21

var university = "University of Karachi";
university.split("").forEach(char => document.write(char + "<br>"));

// Q22
var userStr = prompt("Enter a string:");
document.write("Last character: " + userStr[userStr.length - 1] + "<br>");


// Q23

var text = "The quick brown fox jumps over the lazy dog.";
var count = (text.match(/\bthe\b/gi) || []).length;
document.write("Occurrences of 'the': " + count + "<br>");

// Q24


var checkStr = prompt("Enter a word:").toLowerCase();
document.write(checkStr === checkStr.split('').reverse().join('') ? "It's a palindrome.<br>" : "Not a palindrome.<br>");
