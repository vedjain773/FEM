const data = [
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]

const cardArr = document.querySelectorAll(".card");

for (i = 0; i < cardArr.length; i++) {
    cardArr[i].children[0].children[0].setAttribute("src", data[i]["image"]["desktop"]);
    cardArr[i].children[1].textContent = data[i]["name"];
    cardArr[i].children[2].textContent = data[i]["category"];
    cardArr[i].children[3].textContent = "$" + data[i]["price"];
}

const addItem = (itemName) => {
    const dataSrc = data.filter((item) => {
        return item.name == itemName; 
    })

    const itemData = {
        name: dataSrc[0]["name"],
        quantity: 1,
        price: dataSrc[0]["price"]
    }

    cart_list.push(itemData);
    console.log(cart_list);
    show_list();
    order_tot();
}

const update = (itemName, change) => {
    cart_list.forEach((item) => {
        if (item.name == itemName) {
            item.quantity += change;
        }
    })

    console.log(cart_list);
}

const cart = document.querySelectorAll(".cart");

for (i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", (ev) => {
        ev.currentTarget.style.zIndex = 0;
        ev.currentTarget.nextElementSibling.style.visibility = "visible";

        const itemName = ev.currentTarget.parentElement.nextElementSibling.textContent;
        addItem(itemName);
        calc_total();
    })
}

const incDec = (element, input) => {
    if (input == "dec") {
        const current = parseInt(element.nextElementSibling.textContent);
        const name = element.parentElement.parentElement.nextElementSibling.textContent;
        if (current == 1) {
            element.parentElement.style.visibility = "hidden";
            cart_list = cart_list.filter((item) => {
                return item.name != name;
            })
            console.log(cart_list);
        } else {
            element.nextElementSibling.textContent = current - 1;
            update(name, -1);
        }
    } else {
        const current = parseInt(element.previousElementSibling.textContent);
        element.previousElementSibling.textContent = current + 1;

        const name = element.parentElement.parentElement.nextElementSibling.textContent;
        update(name, 1);
    }
    calc_total();
    show_list();
    order_tot();
}

const inc = document.querySelectorAll(".inc");

for (i = 0; i < inc.length; i++) {
    inc[i].addEventListener("click", (ev) => {
        incDec(ev.currentTarget, "inc");
    })
}

const dec = document.querySelectorAll(".dec");

for (i = 0; i < dec.length; i++) {
    dec[i].addEventListener("click", (ev) => {
        incDec(ev.currentTarget, "dec");
    })
}

const calc_total = () => {
    let sum = 0;
    cart_list.forEach((item) => {
        sum = sum + item.quantity;
    })
    const totalELe = document.getElementById("total");
    totalELe.textContent = sum;
}

const order_tot = () => {
    let sum = 0;
    cart_list.forEach((item) => {
        sum += item.quantity*item.price;
    })
    const ele = document.getElementById("order_tot");
    ele.textContent = `$${sum}`;
}

let cart_list = [];

const item_sec = document.getElementById("act-items");

const show_list = () => {
    item_sec.textContent = "";

    cart_list.forEach((item) => {
        const list_ele = document.createElement("div");
        list_ele.classList.add("list-item");
        list_ele.innerHTML = `
        <section class="left_info">
            <div class="list-name">${item.name}</div>
            <div>
                <span class="list-quan">${item.quantity}x</span>
                <span class="list-pip">@ $${item.price}</span>
                <span class="list-itemTOT">$${item.price * item.quantity}</span>
            </div>
        </section>
        <img src="./assets/images/icon-remove-item.svg" alt="" class="remove">
        `;

        item_sec.appendChild(list_ele);

        const butt = document.querySelectorAll(".remove");
        butt.forEach((but) => {
            but.addEventListener("click", (ev) => {
                const name = ev.target.parentElement.children[0].children[0].textContent;
                const filter = data.filter((item) => {
                    return item["name"] == name;
                })

                const ind = data.indexOf(filter[0]);
                console.log(cardArr[ind].children[0])
                cardArr[ind].children[0].children[2].children[1].textContent = 1;
                cardArr[ind].children[0].children[2].style.visibility = "hidden";

                cart_list = cart_list.filter((item) => {
                    return item.name != name;
                })

                show_list();
                order_tot();
            })
        })
    })
}

const confo_list = () => {
    const dialog = document.querySelector(".con-orderItems");
    cart_list.forEach((item) => {
        const obj = data.filter((iter) => {
            return iter.name == item.name;
        })[0];

        const list_item = `
        <div class="conLI">
            <img src=${obj["image"]["thumbnail"]}>
            <section class="left_info">
                <div class="list-name">${item.name}</div>
                <div>
                    <span class="list-quan">${item.quantity}x</span>
                    <span class="list-pip">@ $${item.price}</span>
                </div>
            </section>
            <div class="totCon">$${item.price * item.quantity}</div>
        </div>
        `;
        dialog.innerHTML += list_item;
    })  

    let sum = 0;
    cart_list.forEach((item) => {
        sum = sum + item.price * item.quantity;
    })


    const order_tot_confo = `
    <div id="sum-sec">
        <div>Order total</div>
        <div id="order_tot">$${sum}</div>
    </div>
    `;

    dialog.innerHTML += order_tot_confo;
}

document.querySelector("#confirm").addEventListener("click", () => {
    confo_list();
    document.querySelector("dialog").showModal();
})

document.querySelector(".reset").addEventListener("click", () => {
    document.querySelector("dialog").close();
    location.reload();
})