let str="Sunstone"
// const strRev =  str.split('').reverse().join(''); 
// console.log(strRev);
function reverseStr(str){
    result=""
    for (let index = str.length-1; index >=0 ; index--) {
        const element = str[index];
        result+=element
    }
    // console.log(result);
    return result;
}
console.log(reverseStr("India"));