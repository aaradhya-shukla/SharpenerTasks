let form =document.getElementById("addForm");
let itemlist=document.getElementById("items");

// adding evemt listenr to get value when press on submit
form.addEventListener("submit",addForm);
// adding eventlistener to item list for removing element
itemlist.addEventListener("click",removeForm);
itemlist.addEventListener("click",editForm);
function addForm(e){
    e.preventDefault();
    console.log(e.target);
    let newText=document.getElementById("item").value;// value in the form entered taken here
    let li=document.createElement('li');// new list item created
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newText));// text content appended to the new element

    // putting the element at the right place
    itemlist.appendChild(li);

    // creating a delete button now

    let del=document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    // creating an edit buttom

    let edit=document.createElement("button");
    edit.className="btn btn-danger btn-sm float-right delete";
    edit.appendChild(document.createTextNode("->"));
    li.appendChild(edit);

}
function removeForm(e){
    // putting this condition to make sure that only on clicking the button pop up should come
    if(e.target.className.contains="delete"){
       if(confirm("ARE YOU SURE?")){
        let li=e.target.parentNode;// since li is the parent of target that is button here
        itemlist.removeChild(li);
       } 
    }
}
// creating an edit button



function editForm(e){
    if(e.target.className.contains="edit"){
        let li1=e.target.parentNode;
        li1.style.backgroundColor="pink";
        li1.appendChild(edit);
    }
}


