show()
function show(){
    axios.get('https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/book').then((res)=>{
        for (let i=0;i<res.data.length;i++){
            let del=document.createElement("button")
            let edit=document.createElement("button")
            let ele=document.createElement("p")
            // setting attribute
            del.setAttribute("id",`${res.data[i]._id}`)
            edit.setAttribute("id",`${res.data[i]._id}`)
            ele.setAttribute("id",`${res.data[i]._id}`)
            del.textContent="delete"
            edit.textContent="edit"
            // adding event listeners
            del.addEventListener("click",delt);
            edit.addEventListener("click",editt);
            // adding to parent 
            ele.textContent=`${res.data[i].name}-${res.data[i].email}`
            ele.appendChild(del)
            ele.appendChild(edit)
            document.body.appendChild(ele)
        }
    }).catch((error)=>{console.log(error)
    return;})

}

let form=document.getElementById("my-form");
form.addEventListener("submit",add);

function add(e){
    e.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let userObj={name:name,email:email};
    console.log(userObj)
    //post call
    axios.post('https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/book',userObj).then((res)=>show()).
    catch((err)=>console.log(err))
    form.reset()
}

function delt(e){
    document.body.removeChild(e.target.parentNode);
    axios.delete(`https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/book/${e.target.id}`).then((res)=>
    console.log(res.status)).catch((err)=>console.log(err));

}

function editt(e){
    document.body.removeChild(e.target.parentNode);
    axios.get(`https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/book/${e.target.id}`).then((res)=>{
        update(res)
    }).catch((error)=>console.log(error))
    axios.delete(`https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/book/${e.target.id}`).then((res)=>
    console.log(res.status)).catch((err)=>console.log(err));
}

function update(res){
    document.getElementById("name").value=res.data.name
    document.getElementById("email").value=res.data.email
    
}