let arr=[
    [1,2,3,4,5],
    ['one','two','three','four','five'],
    ['a','b','c','d','e']
]

arr.forEach(element => {
    console.log('------------------');
    element.forEach(data => {
        console.log(data);
    });
});

class student{
    constructor(name,roll){
        this.name=name;
        this.roll=roll
    }
    display() {
        console.log(this.name+" "+this.roll);   
    }
}

let s1=new student("Kshitiz",1)
s1.display()