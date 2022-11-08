const obj1={
    firstname:"bob",
}

const obj2={
    firstname : "john"
}

function printDetails (age,state){
    console.log(this.firstname+" is "+age+" years old and he is from "+state)
}

printDetails.call(obj1,18,"newyork")
printDetails.apply(obj2,[20,"california"])

let DetailsFunc=printDetails.bind(obj1,18,"newyork")
DetailsFunc()

const student={
    age : 20
}
function printAge(){
    console.log(this.age)
}
let studentAge=printAge.bind(student)
studentAge()

// currying using bind method
// function multiply(a,b){
//     console.log(a*b)
// }

// let multiplyByTwo=multiply.bind(this,2)
// multiplyByTwo(5)
// let multiplyBythree=multiply.bind(this,3)
// multiplyBythree(5)


// currying using closures
function multiply(x){
    return function(y){
        console.log(x*y)
    }
}
let multiplyByTwo=multiply(2)
multiplyByTwo(5)
let multiplyBythree=multiply(3)
multiplyBythree(5)