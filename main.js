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
    p.appendChild(del);
    p.appendChild(document.createElement('br'));

    div.appendChild(p);
    del.addEventListener('click',removeBtn);
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
