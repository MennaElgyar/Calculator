let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clear = document.querySelector(".clear"),
    equal = document.querySelector(".equal"),
    view = document.querySelector(".textview"),
    currentNumber = "",
    oldNumber = "",
    finalNumber = "",
    operation = "",
    result = "";

numbers.forEach(num => {
    num.addEventListener('click', () => {
        if (finalNumber == "") {
            currentNumber = num.value;
            finalNumber = currentNumber;
        }
        else {
            currentNumber = num.value;
            finalNumber += currentNumber;
            console.log(finalNumber)
        }
        view.innerHTML = finalNumber;
    });
});
operations.forEach(op=> {
    op.addEventListener('click',()=> {
        if(oldNumber){
            operational()
        }
        oldNumber = finalNumber;
        finalNumber = "";
        operation = op.getAttribute("data-op")
    });
});
function operational() {
    finalNumber = parseFloat(finalNumber);
    oldNumber = parseFloat(oldNumber);
    switch (operation) {
        case "sqrt":
            result = Math.sqrt(result);
            break;
        case "div":
            result = oldNumber / finalNumber;
            break;

        case "mul":
            result = oldNumber * finalNumber;
            break;

        case "sub":
            result = oldNumber - finalNumber;
            break;

        case "plus":
            result = oldNumber + finalNumber;
            break;
        default:
            result = finalNumber;
    }
    if(result == "infinity"|| result == "-infinity"){
        result ="cannot divide by zero";
    }
    view.innerHTML = result;
    oldNumber = "";
    finalNumber = result;
}
equal.addEventListener('click',()=>{
    operational();
})
clear.addEventListener('click',()=>{
    oldNumber= "";
    finalNumber = "" ;
    view.innerHTML = "0";
})









