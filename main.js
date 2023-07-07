let form=document.getElementById("my-form");
let div=document.getElementById("my-main");
form.addEventListener("submit",saveData);
//div.addEventListener("click",removeBtn);

function saveData(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    if (name=== '' || phone===''|| email===''){
        alert("Please fill the credentials")
    }
    // converting object to readable form
    let userObj=JSON.stringify({"name":name,"phone":phone,"email":email});
    localStorage.setItem(`${email}`,userObj);
    alert("Data has been saved successfully");
    e.target.reset();
    let p=document.createElement("p");
    p.textContent="* "+`${email}`;
    let del=document.createElement("button");
    del.className="delete";
    del.setAttribute("value","Delete");
    del.textContent="Delete";
    //edit button
    let edit=document.createElement("button");
    edit.className="edit";
    edit.textContent="Edit";
    p.appendChild(del);
    p.appendChild(edit);
    p.appendChild(document.createElement('br'));

    div.appendChild(p);
    // to delete event
    del.addEventListener('click',removeBtn);
    // adding event listner to edit
    edit.addEventListener('click',editData);
}
function removeBtn(e){
    e.preventDefault();
    if (e.target.className.contains="delete"){
        
        let p=e.target.parentNode;
        let a=p.parentNode;
        console.log(p.textContent.substring(2,30));
        localStorage.removeItem(p.textContent.substring(2,30));
        div.removeChild(p);
        
        // console.log(div.children);
        // div.removeChild(p);
    }
}
function editData(e){
    e.preventDefault();
    if (e.target.className.contains="edit"){
        let p=e.target.parentNode;
        let a=p.parentNode;
        console.log(p.textContent.substring(2,30));
        let obj=JSON.parse(localStorage.getItem(p.textContent.substring(2,30)));
        localStorage.removeItem(p.textContent.substring(2,30));
        div.removeChild(p);
        document.getElementById("name").value=obj.name;
        document.getElementById("phone").value=obj.phone;
        document.getElementById("email").value=obj.email;
    }
}