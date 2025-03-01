
// Q1

// var studentname = [];

// Q2

// var studentname = new Array('username','education','this');
// console.log(studentname)

// Q3

// var studentname =[];
// studentname = ['saad','maaz','yousuf','anus']
// document.write(studentname)

// Q4

// var studentname =[];
// studentname = [2,3,4,56,7,]
// document.write(studentname)

// Q5

// studentname =[];
// studentname = [2,'saad','maaz',4,7,'yousuf','anus',7]
// document.write(studentname)

// Q6

// var studentname = [];
// studentname = [true,false]
// document.write(studentname)

// Q7

// var qualifications = [ 'HSC', 'BCS', 'BS', 'BCOM', 'MS',
// 'M.Phil', 'PhD']
// document.write(
//     `
//     <ol>
//         <li>${qualifications[0]}</li>
//         <li>${qualifications[1]}</li>
//         <li>${qualifications[2]}</li>
//         <li>${qualifications[3]}</li>
//         <li>${qualifications[4]}</li>
//         <li>${qualifications[5]}</li>
//         <li>${qualifications[6]}</li>
//     </ol>
//     `
// )

// Q9

// var movies = ['Avengers : Age of Ultron','Spectre','Jurassic World','Inside Out']
// document.write('Top Movies of 2015')
// document.write(
//         `
//         <ol>
//             <li>${movies[0]}</li>
//             <li>${movies[1]}</li>
//             <li>${movies[2]}</li>
//             <li>${movies[3]}</li>
//         </ol>
//         `)
// document.write(`lenght of the Array :  ${movies.length}`)

// Q10

// var movies = ['Audi','volvo','Ford','lamborghini']
// document.write('<h1>Favorite cars</h1>')
// document.write(
//         `
//         First index of the array :${movies.indexOf('Audi')}
//         <br>
//         car at first index of the array: ${movies[0]}
//         <br>
//         last index of the array :${movies.indexOf('lamborghini')}
//         <br>
//         car at first index of the array: ${movies[3]}
//         `)

// Q11

// var studentNames = ["Ali", "Ahmed", "Sara"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;

// document.write(
//     `score of micheal is ${studentScores[0]}. percentage :${(studentScores[0]/totalMarks)*100}%  <br>
//     score of Ahmed is ${studentScores[1]}. percentage :${(studentScores[1]/totalMarks)*100}%  <br>
//     score of sara is ${studentScores[2]}. percentage :${(studentScores[2]/totalMarks)*100}%  <br>
//     `
// )

// Q12


// var colors = ["Red", "Blue", "Green", "Yellow"];
// document.write("Original Array: " + colors + "<br>");

// var colorAtBeginning = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorAtBeginning);
// document.write("Updated Array (After adding color at the beginning): " + colors + "<br>");

// var colorAtEnd = prompt("Enter a color to add at the end:");
// colors.push(colorAtEnd);
// document.write("Updated Array (After adding color at the end): " + colors + "<br>");

// var color1 = prompt("Enter another color to add at the beginning:");
// var color2 = prompt("Enter another color to add at the beginning:");
// colors.unshift(color1, color2);
// document.write("Updated Array (After adding two more colors at the beginning): " + colors + "<br>");

// colors.shift();
// document.write("Updated Array (After deleting the first color): " + colors + "<br>");

// colors.pop();
// document.write("Updated Array (After deleting the last color): " + colors + "<br>");

// var indexToAdd = prompt("Enter the index at which you want to add a color:");
// var colorToAdd = prompt("Enter the color you want to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("Updated Array (After adding color at the specified index): " + colors + "<br>");

// var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
// var numberToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numberToDelete);
// document.write("Updated Array (After deleting color(s) from the specified index): " + colors + "<br>");

// // Q14.
// var fruits = ["strawberry", "apple", "orange", "banana"];
// fruits.sort();
// console.log("Sorted Fruits:", fruits); 

// // Q15.
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// var selectedCities = cities.slice(0, 3);
// console.log("Selected Cities:", selectedCities); 

// // Q16. 
// var arr = ["This ", " is ", " my ", " cat"];
// var sentence = arr.join('');
// console.log("Joined Sentence:", sentence);

// // Q17.
// var fifoQueue = [];
// fifoQueue.push("Apple");
// fifoQueue.push("Banana");
// fifoQueue.push("Cherry");

// console.log("FIFO:", fifoQueue.shift()); 
// console.log("FIFO:", fifoQueue.shift()); 
// console.log("FIFO:", fifoQueue.shift()); 

// // Q18.
// var lifoStack = [];
// lifoStack.push("Apple");
// lifoStack.push("Banana");
// lifoStack.push("Cherry");

// console.log("LIFO:", lifoStack.pop()); 
// console.log("LIFO:", lifoStack.pop()); 
// console.log("LIFO:", lifoStack.pop()); 

// // Q19.
// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var dropdown = "<select>";
// for (var i = 0; i < phones.length; i++) {
//     dropdown += "<option value='" + phones[i] + "'>" + phones[i] + "</option>";
// }
// dropdown += "</select>";
// document.write("Phone Dropdown:", dropdown);

// // Q20. 
// var multiArray = [];
// console.log("Empty Multidimensional Array:", multiArray);

// Q21.
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log("Matrix:", matrix);

































