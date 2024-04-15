const numbers = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("op");
const display = document.getElementsByClassName("display").item(0);
const reset = document.getElementById("reset");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const del = document.getElementById("del");

const del_func = () => {
    const updated = display.value.slice(0, display.value.length - 1);
    display.value = updated;
    for (i = 0; i < operators.length; i++) {
        operators[i].disabled = false;
    }
    zero.disabled = false;
}

const press_num = (event) => {
    zero.disabled = false;
    display.value += event.currentTarget.textContent;
    for (i = 0; i < operators.length; i++) {
        operators[i].disabled = false;
    }
}

const reset_func = () => {
    display.value = "";
}

const op_func = (event) => {
    if (event.currentTarget.textContent == "/") {
        zero.disabled = true;
    }

    display.value += event.currentTarget.textContent;
    for (i = 0; i < operators.length; i++) {
        operators[i].disabled = true;
    }
}

const evaluate = () => {
    if (display.value != "") {
        const ans = eval(display.value);
        display.value = ans;
    } else {
        display.value = "";
    }
} 

reset.addEventListener("click", reset_func);
window.addEventListener("load", reset_func);
equals.addEventListener("click", evaluate);
del.addEventListener("click", del_func);

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", op_func)
}

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", press_num);
}