// // Q1
// function power(a, b) {
//     return Math.pow(a, b);
// }
// console.log(power(2, 3));

// // Q2
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log(isLeapYear(2024));

// // Q3
// function calculateTriangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// console.log(calculateTriangleArea(3, 4, 5));

// // Q4
// function average(marks) {
//     return marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
// }
// function percentage(marks, total) {
//     return (average(marks) / total) * 100;
// }
// function mainFunction(marks) {
//     console.log("Average:", average(marks));
//     console.log("Percentage:", percentage(marks, 100) + "%");
// }
// mainFunction([85, 90, 78]);

// // Q5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) return i;
//     }
//     return -1;
// }
// console.log(customIndexOf("hello", "e"));

// // Q6
// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }
// console.log(removeVowels("This is a test sentence"));

// // Q7
// function countSuccessiveVowels(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         if (/[aeiouAEIOU]/.test(text[i]) && /[aeiouAEIOU]/.test(text[i + 1])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countSuccessiveVowels("Pleases read this application and give me gratuity"));

// // Q8
// function convertDistance(km) {
//     console.log("Meters:", km * 1000);
//     console.log("Feet:", km * 3280.84);
//     console.log("Inches:", km * 39370.1);
//     console.log("Centimeters:", km * 100000);
// }
// convertDistance(5);

// // Q9
// function calculateOvertimePay(hoursWorked) {
//     let overtimeHours = Math.max(0, hoursWorked - 40);
//     return overtimeHours * 12;
// }
// console.log(calculateOvertimePay(45));

// // Q10
// function countCurrency(amount) {
//     let hundreds = Math.floor(amount / 100);
//     amount %= 100;
//     let fifties = Math.floor(amount / 50);
//     amount %= 50;
//     let tens = Math.floor(amount / 10);
//     return { hundreds, fifties, tens };
// }
// console.log(countCurrency(370));
