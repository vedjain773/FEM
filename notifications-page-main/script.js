const markall = document.getElementById("markall");
const count = document.getElementById("count");
const notifs = document.getElementsByClassName("notifs");

markall.addEventListener("click", () => {
    for (i = 0; i < notifs.length; i++) {
        notifs[i].classList.remove("unread");
    }
    count.style.display = "none";
});

window.onload(() => {
    var counter;
    for (i = 0; i < notifs.length; i++) {
        if(notifs[i].classList.contains("unread")) {
            counter++;
        }
    }

    count.textContent = counter;
})