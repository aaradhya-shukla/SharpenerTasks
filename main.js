let form=document.getElementById("my-form");
form.addEventListener("submit",saveValue);
function saveValue(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    if (name==="" || email===""){
        alert("Please enter credentials ");
        return;
    }
    localStorage.setItem("name",`${name}`);
    localStorage.setItem("email",`${email}`);
    alert("data stored successfully");
    e.target.reset();
    
    
}