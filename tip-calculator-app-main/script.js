const tabs = document.getElementsByClassName("tab");
const inp_bill = document.getElementById("input-bill");
const inp_person = document.getElementById("input-person");
const tip_pp = document.getElementById("tip-p-p");
const total_pp = document.getElementById("tot-p-p");
const custom = document.getElementById("custom");
const reset_button = document.getElementsByClassName("reset").item(0);

var bill_amt;
var nop;
var counter = 0;

const checkfor0 = () => {
    if (inp_person.value == 0) {
        const error_para = document.getElementsByClassName("error").item(0);
        error_para.style.display = "block";
    }
}

const custom_per = () => {
    custom.classList.add("active");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].disabled = true;
    }

    if (counter < 2) {
        counter++;
    } else if (counter = 2) {
        calculate(parseFloat(bill_amt), parseFloat(nop));;
        counter = 0;
    }
}

const border_change = (event) => {
    event.currentTarget.parentElement.classList.add("border");
}

const reset = () => {
    inp_bill.value = "";
    inp_person.value = "";
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        tabs[i].disabled = false;
    }
    total_pp.textContent = "$0.00";
    tip_pp.textContent = "$0.00";
    counter = 0;
    inp_bill.disabled = false;
    inp_person.disabled = false;
    custom.value = "";
    custom.disabled = false;
}

const calculate = (b_amt, noop) => {
    const per_element = document.getElementsByClassName("active").item(0);
    var tab_selected_text;
    if (per_element.textContent) {
        tab_selected_text = per_element.textContent;
    } else if (per_element.value) {
        tab_selected_text = per_element.value;
    }
    const multiplier_arr = tab_selected_text.split(" ");
    const multiplier = parseInt(multiplier_arr[0]) * 0.01;

    const tip = b_amt * multiplier;
    const tip_per_person = Math.round((tip / noop) *100) / 100;

    const total = b_amt + tip;
    const total_per_person = Math.round((total / noop) *100) / 100;

    tip_pp.textContent = "$"+(tip_per_person).toString();
    total_pp.textContent = "$"+(total_per_person).toString();
}

const select = (event) => {
    event.currentTarget.classList.add("active");

    for (i = 0; i < tabs.length; i++) {
        if (!tabs[i].classList.contains("active")) {
            tabs[i].disabled = true;
        }
    }

    custom.disabled = true;

    if (counter < 2) {
        counter++;
    } else if (counter = 2) {
        calculate(parseFloat(bill_amt), parseFloat(nop));;
        counter = 0;
    }
}

change_bill_amt = (event) => {
    bill_amt = inp_bill.value;
    event.currentTarget.parentElement.classList.remove("border");
    inp_bill.disabled = true;
    if (counter < 2) {
        counter++;
    } else if (counter = 2) {
        calculate(parseFloat(bill_amt), parseFloat(nop));;
        counter = 0;
    }
}

change_nop = (event) => {
    nop = inp_person.value;
    event.currentTarget.parentElement.classList.remove("border");
    inp_person.disabled = true;

    if (nop == 0) {
        const error_para = document.getElementsByClassName("error").item(0);
        error_para.style.display = "block";
    } else {
        const error_para = document.getElementsByClassName("error").item(0);
        error_para.style.display = "none";
    }

    if (counter < 2) {
        counter++;
    } else if (counter = 2) {
        calculate(parseFloat(bill_amt), parseFloat(nop));;
        counter = 0;
    }
}

inp_bill.addEventListener("change", change_bill_amt)
inp_person.addEventListener("change", change_nop)
inp_bill.addEventListener("focus", border_change);
inp_person.addEventListener("focus", border_change);
inp_person.addEventListener("input", checkfor0)

for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", select);
}

custom.addEventListener("change", custom_per);

reset_button.addEventListener("click", reset);

window.addEventListener("load", reset);