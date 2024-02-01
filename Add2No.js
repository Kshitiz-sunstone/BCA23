function add() {
    let x=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let ans=parseInt(x)+parseInt(y)
    document.getElementById('result').innerHTML=ans;
}