const tabs = document.getElementsByClassName("tab");
const inp_bill = document.getElementById("input-bill");
const inp_person = document.getElementById("input-person");
const tip_pp = document.getElementById("tip-p-p");
const total_pp = document.getElementById("tot-p-p");
const custom = document.getElementById("custom");
const reset_button = document.getElementsByClassName("reset").item(0);

var bill_amt;
var nop;

const dyna_check_and_eval = () => {
    const active_tab = document.getElementsByClassName("active").item(0);
    if (active_tab && bill_amt != null && nop != null && nop != 0) {
        calculate(parseFloat(bill_amt), parseFloat(nop));
    } else {
        total_pp.textContent = "$0.00";
        tip_pp.textContent = "$0.00";
    }
}

const checkfor0 = () => {
    if (inp_person.value == 0) {
        const error_para = document.getElementsByClassName("error").item(0);
        error_para.style.display = "block";
        total_pp.textContent = "$0.00";
        tip_pp.textContent = "$0.00";
    }
}

const custom_per = (event) => {
    if (event.currentTarget.classList.contains("active")) {
        event.currentTarget.classList.remove("active");
    } else {
        for (i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        custom.classList.remove("active");
        event.currentTarget.classList.add("active");
    }
    dyna_check_and_eval();
}

const border_change = (event) => {
    event.currentTarget.parentElement.classList.add("border");
}

const reset = () => {
    inp_bill.value = "";
    inp_person.value = "";
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    custom.classList.remove("active");
    custom.value = "";
    total_pp.textContent = "$0.00";
    tip_pp.textContent = "$0.00";
    bill_amt = "";
    nop = "";
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
    if (event.currentTarget.classList.contains("active")) {
        event.currentTarget.classList.remove("active");
    } else {
        for (i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        custom.classList.remove("active");
        event.currentTarget.classList.add("active");
    }
    dyna_check_and_eval();
}

change_bill_amt = (event) => {
    bill_amt = inp_bill.value;
    event.currentTarget.parentElement.classList.remove("border");
    dyna_check_and_eval();
}

change_nop = (event) => {
    nop = inp_person.value;
    event.currentTarget.parentElement.classList.remove("border");
    if (nop == 0) {
        const error_para = document.getElementsByClassName("error").item(0);
        error_para.style.display = "block";
    } else {
        const error_para = document.getElementsByClassName("error").item(0);
        error_para.style.display = "none";
    }
    dyna_check_and_eval();
}

inp_bill.addEventListener("input", change_bill_amt)
inp_person.addEventListener("input", change_nop)
inp_bill.addEventListener("focus", border_change);
inp_person.addEventListener("focus", border_change);
inp_person.addEventListener("input", checkfor0)

for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", select);
}

custom.addEventListener("change", custom_per);

reset_button.addEventListener("click", reset);

window.addEventListener("load", reset);