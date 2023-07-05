console.log("hello")
console.log(document.URL)
let headtitle= document.getElementById("header-title");

console.log(headtitle);
headtitle.innerHTML="<h2 style=color:black><b>HELLO</h2>";
let header = document.getElementById("main-header");
header.style.borderBottom="solid 8px black";
header.textContent

//changing list element font to bold and making 3rd lkst element green
//using dom-get by classname

// let items=document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.backgroundColor='green';
// for(let i=0; i<items.length;i++){
//     console.log("yes in for")
//     items[i].style.fontWeight="bold";
// }
let li =document.getElementsByTagName("li");
console.log(li);
for (let i=0;i<li.length;i++){
    li[i].style.fontWeight="bold";
}

let li_=document.getElementsByClassName("list-group-item");
for (i=0;i<li_.length;i++){
    li_[i].style.backgroundColor="Green";
}
let input=document.querySelector("input");//query selector by defaults takes the first value
input.value="hello world";
let btn = document.querySelector('input[type="submit"]');
btn.value="Send";
