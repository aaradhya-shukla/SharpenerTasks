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

// let item=document.querySelector('li:nth-child(2)');
// item.style.backgroundColor="green";
// let item3=document.querySelector('li:nth-child(3)');
// item3.style.color="white";
// let item2=document.querySelectorAll("li");
// item2[1].style.color="green";
// let odd =document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
// }

// let itemList=document.querySelector('#items');

// // itemList.parentNode.style.backgroundColor="pink";
// // console.log(itemList.parentNode.parentNode);
// // console.log(itemList.parentElement);
// // console.log(itemList.children);// use cnildren instead of childNodes
// // itemList.children[1].style.color="red";
// // itemList.children[1].style.fontWeight="bold";

// //using last and first element child dont use first child or last child
// console.log(itemList.lastElementChild);
// itemList.firstElementChild.innerHTML="<b>hello";

// // creating new elements in DOM

// let div=document.createElement('div');
// div.id='hello';
// div.className="hello1";
// div.setAttribute('title','heloo from div')
// console.log(div);
// let text=document.createTextNode("Hello world");
// //appending this to our new div element
// div.append(text);
// console.log(div);
// //now placing our div at a position in our html file
// let container=document.querySelector('#main-header .container');
// console.log(container);

// let h1=document.querySelector('header h1');
// console.log(h1);
// div.style.fontSize="30px";
// container.insertBefore(div,h1);


//task-traverse dom elements->last/first child/elementchild ->child Nodes->children
//->firstsibling->nextsibiling->createelement->createtextnode->insertbefore

//create new list item

// let item=document.createElement('li');
// item.className="list-group-item";
// item.setAttribute('title','new item');
// console.log(item);
// let text=document.createTextNode('Item 5');
// item.append(text);
// console.log(item);

// let items=document.querySelector('#items');
// item.style.backgroundColor="pink";

// items.insertBefore(item,items.lastElementChild);

// traverse

// let item=document.querySelector("#items");
// // parentnode
// console.log(item.parentNode.parentNode.parentNode);
// // childNodes
// console.log(item.childNodes);
// // children
// console.log(item.children);
// console.log(item.parentNode.parentNode.children);

// // LAST AND FIRST CHILD

// console.log(item.lastChild);
// console.log(item.firstChild);

// //last and first element child

// console.log(item.lastElementChild);
// console.log(item.previousElementSibling);
// console.log(item.nextElementSibling);

// ADDING HELLO WORLD BEFORE ITEM LISTER

let div=document.createElement('div');
div.className="hello";
div.id="newelement";
div.setAttribute('title','hello there');
let text=document.createTextNode("Hello world")
div.append(text);
div.style.fontWeight="bold";

let container=document.querySelector('header .container');
let h1=document.querySelector('#header-title');
container.insertBefore(div,h1);

let item=document.createElement('li');
item.className="list-group-item";
item.innerHTML="<b>Hello World";
console.log(item);
item.style.color="red";

let list=document.querySelector('#items');
list.insertBefore(item,list.firstElementChild);