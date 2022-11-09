class Student{
    static count=0;
    static arr=[]
    constructor(name,age,phone_no,board_marks){
        this.name=name
        this.age=age
        this.phone_no=phone_no
        this.board_marks=board_marks
        Student.count++;
        Student.arr.push(this)
    }
    Eligible(){
        if(this.board_marks>40){
            console.log("eligible")
        }else{
            console.log("not eligible")
        }
    }
    Efp(cuttOfMarks){
        return  (cuttOfAge)=>{
            if(this.age>=cuttOfAge && this.board_marks>=cuttOfMarks){
                return true
            }else{
                return false
            }
        }   
    }
}
let cuttOfMarks=60;
let cuttOfAge=18;

function countOfStudents(){
    console.log(Student.count)
}

let std1=new Student("bob","19",12345,60)
let std2=new Student("john","15",12345,30)
let std3=new Student("dustin","18",12345,95)
let std4=new Student("mike","15",12345,36)
let std5=new Student("will","18",12345,80)

// countOfStudents()

for(let std of Student.arr){
    if((std.Efp(cuttOfMarks)(cuttOfAge))==true){
        console.log(std.name)
    }
}