var getinp = document.getElementById('inp')


function addlist(){
    if(getinp.value==""){
        alert("Please Enter any value")
    }
    else(
   document.getElementById('ullist').innerHTML +=`<li>${getinp.value} <button class="edit" onclick="edit(this)">Edit</button> <button  class="edit" onclick="clearaaa(this)">Delete</button> </li> `
    )

getinp.value =""

}
function delet(){
    document.getElementById('ullist').textContent=""
}

function edit(e){
var getedit= e.parentNode.firstChild.textContent
var pro = prompt("Enter Edited value",getedit)
e.parentNode.firstChild.textContent=pro
}

function clearaaa(a){
   a.parentNode.remove() 
}