// always display on screen
function show(){
    axios.get('https://crudcrud.com/api/a5e26affbd1c47238bc8572a7b4d2743/products').then((res)=>{
        createEle(res.data)
    })
}
// delete product from screen

// add product on screen

// adding producto backend

form=document.getElementById("my-form");
form.addEventListener("submit",add);

function add(e){
    e.preventDefault()
    let sp=document.getElementById("sp").value;
    let name=document.getElementById("name").value;
    let category=document.getElementById("category").value;
    let prodObj={sp:sp,name:name,category:category};
    // making a post request to crud crud
    axios.post('https://crudcrud.com/api/a5e26affbd1c47238bc8572a7b4d2743/products',prodObj).then((res)=>{
        prodObj._id=res.data._id
        createEle([prodObj])
    }).
    catch((err)=>console.log(err))
}

function createEle(data){
    for(let i=0;i<data.length;i++){
        let del=document.createElement("button");
        del.setAttribute("id",`${data[i]._id}`);
        del.textContent="Delete Product";
        del.setAttribute("name",`${data[i].category}`)
        del.addEventListener("click",delt);
        let li=document.createElement("li");
        li.textContent="Rs "+`${data[i].sp}-${data[i].category}-${data[i].name}`;
        li.appendChild(del);
        console.log(li)
        let ul=document.getElementById(`${data[i].category}`)
        ul.appendChild(li)
        console.log(del)
    }
    
}


function delt(e){
    e.preventDefault()
    console.log(e.target.id)
    axios.delete(`https://crudcrud.com/api/a5e26affbd1c47238bc8572a7b4d2743/products/${e.target.id}`).then((res)=>console.log("res.status")).
    catch((err)=>console.log(err));
    let ul=document.getElementById(`${e.target.name}`)
    ul.removeChild(e.target.parentNode);
}


// 'https://crudcrud.com/api/0f6f155a2c924d86afbdb452ecb65db5/products'
show()