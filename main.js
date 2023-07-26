let form=document.getElementById("my-form");
form.addEventListener("submit",addExpense);
let div=document.getElementsByClassName("row");
let id=1;

function addExpense(e){
    e.preventDefault();
    let user=document.getElementById("user").value;
    let expense=document.getElementById("Expense").value;
    let description=document.getElementById("Description").value;
    let type=document.querySelector("#Expensetype").value;
    if(user ==="" || expense === "" || description === ""){
        alert("Fill details to continue");
        return;
    }
    
    let userObj={user:user,expense:expense,description:description,type:type};
    let p=document.createElement("p");
    p.textContent=` * ${expense} - ${description} - ${type}`
    let del=document.createElement('button')
    let edit=document.createElement('button')
    del.className="delete"
    del.setAttribute("value","delete expense")
    del.textContent="delete expense"
    p.appendChild(del)
    edit.className=`edit${id}`
    edit.setAttribute("value","edit expense")
    edit.textContent="edit expense"
    p.appendChild(edit)
    div[0].appendChild(p)
    del.addEventListener("click",deleteExpense);
    edit.addEventListener("click",editExpesne);
    axios.post("https://crudcrud.com/api/56fdfbca95374b9599d96b82e4b95754/booking/",userObj).then((res)=>{
        console.log(res.status)
    }).catch((err)=>{
        console.error(err);
    })
    id+=1;
    form.reset();

}

function deleteExpense(e){
    console.log(10000)
    let div1=e.target.parentNode.parentNode;
    div1.removeChild(e.target.parentNode)
}

function editExpesne(e){
    let userObj=JSON.parse(localStorage.getItem(e.target.className));
    let div1=e.target.parentNode.parentNode;
    div1.removeChild(e.target.parentNode)
    document.getElementById("user").value=userObj.user;
    document.getElementById("Expense").value=userObj.expense;
    document.getElementById("Description").value=userObj.description;
    document.getElementById("Expensetype").reset;
}
