/**
 * 
 * @param {Event} event 
 */

const accordion = (event) => {
    const qanda = event.currentTarget;
    const elements = document.getElementsByClassName("qanda");
    if (qanda.classList.contains("active")) {
        qanda.classList.remove("active");
    } else {
        for (i = 0 ; i <= 3; i++) {
            elements[i].classList.remove("active");
        }
        qanda.classList.add("active");
    }

    for(i = 0; i <= 3; i++) {
        if (elements[i].classList.contains("active")) {
            console.log("triggered");
            elements[i].getElementsByTagName("img")[0].src = "assets/images/icon-minus.svg";
        } else {
            elements[i].getElementsByTagName("img")[0].src = "assets/images/icon-plus.svg";
        }
    }
}