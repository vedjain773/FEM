const submit = document.getElementById("sub");
const inputs = document.getElementsByTagName("input");
const msgsent = document.getElementById("msgsent");

let textInputs = [];
var emailInput;
let radioInputs = [];
var checkBox;

for (i = 0; i < inputs.length; i++) {
    if (inputs.item(i).type == "text") {
        textInputs.push(inputs.item(i));
    } else if (inputs.item(i).type == "email") {
        emailInput = inputs.item(i);
    } else if (inputs.item(i).type == "radio") {
        radioInputs.push(inputs.item(i));
    } else if (inputs.item(i).type == "checkbox") {
        checkBox = inputs.item(i);
    }
}

const check = () => {
    const radioEle = document.getElementsByClassName("queries").item(0);
    const emailEle = document.getElementsByClassName("emailId").item(0);
    const consentEle = document.getElementsByClassName("consent").item(0);

    let counter = 0;

    for (i = 0; i < textInputs.length; i++) {
        var searchId = textInputs[i].id;
        var elems = document.getElementsByClassName(searchId).item(0);
        if (textInputs[i].value == "") {
            elems.textContent = "This field is required";
            elems.parentElement.children.item(1).style.border = "1px solid var(--red)";
            counter++;
        } else {
            elems.textContent = "";
            elems.parentElement.children.item(1).style.border = "1px solid var(--grey-500)";
        }
    }
    if (emailInput.value == "") {
        emailEle.textContent = "This field is required";
        counter++;
    } else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        emailEle.textContent = "Please enter a valid email address";
        counter++;
    } else {
        emailEle.textContent = "";
    }


    if (!radioInputs[0].checked && !radioInputs[1].checked) {
        radioEle.textContent = "Please select a query type";
        counter++;
    } else {
        radioEle.textContent = "";
    }

    if (!checkBox.checked) {
        consentEle.textContent = "To submit the form, please consent to being contacted";
        counter++;
    } else {
        consentEle.textContent = "";
    }

    if (counter == 0) {
        var data = {
            first_name: textInputs[0].value,
            last_name: textInputs[1].value,
            query: document.querySelector('input[name= "qType"]:checked').id,
            email: emailInput.value,
            message: textInputs[2].value
        }

        for (i = 0; i < textInputs.length; i++) {
            textInputs[i].value = "";
        }

        emailInput.value = "";
        checkBox.checked = false;

        for (i = 0; i < radioInputs.length; i++) {
            radioInputs[i].checked = false;
        }

        console.log(data);
        msgsent.showModal();
    }
}

submit.addEventListener("click", check);

document.getElementById("close").addEventListener("click", () => {
    msgsent.close("close");
})