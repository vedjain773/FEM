/**
 * 
 * @param {Event} event 
 */

const accordion = (event) => {
    const qanda = event.currentTarget;
    const elements = document.getElementsByClassName("qanda");
    const img = qanda.getElementsByTagName("img");
    if (qanda.classList.contains("active")) {
        img[0].src = "assets/images/icon-plus.svg"
        qanda.classList.remove("active");
    } else {
        img[0].src = "assets/images/icon-minus.svg"
        for (i = 0 ; i <= 3; i++) {
            elements[i].classList.remove("active");
        }
        qanda.classList.add("active");
    }
}