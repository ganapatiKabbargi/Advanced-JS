console.log("person 1: shows ticket")
console.log("person 2: shows ticket")
const wifeBringingTicket=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("ticket")
    },3000)   
})
const popcorn=wifeBringingTicket.then((ticket)=>{
    console.log("husband : shall we go")
    console.log("wife : im hungry")
    return new Promise((res,rej) => res(`${ticket} popcorn`))
})
const butter=popcorn.then((pop)=> {
    console.log("husband : shall we go")
    console.log("wife : i need butter on popcorn")
    return new Promise((res,rej) => res(`${pop} butter`))
})
const coldDrink=popcorn.then((butter)=> {
    console.log("husband : shall we go")
    console.log("wife : i need coldDrink")
    return new Promise((res,rej) => res(`${butter} colddrink`))
})
coldDrink.then((res)=> console.log(res))

console.log("person 4: shows ticket")
console.log("person 5: shows ticket")

// code using async/await

console.log("person 1: shows ticket")
console.log("person 2: shows ticket")

let preMovieActivity= async ()=>{

    const wifeBringingTicket=new Promise((res,rej)=>{
            setTimeout(()=>{res("ticket")},3000)
        })
    const popcorn= new Promise((res,rej) => res("popcorn"))
    const butter= new Promise((res,rej) => res("butter"))
    const coldDrink=new Promise((res,rej)=> res("coldDrink"))

        
    let tickets=await wifeBringingTicket;
    console.log(`wife : i got the ${tickets}`)
    console.log("husband : shall we go")
    console.log("wife : im hungry")
    let pop=await popcorn;
    console.log(`husband : i got ${pop} `)
    console.log("husband : shall we go")
    console.log("wife : i need butter on popcorn")
    let butterr=await butter;
    console.log(`husband : i got ${butterr} `)
    console.log("husband : shall we go")
    console.log("wife : i need cold drinks ")
    let colddrink=await coldDrink
    console.log(`husband : i got ${colddrink} too `)
    console.log("husband : now shall we go")
    console.log("wife : k")
    return tickets;
}
preMovieActivity().then((res)=>{
    console.log(`person 3 :shows ${res}`)
})

console.log("person 4: shows ticket")
console.log("person 5: shows ticket")