console.log("hello")
console.log(document.URL)
let headtitle= document.getElementById("header-title");

console.log(headtitle);
headtitle.innerHTML="<h2 style=color:black><b>HELLO</h2>";
let header = document.getElementById("main-header");
header.style.borderBottom="solid 8px black";

//changing list element font to bold and making 3rd lkst element green
//using dom-get by classname

let items=document.getElementsByClassName("list-group-item");
console.log(items);
items[2].style.backgroundColor='green';
for(let i=0; i<items.length;i++){
    console.log("yes in for")
    items[i].style.fontWeight="bold";
}