
    const posts=[
        {title : "post one",body : "this is post one",CreatedAt : new Date().getTime()},
        {title : "post two",body : "this is post two",CreatedAt : new Date().getTime()}
    ]

let intervalId=0;
function getPosts(){
    clearInterval(intervalId)     
    intervalId=setInterval(()=>{
        let output=""
        posts.forEach((post)=>{
            output=output+`<li>${post.title} created  ${Math.floor(new Date().getTime()/1000-post.CreatedAt/1000)} seconds ago</li>`
        })
        document.body.innerHTML=output;
    },1000)  
}


function  creatPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post , CreatedAt : new Date().getTime()})
            resolve()
            error=false;
            if(error){
                reject("error")
            } 
        },2000)                 
    }) 
}
   
function deletePost() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length!=0){
                let popped=posts.pop()
                resolve(popped)
               }else{
                reject("array is empty now")
               }
        },1000)  
    })
}

   

 async function postCreation(){
    try{
 getPosts()
 await creatPost({title : "post three",body : "this is post three"})
 getPosts()
 await deletePost()
 getPosts()
 await deletePost()
 getPosts()
 await deletePost()
 getPosts()
 await creatPost({title : "post four",body : "this is post four"})
 getPosts()
 await deletePost()
 await deletePost()
 
 }
 catch(err){ 
    console.log(err)
 }
}

postCreation()
