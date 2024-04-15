const mob_nav = document.getElementById("mob-nav");
const ham = document.getElementById("hamburger");
const close_ele = document.getElementById("close");
const mob_links = document.getElementsByClassName("pad-ele");
const cat = document.getElementsByClassName("pad-left-ele").item(0);

const activate = () => {
    mob_nav.classList.add("active");
}

const deactivate = () => {
    mob_nav.classList.remove("active");
}

ham.addEventListener("click", activate);
close_ele.addEventListener("click", deactivate);
cat.addEventListener("click", deactivate)

for (i = 0; i < mob_links.length; i++) {
    mob_links[i].addEventListener("click", deactivate);
}