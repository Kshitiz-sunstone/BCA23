let num1 = "";
let num2 = "";
let op = "";
function display(th) {
    let x = th.value;
    if (op == "") {
        num1 += x;
        document.getElementById('data').value = num1;
    }
    else {
        num2 += x;
        document.getElementById('data').value = num2;
    }
    console.log("num1 " + num1);
    console.log("num2 " + num2);

}
function calc(th) {
    op = th.value;
    console.log(op);
}
function eva() {
    let ans = eval(num1 + op + num2)
    console.log(ans);
    document.getElementById('data').value = ans;
    op=""
    num1=ans;
    num2=""
}