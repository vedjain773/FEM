const add = document.getElementById("plus");
const sub = document.getElementById("minus");
const num = document.getElementById("num");

let value = 0;

const increase = () => {
    value = parseInt(num.textContent);
    num.textContent = `${value + 1}`;
}

const decrease = () => {
    value = parseInt(num.textContent);
    if (value == 0) {
        num.textContent = "0";
    } else {
        num.textContent = `${value - 1}`;
    }
}

const imgButtons = document.getElementsByClassName("img-btn");
const priImg = document.getElementById("pr-img")

const deactivate = (group, num) => {
    for (i = 0; i < group.length; i++) {
        group[i].style.opacity = 1;
    }
    group[num].style.opacity = 0.5;
}

/**
 * 
 * @param {Event} event 
 */

const switchImg = (event) => {
    const id = event.target.id;
    let srcURL = "";
    switch (id) {
        case "one": 
        srcURL = "./images/image-product-1.jpg";
        deactivate(imgButtons, 0)
        break;

        case "two":
        srcURL = "./images/image-product-2.jpg";
        deactivate(imgButtons, 1)
        break;

        case "three":
        srcURL = "./images/image-product-3.jpg";
        deactivate(imgButtons, 2)
        break;

        case "four":
        srcURL = "./images/image-product-4.jpg";
        deactivate(imgButtons, 3)
        break;
    }
    priImg.src = srcURL; 
}

const addtocart = document.getElementById("addtocart");
const quantity = document.getElementById("quan");
const total = document.getElementById("total");
const hasnt = document.getElementById("ifhasnt");
const has = document.getElementById("ifhas");

const quantity2 = document.getElementById("quan2");
const total2 = document.getElementById("total2");
const hasnt2 = document.getElementById("ifhasnt2");
const has2 = document.getElementById("ifhas2");

addtocart.addEventListener("click", () => {
    const val = parseInt(num.textContent);
    if (val != 0) {
        quantity.textContent = val;
        total.textContent = `$${125 * val}`;
        hasnt.style.display = "none";
        has.style.display = "block";

        quantity2.textContent = val;
        total2.textContent = `$${125 * val}`;
        hasnt2.style.display = "none";
        has2.style.display = "block";
    } else {
        hasnt.style.display = "block";
        has.style.display = "none";

        hasnt2.style.display = "block";
        has2.style.display = "none";
    }
})

const del = document.getElementById("del");
const del2 = document.getElementById("del2");

del.addEventListener("click", () => {
    num.textContent = "0";
    hasnt.style.display = "block";
    has.style.display = "none";
})

del2.addEventListener("click", () => {
    num.textContent = "0";
    hasnt2.style.display = "block";
    has2.style.display = "none";
})

const cart = document.getElementById("cart");
const popup = document.getElementById("popup");

let open = false;
cart.addEventListener("click", () => {
    if (open) {
        popup.style.display = "none";
        open = false;
    } else {
        popup.style.display = "block";
        open = true;
    }
})

const cart2 = document.getElementById("cart2");
const popup2 = document.getElementById("popup2");

cart2.addEventListener("click", () => {
    if (open) {
        popup2.style.display = "none";
        open = false;
    } else {
        popup2.style.display = "block";
        open = true;
    }
})

const hamburger = document.getElementById("open");
const closenav = document.getElementById("close");
const actnav = document.getElementById("actnav");

hamburger.addEventListener("click", () => {
    actnav.style.display = "block";
})

closenav.addEventListener("click", () => {
    actnav.style.display = "none";
})

add.addEventListener("click", increase);
sub.addEventListener("click", decrease);

for (i = 0; i < imgButtons.length; i++) {
    imgButtons[i].addEventListener("click", (event) => switchImg(event))
}