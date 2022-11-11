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
function getPosts(callback){
    clearInterval(intervalId)     
    intervalId=setInterval(()=>{
        let output=""
        posts.forEach((post)=>{
            output=output+`<li>${post.title} created  ${Math.floor(new Date().getTime()/1000-post.CreatedAt/1000)} seconds ago</li>`
        })
        document.body.innerHTML=output;
    },1000)
    callback()  
}

let Id=0;
var count=0;
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(Id)
    Id=setInterval(()=>{
    count=count+1;
    let output=" "
    output= output+`<h3>Last Edited ${count} Seconds ago</h3>`
    document.body.innerHTML=document.body.innerHTML+output
     },1000)
    
} 


getPosts(lastEditedInSecondsAgo)

function creatPost(post,callback){
    setTimeout(()=>{
        posts.push({...post , CreatedAt : new Date().getTime()})
        callback(lastEditedInSecondsAgo)
    },3000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
    posts.push({...post , CreatedAt : new Date().getTime()} )
        callback(lastEditedInSecondsAgo)
    },5000)
}

creatPost({title :"post three", body : "this is post three"},getPosts)
create4thPost({title :"post four",body : "this is post four"},getPosts)





