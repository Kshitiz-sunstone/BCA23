function grd() {
    let inp = document.getElementById("data").value;
    // console.log(inp);
    let grad = ""
    // console.log(typeof(inp));
    if (inp <= 100 && inp >= 0) {

        if (inp >= 80) {
            grad = "A Grade"
        }
        else if (inp >= 60) {
            grad = "B Grade"
        }
        else if (inp > 50) {
            grad = "C Grade"
        }
        else if (inp > 40) {
            grad = "D Grade"
        }
        else {
            grad = "F Grade"
        }
    }
    else{
        grad="Invalid Input"
    }
    document.getElementById("result").innerHTML = grad
}