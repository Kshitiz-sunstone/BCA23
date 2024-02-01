// let x=10
// let y=x*x
// console.log(y);
// let z=x*x*x
// console.log(z);

// simple if else 
var x = 5
if (x < 10) {
    let sq = x * x
    console.log(sq);
}
else
    var cu = x * x * x
console.log(cu);

//  single if
var x = 5;
if (x < 10) {
    console.log("X is less than 10");
}
if (x == 10) {
    console.log("X is equal to 10");
}
if (x > 10) {
    console.log("X is greater than 10");
}

//  else if ladder

if (x < 10) {
    console.log("X is less than 10");
}
else if (x == 10) {
    console.log("X is equal to 10");
}
else if (x > 10) {
    console.log("X is greater than 10");
}
else {
    console.log("Invalid");
}

// switch case 

// switch(v

// Vowel checking using switch case
// Fall through
let ch = 'x';
switch (ch) {
    case 'e':
    case 'u':
    case 'a':
    case 'i':
    case 'o':
        {
            console.log('vowel');
            break;
        }
    default: {
        console.log("Not a vowel");
    }

}