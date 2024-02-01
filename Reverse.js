let y = 1234321
let x=y
let rev = 0, rem = 0;
console.log(x);
while (x != 0) {
    rem = x % 10;
    x = parseInt(x / 10);
    rev = (rev * 10) + rem;
    // console.log(x);
}
console.log(rev);
if(rev==y){
    console.log("Pallidrome");
}
else{
    console.log("Not a Pallindrome");
}