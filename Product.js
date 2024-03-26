let cart = [];
function add() {
    let data = document.getElementById('data').value
    cart.push(data)
    disp()
}
function disp() {
    let str = ''
    let i = 0;
    cart.forEach(element => {
        str += "<tr><td>" + (i + 1) + "</td><td>" + element + "</td><td><button onclick='del(" + i + ")'>Delete</button></td></tr>"
        i++
    });
    document.getElementById('result').innerHTML = str
}
function del(par) {
    cart.splice(par, 1)
    disp()
}