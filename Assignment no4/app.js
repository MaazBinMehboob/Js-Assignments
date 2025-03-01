
// Q1

// for(var i=1; i<=5 ; i++){
//     document.write('Hellow world'+'<br>')
// }

// Q2

// for(var i=1; i<=10 ; i++){
//     document.write(i + '<br>')
// }

// Q3


// var userinput =prompt('Enter table number')
// var lenght =prompt('Enter lenght of table ')
// for (var i=1 ; i<=lenght ; i++){
//     document.write(
//         `${userinput} X ${i} = ${i*userinput} <br>`
//     )
// }

// Q4

// var A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']
// for (var i = 0; i<A.length; i++ ){
//     document.write(A[i] + '<br>')
// }


// Q5

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var i = 0; i <fruits.length ; i++ ){
//      document.write(fruits[i] + '<br>')
// }
// for (var i = 0; i<fruits.length ; i++ ){
//      document.write(`Element at index ${i} is ${fruits[i]}` + '<br>')
// }

// Q6


// var number = +prompt('Enter lenght of array')
// var array = []

// for (var i = 0 ; i < number ; i++){
//      var items = prompt(`Enter item at index ${i}` )
//      array.push(items)
// }

// for( var i = 0 ; i < number ; i++){
//      document.write(array[i] + '<br>')
// }


// Q7


// document.write('<h1>counting</h1>')
// for (var i = 1 ; i <=15 ; i++){
//     document.write(i + ',')
// }
// document.write('<h1>Reversse counting</h1>')
// for (var i = 10 ; i >=0  ; i--){
//     document.write(i + ',')
// }
// document.write('<h1>Odd number</h1>')
// for (var i = 1 ; i <=15 ; i=i +2){
//     document.write(i + ',')
// }
// document.write('<h1>Even number</h1>')
// for (var i = 2 ; i <=15 ; i=i+2){
//     document.write(i + ',')
// }


// Q8


// var bakerry = ['cake', 'apple' ,' pie',' cookie', 'chips',' patties']

// var search = prompt('welcome to my bakkery what do you want to order :')

// for (var i = 0 ; i < bakerry.length ; i++){
//     if (search == bakerry[i]){
//         document.write(`${bakerry[i] } is avaliable at index ${i}`)
//     }
    
//     else{
//         document.write(`${search} is not avaliable in our bakkery`)
//     }
//     break;
// }

// Q9

// var A = [24, 53, 78, 91, 12];

// var largest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write(`The largest number in the array is ${largest}.`);


// Q10

// var A = [24, 53, 78, 91, 12]
// var smallest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write(`The smallest number in the array is ${smallest}.`);


// Q11

// var A = [24, 53, 78, 91, 12];

// var largest = A[0];
// var smallest = A[0];
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
//     else if  (A[i] < smallest){
//         smallest=A[i]
//     }
// }
// document.write(`The largest number in the array is ${largest}.`);
// document.write(`The smallest number in the array is ${smallest}.`);


// Q12

// for ( i = 5 ; i <= 100 ; i = i + 5 ){
//     document.write(i + ',')
// }


// Q13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// for (i = 0 ; i < students.length ; i++){
//     document.write(` 
//     <table border='' width='200px'>
//     <tr>
//     <td>${students[i]}</td>
//     <td>${scores[i]}</td>
//     </tr>
//     </table>
//     `)
// }

// Q14

// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value: "));

// var result = "";
// for (var i = 0; i < scores.length; i++) {
//     result += scores[i] + ", ";
//     if (scores[i] === stopValue) break;
// }
// document.write(result + "<br>"); 


// Q15


// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (var i = 0; i < A.length; i++) {
//         document.write(A[i] + "<br>");
// }

// Q16

// var num = parseFloat(prompt("Enter a number: "));

// while (num > 0) {
//     document.write(num + "<br>");
//     num -= 0.5; 
// }

// Q17

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + " is even<br>");
//     } 
//     else {
//         document.write(i + " is odd<br>");
//     }
// }


// Q18

// var product = 1;

// for (var i = 1; i <= 7; i += 2) {
//     product *= i;
// }

// document.write("The product of odd numbers from 1 to 7 is: " + product);

// Q19

// for(var i = 7 ; i >= 1 ; i--){
//     for(var j = i ; j >= 1 ; j-- ){
//     document.write('*')
//     }
//     document.write('<br>')
// }
    
// Q20
// a)


// for(var i = 1; i <= 4 ; i++ ){
//     for(j = 1 ; j <= 5 ; j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }


// b)

// for(var i = 1 ; i <= 5 ;i++){
//     for(var j = 1 ; j <= i ; j++ ){
//         document.write('*')
//     }
//     document.write('<br>')
// }

// c)

// for(var i = 1 ; i <= 5 ;i++){
//     for(var j = i ; j <= 5 ; j++ ){
//         document.write('*')
//     }
//     document.write('<br>')
// }