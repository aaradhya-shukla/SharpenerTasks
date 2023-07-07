let form =document.getElementById("addForm");
let itemlist=document.getElementById("items");
let filter=document.getElementById("filter");
console.log(itemlist);
// adding evemt listenr to get value when press on submit
form.addEventListener("submit",addForm);
// adding eventlistener to item list for removing element
itemlist.addEventListener("click",removeForm);
//
// let li1=itemlist.children;
// li.addEventListener("click",editForm);
// // editBtn.addEventListener("click",editForm);
// // adding an eventlistener to filter
filter.addEventListener('keyup',filterValue);
function addForm(e){
    e.preventDefault();
    console.log(e.target);
    let newText=document.getElementById("item").value;// value in the form entered taken here
    let description=" "+document.getElementById("description").value;
    let li=document.createElement('li');// new list item created
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newText));
    li.appendChild(document.createTextNode(description));
    
    // text content appended to the new element

    // putting the element at the right place
    itemlist.appendChild(li);

    // creating a delete button now

    let del=document.createElement('button');
    del.className="btn btn-danger float-right btn-sm  delete";
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    // creating an edit buttom

    let edit=document.createElement("button");
    edit.className="btn btn-outline-primary btn-sm float-right edit";
    edit.appendChild(document.createTextNode("EDIT"));
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



// function editForm(e){
//     if(e.target.className.contains="edit"){
//         let li1=e.target.parentNode;
//         li1.style.backgroundColor="pink";
//         li1.appendChild(edit);
//     }
// }

function filterValue(e){
    let word=e.target.value.toLowerCase();
    //console.log(word);
    let items=itemlist.getElementsByTagName('li');
    //console.log(items);
    // converting html collection to an array
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        let description=item.firstChild.nextSibling.textContent;
        //console.log(itemName);
        console.log(description);
        if (itemName.toLowerCase().indexOf(word)!=-1 || description.toLowerCase().indexOf(word)!=-1){
            console.log(item);
           
            item.style.display="block";
            
        }
        else{
            item.style.display="none";
        }
    })
}

