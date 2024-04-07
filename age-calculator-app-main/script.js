const inp_years = document.getElementById("year");
const inp_months = document.getElementById("month");
const inp_days = document.getElementById("day");
const arrow = document.getElementsByClassName("purp-circle").item(0);

const p_days = document.getElementById("id-day");
const p_months = document.getElementById("id-month");
const p_years = document.getElementById("id-year");

const o_years = document.getElementById("o_years");
const o_months = document.getElementById("o_months");
const o_days = document.getElementById("o_days");

const date = new Date();
const local_mili = date.getTime();

const remove = () => {
    const inp_grp = document.getElementsByClassName("inp-grp");
    const len = inp_grp.length;
    const paras = [p_years, p_months, p_days];
    arrow.classList.remove("invalid");

    for (i = 0; i < len; i++) {
        inp_grp[i].classList.remove("invalid");
        paras[i].textContent = "";
    }
}

const change = (string1, string2, string3) => {
    o_days.textContent = string1;
    o_months.textContent = string2;
    o_years.textContent = string3;
}

const calculate = () => {
    const days = parseInt(inp_days.value);
    const months = parseInt(inp_months.value);
    const years = parseInt(inp_years.value);

    const entered_date = new Date(years, months, days);
    const entered_mili = entered_date.getTime();

    const diff = local_mili-entered_mili;
    const act_days_tot = diff / 86400000;
    const act_years = act_days_tot / 365.25;
    const rem_months = (act_years - parseInt(act_years)) * 12 + 1;
    const rem_days = (rem_months - parseInt(rem_months)) * 30.5 - 1;

    change (parseInt(rem_days).toString(),
            parseInt(rem_months).toString(), 
            parseInt(act_years).toString());
}

const main = () => {
    const days = parseInt(inp_days.value);
    const months = parseInt(inp_months.value);
    const years = parseInt(inp_years.value);

    const dd = "--";
    const values = [inp_years.value, inp_months.value, inp_days.value];
    const paras = [p_years, p_months, p_days];
    if (values[0] == "" || values[1] == "" || values[2] == "") {
        change(dd, dd, dd);
        for (i = 0; i <= 2; i++) {
            if (values[i] == "") {
                paras[i].textContent = "This field is required";
                paras[i].parentElement.classList.add("invalid");
            }
        }
    } else if (date.getTime() - new Date(years, months, days) < 0) {
        p_years.textContent = "Must be in the past";
        p_years.parentElement.classList.add("invalid");
        arrow.classList.add("invalid");
    } else {
        switch (months) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (days > 31 || days < 1) {
                    change(dd, dd, dd);
                    arrow.classList.add("invalid");
                    p_days.textContent = "Enter a valid day";
                    p_days.parentElement.classList.add("invalid");
                } else {
                    remove();
                    calculate()
                }
            break;

            case 4:
            case 6:
            case 9:
            case 11:
                if (days > 30 || days < 1) {
                    change(dd, dd, dd);
                    arrow.classList.add("invalid");
                    p_days.textContent = "Enter a valid day";
                    p_days.parentElement.classList.add("invalid");
                } else {
                    remove();
                    calculate();
                }
            break;
            
            case 2:
                if (days > 28 || days < 1) {
                    change(dd, dd, dd);
                    arrow.classList.add("invalid");
                    p_days.textContent = "Enter a valid day";
                    p_days.parentElement.classList.add("invalid");
                } else {
                    remove();
                    calculate();
                }
            break;

            default: 
                console.log("Please enter a valid month");
                change(dd, dd, dd);
            break;
        }
    }
}