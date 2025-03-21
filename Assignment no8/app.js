// Q1

// var current = new Date()
// document.write(current)

// Q2

// function nam(){
//     a=prompt("write your first name ")
//     b=prompt("write your last name ")
//    document.write(`how are you ${a} ${b}`)
// }
// nam()

// Q3

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// Q4

// function calculator(num1, num2, operator) {
   
//     num1=+prompt("Enter first number")
//     num2=+prompt("Enter second number")
//     operator=prompt("enter an operator")

//     switch (operator) {
//         case '+': return num1 + num2;
//         case '-': return num1 - num2;
//         case '*': return num1 * num2;
//         case '/': return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//         default: return 'Invalid operator';
//     }

// }
// document.write(calculator())
// Q5
// function square(num) {
//     return num * num;
// }
// console.log(square(4));

// // Q6
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

// // Q7
// function displayCounting(start, end) {
//     let result = '';
//     for (let i = start; i <= end; i++) {
//         result += i + ' ';
//     }
//     return result.trim();
// }
// console.log(displayCounting(1, 10));

// // Q8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
// }
// console.log(calculateHypotenuse(3, 4));

// // Q9
// function rectangleArea(width, height) {
//     return width * height;
// }
// console.log(rectangleArea(5, 10));

// // Q10
// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome('madam'));

// // Q11
// function capitalizeWords(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
// }
// console.log(capitalizeWords('the quick brown fox'));

// // Q12
// function findLongestWord(str) {
//     let words = str.split(' ');
//     return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
// }
// console.log(findLongestWord('Web Development Tutorial'));

// // Q13
// function countLetterOccurrences(str, letter) {
//     return str.split(letter).length - 1;
// }
// console.log(countLetterOccurrences('JSResourceS.com', 'o'));

// // Q14
// function calcCircumference(radius) {
//     return `The circumference is ${2 * Math.PI * radius}`;
// }
// console.log(calcCircumference(7));

// // Q14
// function calcArea(radius) {
//     return `The area is ${Math.PI * radius * radius}`;
// }
// console.log(calcArea(7));
