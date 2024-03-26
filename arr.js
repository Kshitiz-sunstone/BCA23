let arr = [1, 2, "three", 12.4];
arr[4] = "random"
arr.push('New data')
console.log(arr);
arr.pop()
console.log(arr);
let newarr = ['one', 'two', 'three']
let myarr = arr.concat(newarr)
console.log(myarr);
let sli = myarr.slice(1, 6)
console.log(sli);
myarr.forEach(element => {
    element = element + 2
    console.log(element);
});
let mymap = [1, 4, 9, 16, 25]
let ans = mymap.map(myFun)
console.log(ans)
function myFun(x) {
    return x * x
}

let test = [2, 45, 67, 3, 5, 99]
// console.log(test[1]);
let res = test.filter(red)
function red(num) {
    return num > 40
}
console.log(res);

let arr2d = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
// console.log(arr2d[0][2]);

arr2d.forEach(element => {
    element.forEach(elementNew => {
        console.log(elementNew);
    });
});

let arr3d=[
    [
        [1,2],
        [3,4]
    ],
    [
        ['a','b'],
        ['c','d']
    ],
    [
        [1.1,2.2],
        [3.3,4.4]
    ]
]
arr3d.forEach(element => {
    // console.log(element);
    element.forEach(element1 => {
        element1.forEach(element2 => {
            console.log(element2);
            
        });
    });
    
});