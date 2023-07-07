let form=document.getElementById("my-form");
form.addEventListener("submit",saveData);
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
    let div=document.getElementById("my-main");
    let p=document.createElement("p");
    p.innerText=`${email}`;
    p.appendChild(document.createElement('br'));
    console.log(p);
    console.log(div);
    div.appendChild(p);
}