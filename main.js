let form=document.getElementById('my-form');
form.addEventListener("submit",book);
let arr=[];
function book(e){
    e.preventDefault()
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let userObj={name:name,email:email}
    axios.post("https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/meet",userObj).then((res)=>{
        console.log(res.status)
    }).catch((err)=>console.log(err));
    form.reset()
    axios.get("https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/meet").then((res)=>{
        showData(res)
    }).catch((err)=>{
        console.log(err)
    })
}

function showData(res){
    for(let i=0; i<res.data.length;i++){
        let del=document.createElement("button");
        let edit=document.createElement("button")
        del.setAttribute('id',`${res.data[i]._id}`)
        edit.setAttribute('id',`${res.data[i]._id}`);
        del.textContent='delete'
        edit.textContent='edit'

        del.addEventListener("click",delt)
        let ele=document.createElement('p')
        ele.innerHTML=`<h3>${res.data[i].name}-${res.data[i].email}</h3>`;
        ele.appendChild(del)
        ele.appendChild(edit)
        document.body.appendChild(ele)
    }
}

function delt(e){
    console.log(e.target.id)
    axios.delete(`https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/meet/${e.target.id}`).then((res)=>
    console.log("res.status")).catch((err)=>console.log(err))
}
function edit(e){
    
    axios.put(`https://crudcrud.com/api/95cfd471008f45b48929c2f6859b352b/meet/${e.target.id}`,).then((res)=>
    console.log("res.status")).catch((err)=>console.log(err))
}