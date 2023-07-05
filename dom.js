// console.log("hello")
// console.log(document.URL)
// let headtitle= document.getElementById("header-title");

// console.log(headtitle);
// headtitle.innerHTML="<h2 style=color:black><b>HELLO</h2>";
// let header = document.getElementById("main-header");
// header.style.borderBottom="solid 8px black";
// header.textContent

//changing list element font to bold and making 3rd lkst element green
//using dom-get by classname

// let items=document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.backgroundColor='green';
// for(let i=0; i<items.length;i++){
//     console.log("yes in for")
//     items[i].style.fontWeight="bold";
// }
// let li =document.getElementsByTagName("li");
// console.log(li);
// for (let i=0;i<li.length;i++){
//     li[i].style.fontWeight="bold";
// }

// let li_=document.getElementsByClassName("list-group-item");
// for (i=0;i<li_.length;i++){
//     li_[i].style.backgroundColor="Green";
// }
// let input=document.querySelector("input");//query selector by defaults takes the first value
// input.value="hello world";
// let btn = document.querySelector('input[type="submit"]');
// btn.value="Send";

//lets work on queryselctor-note-it takes first of the element mentioned and use . for class and #id

// let header=document.querySelector("header");
// console.log(header);
// let head=document.querySelector("#main-header");
// head.style.borderBottom="solid 8px black";
// let item=document.querySelectorAll(".list-group-item");

//query selector All

// let title=document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent="Hello";
// // selecting odd and even list elements

// let odd=document.querySelectorAll('li:nth-child(odd)');
// for (let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="grey";
// }
// let even=document.querySelectorAll('li:nth-child(even)');
// for (let j=0;j<even.length;j++){
//     even[j].style.backgroundColor="pink";
// }

let item=document.querySelector('li:nth-child(2)');
item.style.backgroundColor="green";
let item3=document.querySelector('li:nth-child(3)');
item3.style.color="white";
let item2=document.querySelectorAll("li");
item2[1].style.color="green";
let odd =document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}