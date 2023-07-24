const blog=[];
async function getPosts(){
    const createPost=(newPost)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                blog.push(newPost);
                resolve();
            })
        })
    }
    const deletePost=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (blog.length>0){
                    let value=blog.pop();
                    resolve(value);
                }
                else{
                    reject("ERROR");
                }
            })
        })
    }
    await createPost('post 1');
    await createPost('post 2');
    blog.forEach((post)=>{
        console.log(post);
    })
    let delPost;
    try{
        delPost=await deletePost();
    }
    catch(msg){
        delPost=msg
        console.log(delPost);
        return;

    }
    console.log(`deleted ${delPost}`);
    
}
getPosts();