let x=11
let temp=x
let result=''
while(temp!=0){
    let r=temp%2;
    temp=Math.floor(temp/2);
    result=r+result
}
console.log(result);