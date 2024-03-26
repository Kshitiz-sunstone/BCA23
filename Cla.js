class student{
    // constructor(){
    //     this.name='abc',
    //     this.age=10,
    //     this.roll=55
    // }
    constructor(n,a,r){
        this.name=n,
        this.age=a,
        this.roll=r
    }
}

let s=new student()
let s1=new student('xyz',44,2)
console.log(s1.name);