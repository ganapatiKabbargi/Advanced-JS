const posts=[
    {
        title : "post one",
        body : "this is post one",
        CreatedAt : new Date().getTime()
    },
    {
        title : "post two",
        body : "this is post two",
        CreatedAt : new Date().getTime()
    }
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

function creatPost(post){
return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post , CreatedAt : new Date().getTime()})
            resolve()
            error=false;
            if(error){
                reject("error")
            }  
        },1000)     
})    
}

creatPost({title :"post three", body : "this is post three"})
.then(()=>{
    getPosts()
    deletePost() 
    .then(()=>{
        getPosts()
        deletePost() 
        .then(()=>{
            getPosts()
            deletePost()
            .then(()=>{
                getPosts()
                deletePost()
                .then()
                .catch((err)=>{
                    console.log(err)
                    create4thPost({title :"post four", body : "this is post four"})
                    .then(()=>{
                        deletePost()
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                })
            }) 
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }).catch((err)=>{
        console.log(err)
    })
})
.catch((err)=>{
    console.log(err)
})

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length !== 0){
                resolve(posts.pop())
               }else{
                reject("array is empty")
               }
        },1000)  
    })
}


 function create4thPost(post){
    return new Promise((resolve,reject)=>{
        posts.push({...post , CreatedAt : new Date().getTime()})
        resolve()
        error=false;
        if(error){
            reject("error")
        }
    }) 
}




