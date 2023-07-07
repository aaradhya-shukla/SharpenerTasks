let form=document.getElementById("my-form");
form.addEventListener("submit",saveValue);
let UserId=1;
function saveValue(e){
    e.preventDefault();    
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    if (name==="" || email===""){
        alert("Please enter credentials ");
        return;
    }

    let myObj=JSON.stringify({
        "name":name,
        "email":email,
    });

    // localStorage.setItem("name",`${name}`);
    // localStorage.setItem("email",`${email}`);
    localStorage.setItem("User Credentials-Id:"+`${UserId}`,myObj);
    alert("data stored successfully");
    e.target.reset();
    UserId+=1;
    
    
}